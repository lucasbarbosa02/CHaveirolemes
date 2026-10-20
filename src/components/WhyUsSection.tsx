import React from 'react';
import { WHY_US_ITEMS, COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { MapPin, Clock, Wrench, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const icons = [MapPin, Clock, Wrench, MessageSquare];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#0D1014] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3">
            <span>DIFERENCIAIS COMPROVADOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F8] tracking-tight [text-wrap:balance]">
            Por que confiar no Chaveiro Lemes?
          </h2>
          <p className="text-base text-[#8C969F] mt-4 leading-relaxed [text-wrap:pretty]">
            Sem promessas exageradas ou artifícios. Trabalhamos com compromisso real, atendimento qualificado e transparência direta pelo WhatsApp.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={item.number}
                className="p-7 rounded-xl bg-[#12161B] border border-white/8 hover:border-[#D9A441]/35 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#D9A441] bg-[#1B2128] px-2.5 py-1 rounded border border-white/5">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white/5 text-[#D9A441] group-hover:bg-[#D9A441]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#F4F6F8] group-hover:text-[#D9A441] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8C969F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8C969F]">
                  <span>Oficina em Goiânia</span>
                  <span className="text-[#D9A441] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Saiba mais <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Action Strip */}
        <div className="mt-12 p-6 rounded-xl bg-[#12161B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-[#D9A441]/10 text-[#D9A441]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#F4F6F8]">Plantão ativo até meia-noite (23h59)</p>
              <p className="text-xs text-[#8C969F]">Atendimento a imprevistos em residências e veículos na capital.</p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl('Olá! Preciso de atendimento em Goiânia durante o plantão.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-[#D9A441] hover:bg-[#E5B252] text-[#090B0E] text-xs font-bold whitespace-nowrap transition-colors"
          >
            Falar com Chaveiro no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
