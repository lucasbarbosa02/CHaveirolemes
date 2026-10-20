import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/content';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5">
      {/* Mini tooltip for first time visitors */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#12161B] text-[#F4F6F8] px-3.5 py-2 rounded-lg border border-[#D9A441]/30 shadow-xl text-xs animate-in fade-in slide-in-from-right-3 duration-300">
          <div>
            <p className="font-semibold text-[#F4F6F8]">Plantão até Meia-Noite</p>
            <p className="text-[11px] text-[#8C969F]">Chame o Chaveiro Lemes no WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8C969F] hover:text-[#F4F6F8] p-1 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl('Olá! Preciso de atendimento com o Chaveiro Lemes.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Chaveiro Lemes"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-[#090B0E] flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95 group relative"
      >
        <span className="sr-only">Atendimento WhatsApp Chaveiro Lemes</span>
        <MessageSquare className="w-6 h-6 fill-current transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
};
