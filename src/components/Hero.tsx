import React from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, KeyRound, MapPin, Store, Zap } from 'lucide-react';

interface HeroProps {
  onExploreServices?: () => void;
  onOpenQuickDispatch?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenQuickDispatch }) => {
  const rawPhone = COMPANY_INFO.phoneRaw;
  const displayPhoneFormatted = COMPANY_INFO.phoneDisplay.replace('(', '').replace(')', '').replace(' ', '');

  return (
    <section id="inicio" className="relative min-h-[640px] lg:min-h-[740px] flex items-center bg-[#090B0E] overflow-hidden pt-24 sm:pt-32 pb-14 lg:py-28">
      {/* Background for Desktop & Large screens (Optimized Brightness & Clear Facade) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%] xl:w-[60%] pointer-events-none select-none overflow-hidden">
        <img
          src="/assets/lemes_storefront_bright.png"
          alt="Fachada real da oficina Chaveiro Lemes no Setor Pedro Ludovico em Goiânia"
          className="w-full h-full object-cover object-left-top xl:object-center brightness-105 contrast-105"
        />
        {/* Soft gradient keeping the yellow shop facade bright and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0E] via-[#090B0E]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-transparent to-[#090B0E]/40" />
      </div>

      {/* Atmospheric amber ambient glow */}
      <div 
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-[#F59E0B]/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge: PLANTÃO & ATENDIMENTO RÁPIDO (No 24h, clean and punchy) */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#F59E0B] bg-[#F59E0B]/15 text-[#F59E0B] text-[11px] sm:text-xs font-black tracking-wider uppercase mb-4 sm:mb-5 shadow-sm backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 fill-current" />
            <span>PLANTÃO & ATENDIMENTO RÁPIDO</span>
          </div>

          {/* Mobile-optimized Storefront Photo Display (Compact, bright, perfectly sized) */}
          <div className="block lg:hidden mb-5 rounded-lg sm:rounded-xl overflow-hidden border border-[#F59E0B]/40 shadow-xl relative aspect-[16/9] max-h-48 sm:max-h-56 bg-[#12161B]">
            <img
              src="/assets/lemes_storefront_bright.png"
              alt="Fachada Chaveiro Lemes no Setor Pedro Ludovico em Goiânia"
              className="w-full h-full object-cover object-top brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E]/90 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
              <span className="text-[10px] sm:text-[11px] font-bold text-white bg-[#090B0E]/85 backdrop-blur-md px-2 py-0.5 rounded border border-[#F59E0B]/30 flex items-center gap-1.5">
                <Store className="w-3 h-3 text-[#F59E0B]" />
                Loja Física: Av. Transbrasiliana, Qd. 201
              </span>
            </div>
          </div>

          {/* Original Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold tracking-tight leading-[1.1] text-white mb-4 sm:mb-5 [text-wrap:balance]">
            Segurança e precisão <br className="hidden sm:inline" />
            em cada detalhe.
          </h1>

          {/* Original Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#D1D5DB] leading-relaxed max-w-xl mb-7 sm:mb-8 [text-wrap:pretty]">
            Cópias de chaves, soluções residenciais e automotivas, chaves codificadas e fechaduras digitais em Goiânia. Atendimento ágil e oficina completa no Setor Pedro Ludovico.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-9">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de solicitar atendimento do Chaveiro Lemes.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm lg:text-base font-bold text-[#090B0E] bg-[#F59E0B] hover:bg-[#EAA01F] rounded-md transition-all duration-200 shadow-xl shadow-[#F59E0B]/20 whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Solicitar atendimento no WhatsApp</span>
            </a>

            <a
              href={`tel:+${rawPhone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm lg:text-base font-bold text-white bg-[#12161B]/90 hover:bg-[#1B2128] border border-white/20 hover:border-[#F59E0B] rounded-md transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Ligar: {displayPhoneFormatted}</span>
            </a>

            {onExploreServices && (
              <button
                type="button"
                onClick={onExploreServices}
                className="hidden xl:inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#8C969F] hover:text-white transition-colors"
              >
                <span>Ver serviços</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Trust Checkmarks */}
          <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-white/90">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Aberturas sem danos à fechadura</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <KeyRound className="w-4 h-4 text-[#F59E0B]" />
              <span>Cópias com calibragem de precisão</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-4 h-4 text-[#F59E0B]" />
              <span>Atendimento presencial e a domicílio</span>
            </div>
          </div>
        </div>

        {/* 4-Item Proof Strip below */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F59E0B] block">01 / CÓPIAS</span>
            <p className="text-xs sm:text-sm font-bold text-white">Residenciais & Tetra</p>
            <p className="text-[11px] text-[#8C969F]">Corte milimétrico no ato</p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F59E0B] block">02 / AUTOMOTIVO</span>
            <p className="text-xs sm:text-sm font-bold text-white">Chaves Codificadas</p>
            <p className="text-[11px] text-[#8C969F]">Transponder & canivete</p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F59E0B] block">03 / TECNOLOGIA</span>
            <p className="text-xs sm:text-sm font-bold text-white">Fechaduras Digitais</p>
            <p className="text-[11px] text-[#8C969F]">Biometria & senha</p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F59E0B] block">04 / PLANTÃO</span>
            <p className="text-xs sm:text-sm font-bold text-white">Até Meia-Noite</p>
            <p className="text-[11px] text-[#8C969F]">Atendimento rápido em Goiânia</p>
          </div>
        </div>
      </div>
    </section>
  );
};
