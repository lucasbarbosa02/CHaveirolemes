import React, { useState } from 'react';
import { FAQ_ITEMS, getWhatsAppUrl } from '../data/content';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#090B0E] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F8] tracking-tight [text-wrap:balance]">
            Perguntas frequentes sobre nossos serviços.
          </h2>
          <p className="text-sm text-[#8C969F] mt-3 leading-relaxed [text-wrap:pretty]">
            Respostas diretas e transparentes sobre prazos, funcionamento do plantão e métodos de atendimento em Goiânia.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#12161B] border border-white/8 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A441]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#F4F6F8] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-md bg-[#1B2128] text-[#D9A441] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#8C969F] leading-relaxed border-t border-white/5">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question card */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#12161B] border border-white/5">
          <p className="text-sm text-[#F4F6F8] font-medium">
            Tem outra dúvida específica sobre sua fechadura ou veículo?
          </p>
          <p className="text-xs text-[#8C969F] mt-1">
            Fale conosco diretamente pelo WhatsApp e receba orientação rápida.
          </p>
          <div className="mt-4">
            <a
              href={getWhatsAppUrl('Olá, Chaveiro Lemes! Tenho uma dúvida sobre um serviço em Goiânia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1B2128] hover:bg-[#D9A441] text-[#F4F6F8] hover:text-[#090B0E] text-xs font-semibold transition-colors border border-white/10"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Tirar Dúvida no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
