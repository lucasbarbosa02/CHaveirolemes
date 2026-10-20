import React from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { MessageSquare, MapPin, Clock, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090B0E] border-t border-white/10 pt-16 pb-12 text-[#8C969F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/8">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#D9A441]" aria-hidden="true" />
              <span className="text-lg font-bold text-[#F4F6F8] tracking-tight">CHAVEIRO LEMES</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8C969F] leading-relaxed max-w-sm">
              Segurança e precisão em cada detalhe. Serviços especializados de chaveiro residencial, automotivo, chaves codificadas e fechaduras digitais no Setor Pedro Ludovico, Goiânia — GO.
            </p>
            <div className="text-xs text-[#8C969F] space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                <span>{COMPANY_INFO.schedule}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-[#F4F6F8] uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#F4F6F8] transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F4F6F8] transition-colors">Serviços Especializados</a>
              </li>
              <li>
                <a href="#atendimento-rapido" className="hover:text-[#F4F6F8] transition-colors">Atendimento & Socorro</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#F4F6F8] transition-colors">Por Que o Chaveiro Lemes</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#F4F6F8] transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#F4F6F8] transition-colors">Localização & Cobertura</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F4F6F8] transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold text-[#F4F6F8] uppercase tracking-wider">
              Atendimento Imediato
            </p>
            <p className="text-xs text-[#8C969F] leading-relaxed">
              Precisa de ajuda imediata para abrir porta de casa ou veículo em Goiânia? Nosso plantão atende até as 23h59.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de falar com o Chaveiro Lemes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-[#090B0E] text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#12161B] hover:bg-white/5 text-[#F4F6F8] text-xs font-medium border border-white/10 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>Ver Rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C969F]">
          <p>© {new Date().getFullYear()} Chaveiro Lemes. Todos os direitos reservados. Goiânia — GO.</p>
          <div className="flex items-center gap-6">
            <span>Avenida Transbrasiliana, Setor Pedro Ludovico</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#12161B] hover:bg-white/10 text-[#8C969F] hover:text-[#F4F6F8] transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
