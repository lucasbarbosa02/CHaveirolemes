import React, { useState } from 'react';
import { SERVICES, ServiceItem, getWhatsAppUrl } from '../data/content';
import { MessageSquare, ArrowUpRight, Check, KeyRound } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residencial' | 'automotivo' | 'cópias' | 'digital'>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeFilter);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3">
            <span>SERVIÇOS ESPECIALIZADOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F8] tracking-tight [text-wrap:balance]">
            Soluções completas com maquinário de alta precisão.
          </h2>
          <p className="text-base text-[#8C969F] mt-4 leading-relaxed [text-wrap:pretty]">
            Do atendimento residencial tradicional a sistemas veiculares codificados e controle de acesso digital. Atendimento presencial na oficina e atendimento de plantão em Goiânia.
          </p>

          {/* Interactive filter segmented controls (allowed functional filter buttons as per Section 1.A) */}
          <div className="flex flex-wrap items-center gap-2 mt-8 p-1.5 bg-[#12161B] rounded-lg border border-white/8 w-fit">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#1B2128] text-[#F4F6F8] shadow-sm border border-white/10'
                  : 'text-[#8C969F] hover:text-[#F4F6F8]'
              }`}
            >
              Todos os Serviços ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveFilter('cópias')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'cópias'
                  ? 'bg-[#1B2128] text-[#F4F6F8] shadow-sm border border-white/10'
                  : 'text-[#8C969F] hover:text-[#F4F6F8]'
              }`}
            >
              Cópias de Chaves
            </button>
            <button
              onClick={() => setActiveFilter('residencial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'residencial'
                  ? 'bg-[#1B2128] text-[#F4F6F8] shadow-sm border border-white/10'
                  : 'text-[#8C969F] hover:text-[#F4F6F8]'
              }`}
            >
              Residencial & Aberturas
            </button>
            <button
              onClick={() => setActiveFilter('automotivo')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'automotivo'
                  ? 'bg-[#1B2128] text-[#F4F6F8] shadow-sm border border-white/10'
                  : 'text-[#8C969F] hover:text-[#F4F6F8]'
              }`}
            >
              Automotivo & Codificadas
            </button>
            <button
              onClick={() => setActiveFilter('digital')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'digital'
                  ? 'bg-[#1B2128] text-[#F4F6F8] shadow-sm border border-white/10'
                  : 'text-[#8C969F] hover:text-[#F4F6F8]'
              }`}
            >
              Fechaduras Digitais
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const hasError = imageErrors[service.id];
            // Highlight marquee items (e.g. 1st or codificadas) with col-span on larger screens if appropriate
            const isMarquee = service.id === 'chaves-codificadas' || service.id === 'copia-chaves';

            return (
              <div
                key={service.id}
                className="group rounded-xl bg-[#12161B] border border-white/8 hover:border-[#D9A441]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D9A441]/5"
              >
                {/* Visual Asset Header */}
                <div className="relative aspect-[16/10] bg-[#1B2128] overflow-hidden">
                  {!hasError ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(service.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12161B] to-[#1B2128]">
                      <KeyRound className="w-10 h-10 text-[#D9A441] opacity-70 mb-2" />
                      <span className="text-xs text-[#8C969F]">{service.title}</span>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161B] via-[#12161B]/20 to-transparent" />

                  {/* Clean unboxed editorial number top-left */}
                  <div className="absolute top-3 left-3 text-xs font-mono font-bold text-[#D9A441] bg-[#090B0E]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {service.number}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#F4F6F8] group-hover:text-[#D9A441] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C969F] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#8C969F]">
                          <Check className="w-3.5 h-3.5 text-[#D9A441] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#1B2128] hover:bg-[#D9A441] text-[#F4F6F8] hover:text-[#090B0E] text-xs font-semibold transition-all duration-200 group/btn"
                    >
                      <span className="flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Solicitar Atendimento</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#12161B] via-[#1B2128] to-[#12161B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#F4F6F8]">
              Não encontrou o tipo de chave ou fechadura que precisa?
            </h4>
            <p className="text-xs sm:text-sm text-[#8C969F] mt-1">
              Envie uma foto da chave ou do mecanismo pelo WhatsApp e receba a avaliação técnica do Chaveiro Lemes.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Olá, Chaveiro Lemes! Gostaria de enviar uma foto para tirar uma dúvida sobre meu serviço.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-[#090B0E] text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-2 transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Enviar Foto no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
