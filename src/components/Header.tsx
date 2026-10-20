import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/content';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { WrenchKeyIcon } from './WrenchKeyIcon';

interface HeaderProps {
  onOpenQuickDispatch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickDispatch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Setores', href: '#localizacao' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Regiões', href: '#localizacao' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#atendimento-rapido' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Slim Yellow Top Banner Bar (Optimized for Mobile, No 24h, Compact Single-Line) */}
      <div className="bg-[#F59E0B] text-[#090B0E] py-0.5 sm:py-1 px-3 sm:px-4 text-[10px] sm:text-xs font-black tracking-wide flex items-center justify-center gap-1.5 sm:gap-3 text-center border-b border-[#D9A441]/40 shadow-sm leading-tight">
        <div className="flex items-center gap-1 shrink-0">
          <Zap className="w-3 h-3 fill-current" />
          <span className="uppercase">PLANTÃO & ATENDIMENTO RÁPIDO</span>
        </div>
        <span className="text-black/40" aria-hidden="true">·</span>
        <span className="hidden sm:inline text-[11px] font-bold">GOIÂNIA E REGIÃO</span>
        <span className="hidden sm:inline text-black/40" aria-hidden="true">·</span>
        <a
          href={`tel:+${COMPANY_INFO.phoneRaw}`}
          className="inline-flex items-center gap-1 hover:underline font-black text-[#090B0E] shrink-0"
        >
          <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
          <span>LIGAR: {COMPANY_INFO.phoneDisplay.replace('(', '').replace(')', '').replace(' ', '')}</span>
        </a>
      </div>

      {/* Main Navbar (Slim and Optimized for Mobile) */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090B0E]/95 backdrop-blur-md border-b border-white/10 py-1.5 sm:py-2.5 shadow-2xl'
            : 'bg-[#090B0E]/85 backdrop-blur-sm py-2 sm:py-3 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Lockup: Yellow icon with Stylized Wrench-Key + 2-line title */}
            <a
              href="#inicio"
              className="flex items-center gap-2 sm:gap-3 shrink-0 group"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg bg-[#F59E0B] flex items-center justify-center text-[#090B0E] shadow-md group-hover:bg-[#EAA01F] transition-colors shrink-0">
                <WrenchKeyIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current text-[#090B0E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-white leading-none">
                  Chaveiro Lemes
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#F59E0B] tracking-wider uppercase mt-0.5">
                  APARECIDA E GOIÂNIA E REGIÃO
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/90">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-[#F59E0B] transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Direct Call Button (Yellow/amber button) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:+${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black text-[#090B0E] bg-[#F59E0B] hover:bg-[#EAA01F] rounded-md transition-all duration-200 shadow-md hover:shadow-[#F59E0B]/20 whitespace-nowrap shrink-0 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{COMPANY_INFO.phoneDisplay.replace('(', '').replace(')', '').replace(' ', '')}</span>
              </a>
            </div>

            {/* Mobile action & hamburger */}
            <div className="flex sm:hidden items-center gap-1.5">
              <a
                href={`tel:+${COMPANY_INFO.phoneRaw}`}
                className="px-2.5 py-1 text-[11px] font-bold text-[#090B0E] bg-[#F59E0B] rounded-md hover:bg-[#EAA01F] transition-colors flex items-center gap-1"
                aria-label="Ligar agora"
              >
                <Phone className="w-3 h-3 fill-current" />
                <span>Ligar</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#12161B]/95 backdrop-blur-lg border-b border-white/10 px-4 pt-3 pb-5 mt-2 space-y-2.5">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-white hover:text-[#F59E0B] py-2 px-3 rounded hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:+${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#090B0E] bg-[#F59E0B] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={getWhatsAppUrl('Olá! Preciso de atendimento do Chaveiro Lemes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-[#25D366] rounded-md transition-colors"
              >
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
