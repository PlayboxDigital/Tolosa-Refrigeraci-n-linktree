import React, { useState } from 'react';
import { MINI_LANDING_CONFIG } from '../../data/miniLandingData';
import tolosaLogo from '../../assets/logo/logo-tolosa.png';

export const MiniHeader: React.FC = () => {
  const [logoLoadError, setLogoLoadError] = useState(false);

  return (
    <header className="flex flex-col items-center text-center pt-7 pb-4 px-4">
      {/* 
        LOGO OFICIAL TOLOSA — ASSET OFICIAL DIRECTO
        Logo real de la marca en alta definición:
        Isotipo original con copo de nieve blanco, tipografía auténtica TOLOSA en azul real
        y REFRIGERACION espaciado debajo sobre fondo transparente/blanco.
      */}
      <div className="relative mb-3 flex flex-col items-center justify-center min-h-[85px]">
        {!logoLoadError ? (
          <img
            src={tolosaLogo}
            alt="Tolosa Refrigeración - Logo Oficial"
            onError={() => setLogoLoadError(true)}
            className="h-20 sm:h-24 w-auto max-w-[260px] object-contain transition-opacity duration-200"
          />
        ) : (
          <div className="py-3 px-4 border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl text-slate-500 font-mono text-[11px] uppercase tracking-wider font-bold">
            [LOGO OFICIAL TOLOSA PENDIENTE]
          </div>
        )}
      </div>

      {/* Subtitle / Tagline */}
      <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 max-w-xs sm:max-w-sm">
        {MINI_LANDING_CONFIG.tagline}
      </p>

      {/* Clean unboxed categories metadata */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-500">
        {MINI_LANDING_CONFIG.categoriesPill.map((item, idx) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {idx < MINI_LANDING_CONFIG.categoriesPill.length - 1 && (
              <span aria-hidden="true" className="text-slate-300">·</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Texto de cobertura actualizado */}
      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
        <span className="w-1.5 h-1.5 rounded-full bg-[#04A9DF] animate-pulse"></span>
        <span>Tienda online con stock permanente · Envíos a toda la ciudad</span>
      </div>
    </header>
  );
};
