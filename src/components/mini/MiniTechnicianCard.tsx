import React from 'react';
import { MessageCircle, Instagram, Wrench, ArrowUpRight } from 'lucide-react';
import { MINI_LANDING_CONFIG } from '../../data/miniLandingData';
import { trackEvent } from '../../utils/analytics';

export const MiniTechnicianCard: React.FC = () => {
  const handleJoinWhatsApp = () => {
    trackEvent('click_comunidad_tecnicos', {
      source: 'mini_landing_tech_card_whatsapp',
      channel: 'whatsapp_group',
      destination: MINI_LANDING_CONFIG.communityUrls.whatsappGroup,
    });
  };

  const handleInstagramChannel = () => {
    trackEvent('click_instagram', {
      source: 'mini_landing_tech_card_instagram_channel',
      channel: 'instagram_channel',
      destination: MINI_LANDING_CONFIG.communityUrls.instagramChannel,
    });
  };

  return (
    <section className="px-4 py-3" aria-labelledby="community-card-heading">
      <div className="bg-gradient-to-br from-slate-900 via-[#0B1E36] to-slate-900 text-white rounded-3xl p-5 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#04A9DF]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#04A9DF]/20 flex items-center justify-center text-[#04A9DF]">
                <Wrench className="w-4 h-4" />
              </div>
              <h2 id="community-card-heading" className="text-base font-extrabold font-display tracking-tight text-white uppercase">
                COMUNIDAD TOLOSA
              </h2>
            </div>
            <span className="text-[10px] font-bold text-sky-300 bg-sky-950/80 border border-sky-800/80 px-2 py-0.5 rounded-full uppercase">
              Técnicos
            </span>
          </div>

          {/* Texto corto */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            ¿Sos técnico en refrigeración? Formá parte de nuestra comunidad.
          </p>

          {/* Dos opciones claramente diferenciadas (SIN botón genérico "Sumarme a la comunidad") */}
          <div className="space-y-2.5">
            {/* Opción 1: 💬 GRUPO WHATSAPP */}
            <a
              href={MINI_LANDING_CONFIG.communityUrls.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleJoinWhatsApp}
              className="w-full p-3.5 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-left transition-all active:scale-[0.98] flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-white block">
                    GRUPO WHATSAPP
                  </span>
                  <span className="text-xs text-emerald-200">
                    Comunidad de técnicos
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Opción 2: 📸 COMUNIDAD INSTAGRAM */}
            <a
              href={MINI_LANDING_CONFIG.communityUrls.instagramChannel}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramChannel}
              className="w-full p-3.5 rounded-2xl bg-rose-600/15 hover:bg-rose-600/25 border border-rose-500/30 text-left transition-all active:scale-[0.98] flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-white block">
                    COMUNIDAD INSTAGRAM
                  </span>
                  <span className="text-xs text-rose-200">
                    Canal de Instagram
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-rose-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
