import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { PROMO_HIGHLIGHTS, MINI_LANDING_CONFIG, PromoHighlight } from '../../data/miniLandingData';
import { trackEvent } from '../../utils/analytics';

export const MiniOffersBlock: React.FC = () => {
  const handlePromoClick = (promo: PromoHighlight) => {
    trackEvent('click_producto', {
      source: 'mini_landing_promo_card',
      promo_id: promo.id,
      promo_title: promo.title,
      destination: promo.link,
    });
  };

  const handleAllOffersClick = () => {
    trackEvent('click_comprar_online', {
      source: 'mini_landing_offers_block_all',
      destination: MINI_LANDING_CONFIG.offersUrl,
    });
  };

  return (
    <section className="px-4 py-3" aria-labelledby="offers-block-heading">
      {/* 1. SECCIÓN OFERTAS TOLOSA CON PALETA CORPORATIVA CELESTE/AZUL */}
      <div className="bg-gradient-to-br from-sky-50/60 via-slate-50 to-white rounded-2xl p-4 sm:p-5 border border-[#04A9DF]/30 shadow-xs">
        
        {/* Encabezado del bloque */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#04A9DF]" />
            <h2 id="offers-block-heading" className="text-xs font-extrabold text-[#0B1E36] font-display uppercase tracking-wider">
              OFERTAS TOLOSA
            </h2>
          </div>
          <span className="text-[10px] font-bold bg-[#04A9DF] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
            Promociones Web
          </span>
        </div>

        {/* Tarjetas de ofertas individuales con URLs absolutas a tolosarefrigeracion.com.ar */}
        <div className="space-y-2">
          {PROMO_HIGHLIGHTS.map((promo) => (
            <a
              key={promo.id}
              href={promo.link}
              target="_self"
              rel="external"
              onClick={() => handlePromoClick(promo)}
              className="group block bg-white rounded-xl p-3 border border-slate-200/90 hover:border-[#04A9DF]/60 shadow-xs hover:shadow-sm transition-all duration-200 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-slate-50 overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center">
                  <img
                    src={promo.imageUrl}
                    alt={promo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-[#0284C7] bg-[#04A9DF]/10 px-2 py-0.5 rounded border border-[#04A9DF]/20">
                    {promo.badge}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0B1E36] group-hover:text-[#04A9DF] transition-colors truncate mt-1">
                    {promo.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 truncate">
                    {promo.subtitle}
                  </p>
                </div>

                <div className="text-slate-400 group-hover:text-[#04A9DF] group-hover:translate-x-0.5 transition-transform shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Botón VER TODAS LAS OFERTAS con enlace absoluto a https://tolosarefrigeracion.com.ar/ofertas/ */}
        <div className="mt-3 pt-3 border-t border-slate-200/70">
          <a
            href="https://tolosarefrigeracion.com.ar/ofertas/"
            target="_self"
            rel="external"
            onClick={handleAllOffersClick}
            className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#04A9DF] text-[#0B1E36] hover:text-white border border-[#04A9DF]/40 hover:border-[#04A9DF] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
          >
            <span>VER TODAS LAS OFERTAS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
