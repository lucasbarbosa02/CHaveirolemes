import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppUrl, SERVICE_REGIONS } from '../data/content';
import { MessageSquare, Car, Home, Key, Lock, Phone, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface QuickServiceSelectorProps {
  id?: string;
}

export const QuickServiceSelector: React.FC<QuickServiceSelectorProps> = ({ id = 'atendimento-rapido' }) => {
  const [selectedService, setSelectedService] = useState('Chave trancada dentro do carro');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Setor Pedro Ludovico');
  const [urgency, setUrgency] = useState<'normal' | 'urgente'>('urgente');
  const [details, setDetails] = useState('');

  const emergencyOptions = [
    {
      id: 'carro-trancado',
      label: 'Chave trancada dentro do carro',
      icon: Car,
      hint: 'Abertura rápida sem danificar a lataria',
    },
    {
      id: 'porta-residencial',
      label: 'Porta trancada / Chave emperrada em casa',
      icon: Home,
      hint: 'Abertura residencial técnica e troca de miolo',
    },
    {
      id: 'copia-codificada',
      label: 'Cópia de chave codificada / canivete',
      icon: Key,
      hint: 'Programação de chip transponder para veículos',
    },
    {
      id: 'fechadura-digital',
      label: 'Instalação / Reparo de fechadura digital',
      icon: Lock,
      hint: 'Biometria, senha e configuração em portas',
    },
  ];

  const handleGenerateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const urgencyText = urgency === 'urgente' ? '🚨 [URGÊNCIA / AGORA]' : '📋 [ORÇAMENTO / DÚVIDA]';
    const detailPart = details.trim() ? `\n• Detalhes adicionais: ${details.trim()}` : '';

    const message = `Olá, Chaveiro Lemes! Preciso de atendimento em Goiânia:
${urgencyText}
• Serviço: ${selectedService}
• Bairro/Local: ${selectedNeighborhood}${detailPart}

Poderia me informar a disponibilidade e valores para esse atendimento?`;

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id={id} className="py-14 sm:py-20 relative bg-[#0D1014] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Header left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#D9A441]">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>ATENDIMENTO DIRETO & PLANTÃO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6F8] tracking-tight [text-wrap:balance]">
              Precisa de socorro ou orçamento em Goiânia?
            </h2>
            <p className="text-sm text-[#8C969F] leading-relaxed">
              Configure seu pedido em poucos cliques. Criamos uma mensagem estruturada no WhatsApp para você ser atendido sem perda de tempo e com todos os dados essenciais.
            </p>

            <div className="p-4 rounded-lg bg-[#12161B] border border-white/8 space-y-2 mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F6F8]">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>Plantão ativo até meia-noite</span>
              </div>
              <p className="text-xs text-[#8C969F] pl-6">
                Deslocamento e atendimento presencial no Setor Pedro Ludovico, Bueno, Marista, Jardim Goiás e cidades vizinhas.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#8C969F]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                WhatsApp comercial verificado
              </span>
              <span>·</span>
              <span>Sem intermediários</span>
            </div>
          </div>

          {/* Form right */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleGenerateWhatsApp}
              className="p-6 sm:p-8 rounded-xl bg-[#12161B] border border-white/10 shadow-xl space-y-6"
            >
              {/* Need selector */}
              <div>
                <label className="block text-xs font-semibold text-[#8C969F] uppercase tracking-wider mb-3">
                  1. Qual é a sua necessidade atual?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {emergencyOptions.map((opt) => {
                    const isSelected = selectedService === opt.label;
                    const Icon = opt.icon;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedService(opt.label)}
                        className={`text-left p-3.5 rounded-lg border transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#1B2128] border-[#D9A441] text-[#F4F6F8] shadow-sm'
                            : 'bg-[#090B0E]/60 border-white/5 text-[#8C969F] hover:border-white/15 hover:text-[#F4F6F8]'
                        }`}
                      >
                        <div
                          className={`p-2 rounded shrink-0 ${
                            isSelected ? 'bg-[#D9A441]/20 text-[#D9A441]' : 'bg-white/5 text-[#8C969F]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold leading-snug">{opt.label}</p>
                          <p className="text-[11px] text-[#8C969F] mt-0.5">{opt.hint}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location & Urgency row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bairro" className="block text-xs font-semibold text-[#8C969F] uppercase tracking-wider mb-2">
                    2. Sua região em Goiânia
                  </label>
                  <select
                    id="bairro"
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full bg-[#090B0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#F4F6F8] focus:border-[#D9A441] focus:outline-none transition-colors"
                  >
                    {SERVICE_REGIONS.map((r) => (
                      <option key={r} value={r} className="bg-[#12161B] text-[#F4F6F8]">
                        {r}
                      </option>
                    ))}
                    <option value="Outro setor em Goiânia / Aparecida" className="bg-[#12161B] text-[#F4F6F8]">
                      Outro setor em Goiânia / Aparecida
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8C969F] uppercase tracking-wider mb-2">
                    3. Prioridade de atendimento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency('urgente')}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors text-center ${
                        urgency === 'urgente'
                          ? 'bg-[#D9A441]/15 border-[#D9A441] text-[#D9A441]'
                          : 'bg-[#090B0E] border-white/10 text-[#8C969F] hover:text-[#F4F6F8]'
                      }`}
                    >
                      Urgência Agora
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('normal')}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors text-center ${
                        urgency === 'normal'
                          ? 'bg-white/10 border-white/30 text-[#F4F6F8]'
                          : 'bg-[#090B0E] border-white/10 text-[#8C969F] hover:text-[#F4F6F8]'
                      }`}
                    >
                      Orçamento Geral
                    </button>
                  </div>
                </div>
              </div>

              {/* Optional detail field */}
              <div>
                <label htmlFor="detalhes" className="block text-xs font-semibold text-[#8C969F] uppercase tracking-wider mb-2">
                  4. Detalhes (opcional: modelo do carro, marca da fechadura, etc.)
                </label>
                <input
                  id="detalhes"
                  type="text"
                  placeholder="Ex: Fiat Toro 2022 / Fechadura Papaiz / Porta de correr"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-[#090B0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#F4F6F8] placeholder-[#8C969F]/50 focus:border-[#D9A441] focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-[#090B0E] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/15 transition-all duration-200 active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Iniciar Atendimento no WhatsApp Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-[#8C969F] mt-2.5">
                  Ao clicar, o WhatsApp será aberto com sua mensagem pronta para envio imediato.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
