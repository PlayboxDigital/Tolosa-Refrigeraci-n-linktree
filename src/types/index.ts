export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  tag?: string;
  popularItems: string[];
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  installments?: string;
  code?: string;
  stockStatus: 'in_stock' | 'low_stock';
  badge?: string;
  link: string;
  imageUrl: string;
}

export type AnalyticsEventType =
  | 'click_comprar_online'
  | 'click_producto'
  | 'click_categoria'
  | 'click_whatsapp'
  | 'click_instagram'
  | 'inicio_checkout'
  | 'click_comunidad_tecnicos';

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  name: AnalyticsEventType;
  payload: Record<string, unknown>;
}
