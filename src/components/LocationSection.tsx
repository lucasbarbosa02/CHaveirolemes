import React from 'react';
import { COMPANY_INFO, SERVICE_REGIONS, getWhatsAppUrl } from '../data/content';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#0D1014] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3">
            <span>LOCALIZAÇÃO & COBERTURA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F8] tracking-tight [text-wrap:balance]">
            Onde estamos no Setor Pedro Ludovico.
          </h2>
          <p className="text-base text-[#8C969F] mt-4 leading-relaxed [text-wrap:pretty]">
            Ponto fixo com oficina equipada na Avenida Transbrasiliana e suporte móvel para atendimento rápido em toda a região de Goiânia e Aparecida de Goiânia.
          </p>
        </div>

        {/* 2-Column Split: Info card left & Interactive Map card right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card Left */}
          <div className="lg:col-span-5 p-8 rounded-xl bg-[#12161B] border border-white/8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#1B2128] text-[#D9A441] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#8C969F] uppercase tracking-wider">Endereço</h3>
                  <p className="text-base font-bold text-[#F4F6F8] mt-1">{COMPANY_INFO.address}</p>
                  <p className="text-sm text-[#8C969F]">{COMPANY_INFO.neighborhood}</p>
                  <p className="text-xs text-[#8C969F] mt-0.5">{COMPANY_INFO.city} — {COMPANY_INFO.state}, CEP {COMPANY_INFO.cep}</p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#1B2128] text-[#D9A441] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#8C969F] uppercase tracking-wider">Horário & Plantão</h3>
                  <p className="text-base font-bold text-[#F4F6F8] mt-1">Segunda a Domingo</p>
                  <p className="text-sm text-[#D9A441] font-semibold mt-0.5">Plantão até meia-noite (23h59)</p>
                  <p className="text-xs text-[#8C969F] mt-1">Atendimento presencial e socorro a domicílio</p>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#1B2128] text-[#D9A441] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#8C969F] uppercase tracking-wider">Contato Comercial</h3>
                  <p className="text-sm font-semibold text-[#F4F6F8] mt-1">WhatsApp & Ligações</p>
                  <p className="text-xs text-[#8C969F]">Canal direto com o chaveiro</p>
                </div>
              </div>
            </div>

            {/* Actions button */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#1B2128] hover:bg-white/10 text-[#F4F6F8] text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#D9A441]" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8C969F]" />
              </a>

              <a
                href={getWhatsAppUrl('Olá! Gostaria de ir até a oficina do Chaveiro Lemes no Setor Pedro Ludovico.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#D9A441] hover:bg-[#E5B252] text-[#090B0E] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Combinar Atendimento no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Right */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-[#12161B] border border-white/8 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#D9A441] uppercase tracking-wider">LOCALIZAÇÃO ESTRATÉGICA</span>
                  <h3 className="text-xl font-bold text-[#F4F6F8] mt-0.5">Setor Pedro Ludovico & Bairros Vizinhos</h3>
                </div>
                <span className="text-xs font-mono text-[#8C969F] bg-[#1B2128] px-2.5 py-1 rounded">GOIÂNIA</span>
              </div>
              <p className="text-xs sm:text-sm text-[#8C969F] leading-relaxed mb-6">
                Nossa localização na Avenida Transbrasiliana conecta rapidamente aos principais corredores da região sul de Goiânia, agilizando deslocamentos para aberturas e reparos.
              </p>

              {/* Styled dark map simulation with real route navigation */}
              <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden border border-white/10 bg-[#090B0E] flex flex-col justify-between p-5 group">
                {/* Visual grid texture representing urban streets */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '36px 36px'
                  }}
                  aria-hidden="true"
                />

                {/* Major cross streets labels */}
                <div className="relative z-10 flex justify-between text-[11px] text-[#8C969F] font-mono">
                  <span className="bg-[#12161B]/80 px-2 py-0.5 rounded border border-white/5">Av. Transbrasiliana (Qd. 201)</span>
                  <span className="bg-[#12161B]/80 px-2 py-0.5 rounded border border-white/5">Setor Pedro Ludovico</span>
                </div>

                {/* Center marker */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#D9A441]/20 flex items-center justify-center animate-ping absolute" />
                    <div className="w-9 h-9 rounded-full bg-[#D9A441] text-[#090B0E] flex items-center justify-center shadow-lg relative z-10">
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="mt-2 bg-[#12161B]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#D9A441]/40 text-center shadow-xl">
                    <p className="text-xs font-bold text-[#F4F6F8]">Chaveiro Lemes</p>
                    <p className="text-[10px] text-[#8C969F]">Oficina & Ponto de Atendimento</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] text-[#8C969F]">Próximo ao Setor Bueno e Marista</span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#D9A441] hover:text-[#E5B252] flex items-center gap-1 transition-colors bg-[#12161B]/90 px-3 py-1 rounded border border-white/10"
                  >
                    <span>Abrir no GPS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Neighborhoods pills / unboxed clean listing */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs font-semibold text-[#8C969F] uppercase tracking-wider mb-3">
                Regiões com atendimento ágil em Goiânia:
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_REGIONS.map((region) => (
                  <span
                    key={region}
                    className="text-xs text-[#F4F6F8] bg-[#1B2128] px-3 py-1.5 rounded-md border border-white/5"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
