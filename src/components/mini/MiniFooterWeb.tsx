import React from 'react';
import { Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export const MiniFooterWeb: React.FC = () => {
  const handleVisitWeb = () => {
    trackEvent('click_comprar_online', {
      source: 'mini_landing_footer_web_button',
      destination: 'https://tolosarefrigeracion.com.ar/',
    });
  };

  return (
    <footer className="px-4 pt-3 pb-10 text-center">
      {/* 🌐 VISITAR NUESTRA WEB — URL absoluta con target="_self" */}
      <a
        href="https://tolosarefrigeracion.com.ar/"
        target="_self"
        rel="external"
        onClick={handleVisitWeb}
        className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#04A9DF] text-[#0B1E36] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] group block"
      >
        <div className="flex items-center justify-center gap-2.5">
          <Globe className="w-5 h-5 text-[#04A9DF] group-hover:rotate-12 transition-transform" />
          <span className="tracking-wide uppercase">VISITAR NUESTRA WEB</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#04A9DF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </a>

      <p className="mt-2.5 text-xs text-slate-500 font-medium">
        tolosarefrigeracion.com.ar
      </p>

      {/* Micro badges */}
      <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5 text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-[#04A9DF]" />
          <span>Venta oficial de insumos, herramientas y repuestos</span>
        </div>
        <p>© {new Date().getFullYear()} Tolosa Refrigeración · La Plata, Argentina</p>
      </div>
    </footer>
  );
};
