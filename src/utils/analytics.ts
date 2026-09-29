import { AnalyticsEvent, AnalyticsEventType } from '../types';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type EventSubscriber = (event: AnalyticsEvent) => void;
const subscribers: Set<EventSubscriber> = new Set();
const eventHistory: AnalyticsEvent[] = [];

export function subscribeToAnalytics(callback: EventSubscriber): () => void {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

export function getEventHistory(): AnalyticsEvent[] {
  return [...eventHistory];
}

export function trackEvent(name: AnalyticsEventType, payload: Record<string, unknown> = {}): void {
  const event: AnalyticsEvent = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toLocaleTimeString('es-AR', { hour12: false }),
    name,
    payload,
  };

  eventHistory.unshift(event);
  if (eventHistory.length > 50) {
    eventHistory.pop();
  }

  // 1. GTM dataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      ...payload,
      timestamp: event.timestamp,
    });

    // 2. Google Analytics gtag
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, payload);
    }

    // 3. Meta Pixel fbq
    if (typeof window.fbq === 'function') {
      if (name === 'inicio_checkout') {
        window.fbq('track', 'InitiateCheckout', payload);
      } else if (name === 'click_producto' || name === 'click_comprar_online') {
        window.fbq('trackCustom', name, payload);
      } else {
        window.fbq('trackCustom', name, payload);
      }
    }
  }

  // 4. Notify app subscribers (QA/Inspector)
  subscribers.forEach((sub) => {
    try {
      sub(event);
    } catch (e) {
      console.error('Error notifying analytics subscriber', e);
    }
  });

  // 5. Clean console log for developers
  if (process.env.NODE_ENV !== 'production') {
    // Quiet debug trace
    console.debug(`[Tolosa Analytics] Event: ${name}`, payload);
  }
}
