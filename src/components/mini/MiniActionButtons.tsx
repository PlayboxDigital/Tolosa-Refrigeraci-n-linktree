import React from 'react';
import { ShoppingCart, MessageCircle, ArrowUpRight, ChevronRight } from 'lucide-react';
import { MINI_LANDING_CONFIG } from '../../data/miniLandingData';
import { trackEvent } from '../../utils/analytics';

export const MiniActionButtons: React.FC = () => {
  const handleBuyOnline = () => {
    trackEvent('click_comprar_online', {
      source: 'mini_landing_primary_button',
      destination: MINI_LANDING_CONFIG.officialWebUrl,
    });
  };

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', {
      source: 'mini_landing_whatsapp_button',
      destination: MINI_LANDING_CONFIG.whatsappCommercialUrl,
    });
  };

  return (
    <section className="px-4 py-2 space-y-3" aria-label="Accesos principales">
      
      {/* 1. COMPRAR ONLINE — Enlace absoluto externo a la web oficial */}
      <a
        href="https://tolosarefrigeracion.com.ar/"
        target="_self"
        rel="external"
        onClick={handleBuyOnline}
        className="w-full group relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#03ACE0] via-[#04A9DF] to-[#0284C7] text-white shadow-lg shadow-[#03ACE0]/30 hover:shadow-xl hover:shadow-[#03ACE0]/40 transition-all duration-200 active:scale-[0.98] border border-white/20 text-left flex items-center justify-between block"
      >
        {/* Subtle dynamic sheen line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="flex items-center gap-3.5 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight font-display uppercase">
                COMPRAR ONLINE
              </span>
              <span className="bg-white/25 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs">
                Web Oficial
              </span>
            </div>
            <p className="text-xs text-sky-100 font-medium mt-0.5">
              Ingresá al catálogo completo y comprá directo
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-xl bg-white text-[#0284C7] flex items-center justify-center shrink-0 shadow-sm group-hover:translate-x-1 transition-transform relative z-10">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </a>

      {/* 2. HABLAR POR WHATSAPP — Asesoramiento comercial directo */}
      <a
        href={MINI_LANDING_CONFIG.whatsappCommercialUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="w-full group p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-300 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] text-left flex items-center justify-between block"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-sm sm:text-base font-bold text-[#0B1E36] block">
              HABLAR POR WHATSAPP
            </span>
            <span className="text-xs text-slate-500">
              ¿Tenés una consulta? Te asesoramos.
            </span>
          </div>
        </div>

        <div className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all">
          <ChevronRight className="w-5 h-5" />
        </div>
      </a>

    </section>
  );
};
