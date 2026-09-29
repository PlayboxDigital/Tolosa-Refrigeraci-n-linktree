/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MiniHeader } from './components/mini/MiniHeader';
import { MiniActionButtons } from './components/mini/MiniActionButtons';
import { MiniSocials } from './components/mini/MiniSocials';
import { MiniOffersBlock } from './components/mini/MiniOffersBlock';
import { MiniBrandsCarousel } from './components/mini/MiniBrandsCarousel';
import { MiniMostSearched } from './components/mini/MiniMostSearched';
import { MiniTechnicianCard } from './components/mini/MiniTechnicianCard';
import { MiniFooterWeb } from './components/mini/MiniFooterWeb';
import { AnalyticsInspector } from './components/AnalyticsInspector';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 sm:bg-slate-100/80 flex justify-center py-0 sm:py-6 px-0 sm:px-4 font-sans text-slate-900 selection:bg-[#04A9DF] selection:text-white">
      {/* Background ambient lighting on desktop */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-gradient-to-b from-[#04A9DF]/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Linktree Premium Hub Container */}
      <div className="w-full max-w-lg bg-white sm:rounded-[36px] sm:shadow-2xl sm:shadow-slate-300/60 sm:border sm:border-slate-200/80 overflow-hidden flex flex-col min-h-screen sm:min-h-0 relative">
        
        {/* Subtle decorative top brand accent line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#03ACE0] via-[#04A9DF] to-[#0284C7]" />

        {/* 1. Logo / presentación */}
        <MiniHeader />

        {/* 2. Comprar online & Hablar por WhatsApp */}
        <MiniActionButtons />

        {/* 3. Redes sociales (Instagram prioritario, TikTok, Facebook) */}
        <MiniSocials />

        {/* 4. Ofertas Tolosa */}
        <MiniOffersBlock />

        {/* 5. Marcas con las que trabajamos (Carrusel continuo) */}
        <MiniBrandsCarousel />

        {/* 6. Lo más buscado (4 productos seleccionados) */}
        <MiniMostSearched />

        {/* 7. Comunidad Tolosa (Tarjeta oscura gremio técnicos) */}
        <MiniTechnicianCard />

        {/* 8. Visitar nuestra web */}
        <MiniFooterWeb />

      </div>

      {/* Discreto monitor de eventos para auditoría de marketing / QA */}
      <AnalyticsInspector />
    </div>
  );
}
