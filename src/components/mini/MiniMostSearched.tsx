import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { MOST_SEARCHED_ITEMS, MostSearchedItem } from '../../data/miniLandingData';
import { trackEvent } from '../../utils/analytics';

export const MiniMostSearched: React.FC = () => {
  // 4 elementos con fotos oficiales y URLs absolutas a tolosarefrigeracion.com.ar
  const topFourItems = MOST_SEARCHED_ITEMS.slice(0, 4);

  const handleClick = (item: MostSearchedItem) => {
    trackEvent('click_producto', {
      source: 'mini_landing_most_searched',
      product_id: item.id,
      product_name: item.name,
      destination: item.link,
    });
  };

  return (
    <section className="px-4 py-3" aria-labelledby="most-searched-heading">
      {/* Título de la sección */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#04A9DF]" />
          <h2 id="most-searched-heading" className="text-xs font-extrabold text-[#0B1E36] font-display uppercase tracking-wider">
            LO MÁS BUSCADO
          </h2>
        </div>
        <span className="text-[10px] text-slate-500 font-medium">Directo a la tienda</span>
      </div>

      {/* Grid de 4 tarjetas completas clickeables hacia URLs externas reales */}
      <div className="grid grid-cols-2 gap-2.5">
        {topFourItems.map((item) => {
          const isMensula = item.id === 'mensulas-soportes';

          return (
            <a
              key={item.id}
              href={item.link}
              target="_self"
              rel="external"
              onClick={() => handleClick(item)}
              className="group block bg-white rounded-2xl border border-slate-200 hover:border-[#04A9DF]/60 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-[#04A9DF]"
            >
              {/* Contenedor de Imagen oficial para cada categoría */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-center transition-transform duration-300 ${
                    isMensula 
                      ? 'scale-110 group-hover:scale-115' 
                      : 'group-hover:scale-105'
                  }`}
                />
                {item.badge && (
                  <div className="absolute top-2 left-2 bg-[#0B1E36]/90 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-xs">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-3">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B1E36] group-hover:text-[#04A9DF] transition-colors leading-snug line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                  {item.categoryTag}
                </p>

                {/* Botón Ver opciones */}
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7] group-hover:text-[#04A9DF]">
                  <span>Ver opciones</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
