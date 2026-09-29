import React, { useState, useEffect } from 'react';
import { Activity, X, Trash2, CheckCircle2, ChevronUp, ChevronDown } from 'lucide-react';
import { subscribeToAnalytics, getEventHistory } from '../utils/analytics';
import { AnalyticsEvent } from '../types';

export const AnalyticsInspector: React.FC = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [latestToast, setLatestToast] = useState<AnalyticsEvent | null>(null);

  useEffect(() => {
    setEvents(getEventHistory());
    const unsubscribe = subscribeToAnalytics((newEvent) => {
      setEvents((prev) => [newEvent, ...prev.slice(0, 49)]);
      setLatestToast(newEvent);
      const timer = setTimeout(() => {
        setLatestToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    });
    return () => unsubscribe();
  }, []);

  const clearEvents = () => {
    setEvents([]);
  };

  return (
    <>
      {/* Real-time mini event toast for verification */}
      {latestToast && !isOpen && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-xs px-3.5 py-2.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2.5 animate-in slide-in-from-right-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <p className="font-mono text-[#04A9DF] font-bold">
              GA4/Pixel: {latestToast.name}
            </p>
            <p className="text-[10px] text-slate-400">
              Registrado a las {latestToast.timestamp}
            </p>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <div className="fixed bottom-20 md:bottom-5 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-slate-200 border border-slate-700 text-[11px] font-mono shadow-lg backdrop-blur-sm transition-all"
          title="Monitorear eventos de analítica Meta Pixel y GA4"
        >
          <Activity className="w-3.5 h-3.5 text-[#04A9DF] animate-pulse" />
          <span>Tracking QA ({events.length})</span>
          {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
        </button>
      </div>

      {/* Expanded Inspector Panel */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-14 left-4 z-40 w-80 sm:w-96 max-h-96 bg-slate-950 text-slate-200 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden text-xs font-mono animate-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#04A9DF]" />
              <span className="font-bold text-slate-200">Embudo & Eventos GA4/Pixel</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearEvents}
                className="text-slate-400 hover:text-white p-1"
                title="Limpiar registro"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List of events */}
          <div className="p-3 overflow-y-auto flex-1 space-y-2 divide-y divide-slate-800/60">
            {events.length === 0 ? (
              <p className="text-slate-500 py-6 text-center text-[11px]">
                Interactuá con los botones o productos de la página para ver los eventos disparados en tiempo real.
              </p>
            ) : (
              events.map((ev) => (
                <div key={ev.id} className="pt-2 first:pt-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#04A9DF]">{ev.name}</span>
                    <span className="text-[10px] text-slate-500">{ev.timestamp}</span>
                  </div>
                  <pre className="mt-1 text-[10px] text-slate-400 bg-slate-900/80 p-2 rounded overflow-x-auto whitespace-pre-wrap">
                    {JSON.stringify(ev.payload, null, 2)}
                  </pre>
                </div>
              ))
            )}
          </div>

          <div className="p-2 bg-slate-900 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>window.dataLayer & gtag sync</span>
            <span className="text-emerald-400">● Activo</span>
          </div>
        </div>
      )}
    </>
  );
};
