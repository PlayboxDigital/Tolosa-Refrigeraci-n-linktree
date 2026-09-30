import React, { useState } from 'react';
import { Award, Image as ImageIcon } from 'lucide-react';

interface RealBrand {
  id: string;
  name: string;
  logoUrl?: string;
}

// Usar solo logos oficiales disponibles; las marcas pendientes muestran un placeholder gráfico.
const BRANDS: RealBrand[] = [
  { id: 'value-1', name: 'VALUE', logoUrl: '/brands/value.png' },
  { id: 'cooltech', name: 'COOLTECH', logoUrl: '/brands/cooltech.webp' },
  { id: 'tigre', name: 'TIGRE', logoUrl: '/brands/tigre.png' },
  { id: 'freon', name: 'Freon', logoUrl: '/brands/freon.png' },
  { id: 'electrolux', name: 'Electrolux', logoUrl: '/brands/electrolux.png' },
  { id: 'gmcc', name: 'GMCC', logoUrl: '/brands/gmcc.png' },
  { id: 'eluma', name: 'ELUMA', logoUrl: '/brands/eluma.png' },
  { id: 'anton', name: 'ANTON', logoUrl: '/brands/anton.webp' },
  { id: 'refrioil', name: 'REFRIOIL', logoUrl: '/brands/refrioil.png' },
  { id: 'value-2', name: 'VALUE', logoUrl: '/brands/value.png' },
  { id: 'carrier', name: 'Carrier', logoUrl: '/brands/carrier.png' },
  { id: 'tecumseh', name: 'Tecumseh', logoUrl: '/brands/tecumseh.png' },
  { id: 'cobresul', name: 'COBRESUL', logoUrl: '/brands/cobresul.png' },
  { id: 'surrey', name: 'Surrey', logoUrl: '/brands/surrey.jpg' },
  { id: 'ac-c', name: 'AC&C Electrical Components', logoUrl: '/brands/ac-c-electrical-components.png' },
  { id: 'motech', name: 'Motech', logoUrl: '/brands/motech.png' },
  { id: 'necton', name: 'Necton Gases Refrigerantes', logoUrl: '/brands/necton.png' },
  { id: 'embraco', name: 'Embraco', logoUrl: '/brands/embraco.png' },
  { id: 'elitech', name: 'Elitech', logoUrl: '/brands/elitech.png' },
  { id: 'midea', name: 'Midea', logoUrl: '/brands/midea.svg' },
  { id: 'evertech', name: 'Evertech', logoUrl: '/brands/evertech.svg' },
];

const BRAND_SIZE_CLASSES: Record<string, string> = {
  'value-1': 'w-auto max-h-9 max-w-[118px]',
  cooltech: 'w-auto max-h-10 max-w-[120px]',
  tigre: 'w-auto max-h-10 max-w-[120px]',
  freon: 'w-auto max-h-9 max-w-[120px]',
  electrolux: 'w-auto max-h-9 max-w-[120px]',
  gmcc: 'w-auto max-h-10 max-w-[116px]',
  eluma: 'w-auto max-h-9 max-w-[120px]',
  anton: 'w-auto max-h-9 max-w-[120px]',
  refrioil: 'w-auto max-h-9 max-w-[120px]',
  'value-2': 'w-auto max-h-9 max-w-[118px]',
  carrier: 'w-auto max-h-9 max-w-[120px]',
  tecumseh: 'w-auto max-h-9 max-w-[120px]',
  cobresul: 'w-auto max-h-9 max-w-[120px]',
  surrey: 'w-[104px] max-h-9 max-w-[120px]',
  'ac-c': 'w-auto max-h-10 max-w-[120px]',
  motech: 'w-auto max-h-10 max-w-[120px]',
  necton: 'w-auto max-h-10 max-w-[120px]',
  embraco: 'w-auto max-h-9 max-w-[120px]',
  elitech: 'w-auto max-h-9 max-w-[120px]',
  midea: 'w-auto max-h-9 max-w-[118px]',
  evertech: 'w-auto max-h-10 max-w-[120px]',
};

const BrandLogo: React.FC<{ brand: RealBrand }> = ({ brand }) => {
  const [failed, setFailed] = useState(false);

  if (!brand.logoUrl || failed) {
    return (
      <div
        aria-label={`Logo pendiente de ${brand.name}`}
        className="w-8 h-8 rounded-md border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-300"
      >
        <ImageIcon className="w-4 h-4" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={brand.logoUrl}
      alt={`Logo oficial de ${brand.name}`}
      className={`h-auto object-contain transition-transform duration-200 hover:scale-105 ${BRAND_SIZE_CLASSES[brand.id] ?? 'w-auto max-h-9 max-w-[120px]'}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export const MiniBrandsCarousel: React.FC = () => {
  // Bucle infinito fluido duplicando la lista de logos reales
  const marqueeList = [...BRANDS, ...BRANDS];

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

      {/* Carrusel continuo e infinito con logos disponibles y placeholders gráficos */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee py-1 gap-3 flex items-center">
          {marqueeList.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="shrink-0 h-14 px-2 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center min-w-[136px] hover:border-[#04A9DF]/50 transition-colors"
            >
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
