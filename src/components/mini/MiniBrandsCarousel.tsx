import React from 'react';
import { Award } from 'lucide-react';

interface RealBrand {
  id: string;
  name: string;
  logoUrl: string;
}

// Logos reales oficiales verificados de las marcas principales con las que trabaja Tolosa Refrigeración
const OFFICIAL_REAL_BRANDS: RealBrand[] = [
  { id: 'value', name: 'VALUE Tools', logoUrl: '/brands/value.svg' },
  { id: 'anton', name: 'ANTON Gases', logoUrl: '/brands/anton.svg' },
  { id: 'carrier', name: 'Carrier', logoUrl: '/brands/carrier.svg' },
  { id: 'danfoss', name: 'Danfoss', logoUrl: '/brands/danfoss.svg' },
  { id: 'surrey', name: 'Surrey', logoUrl: '/brands/surrey.svg' },
  { id: 'bgh', name: 'BGH', logoUrl: '/brands/bgh.svg' },
  { id: 'daikin', name: 'Daikin', logoUrl: '/brands/daikin.svg' },
  { id: 'dupont', name: 'DuPont', logoUrl: '/brands/dupont.svg' },
  { id: 'york', name: 'YORK', logoUrl: '/brands/york.svg' },
];

export const MiniBrandsCarousel: React.FC = () => {
  // Bucle infinito fluido duplicando la lista de logos reales
  const marqueeList = [...OFFICIAL_REAL_BRANDS, ...OFFICIAL_REAL_BRANDS];

  return (
    <section className="py-3.5 overflow-hidden" aria-labelledby="brands-heading">
      <div className="px-4 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#04A9DF]" />
          <h2 id="brands-heading" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
            TRABAJAMOS CON LAS PRINCIPALES MARCAS
          </h2>
        </div>
        <span className="text-[10px] text-slate-400 font-medium">Marcas oficiales</span>
      </div>

      {/* Carrusel continuo suave e infinito con logos reales en SVG de alta legibilidad */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee py-1 gap-3 flex items-center">
          {marqueeList.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="shrink-0 h-14 px-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center min-w-[136px] hover:border-[#04A9DF]/50 transition-colors"
            >
              <img
                src={brand.logoUrl}
                alt={`Logo oficial de ${brand.name}`}
                className="h-7 w-auto max-w-[108px] object-contain transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
