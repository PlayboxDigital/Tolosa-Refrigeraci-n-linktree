import React from 'react';
import { Instagram, Facebook, ArrowUpRight, Share2 } from 'lucide-react';
import { MINI_LANDING_CONFIG } from '../../data/miniLandingData';
import { trackEvent } from '../../utils/analytics';

// Official recognized TikTok logo SVG
const TikTokOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="TikTok">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.53a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.25a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V7.94a8.16 8.16 0 0 0 4.91 1.63V6.12a4.85 4.85 0 0 1-1-.43z" />
  </svg>
);

export const MiniSocials: React.FC = () => {
  const handleSocialClick = (platform: 'instagram' | 'tiktok' | 'facebook', url: string) => {
    trackEvent('click_instagram', {
      source: 'mini_landing_socials',
      platform,
      destination: url,
    });
  };

  return (
    <section className="px-4 py-3" aria-labelledby="socials-heading">
      <div className="mb-2.5 px-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Share2 className="w-4 h-4 text-[#04A9DF]" />
          <h2 id="socials-heading" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
            SEGUINOS
          </h2>
        </div>
        <span className="text-[11px] text-slate-500 font-semibold">
          {MINI_LANDING_CONFIG.socials.instagram.handle}
        </span>
      </div>

      <div className="space-y-2">
        {/* Instagram - MAYOR PROTAGONISMO */}
        <a
          href={MINI_LANDING_CONFIG.socials.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialClick('instagram', MINI_LANDING_CONFIG.socials.instagram.url)}
          className="w-full group p-3.5 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 hover:from-pink-500/20 hover:via-purple-500/20 hover:to-amber-500/20 border border-pink-200/80 text-slate-900 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-between block"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold text-[#0B1E36]">
                  Instagram Oficial
                </span>
                <span className="text-[9px] font-bold bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded">
                  Principal
                </span>
              </div>
              <span className="text-[11px] text-slate-500 block">
                {MINI_LANDING_CONFIG.socials.instagram.handle} · Novedades y tips técnicos
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-rose-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* TikTok & Facebook Grid con enlaces reales oficiales */}
        <div className="grid grid-cols-2 gap-2">
          {/* TikTok con logo oficial reconocible */}
          <a
            href={MINI_LANDING_CONFIG.socials.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('tiktok', MINI_LANDING_CONFIG.socials.tiktok.url)}
            className="group p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-800 shadow-xs transition-all active:scale-[0.98] flex items-center justify-between block"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-xs">
                <TikTokOfficialIcon className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#0B1E36] block">TikTok</span>
                <span className="text-[10px] text-slate-500">Videos y unboxing</span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800" />
          </a>

          {/* Facebook con URL real confirmada */}
          <a
            href={MINI_LANDING_CONFIG.socials.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('facebook', MINI_LANDING_CONFIG.socials.facebook.url)}
            className="group p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-800 shadow-xs transition-all active:scale-[0.98] flex items-center justify-between block"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Facebook className="w-4 h-4 fill-white text-white" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#0B1E36] block">Facebook</span>
                <span className="text-[10px] text-slate-500">Comunidad Tolosa</span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
