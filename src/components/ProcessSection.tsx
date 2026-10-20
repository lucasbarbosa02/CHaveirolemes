import React from 'react';
import { getWhatsAppUrl } from '../data/content';
import { MessageSquare, Camera, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Identifique sua necessidade',
      description: 'Seja uma cópia de chave, porta trancada, chave automotiva esquecida dentro do carro ou instalação de fechadura digital.',
      icon: CheckCircle2,
    },
    {
      step: '02',
      title: 'Envie mensagem e foto no WhatsApp',
      description: 'Informe sua localização e, se possível, envie uma foto da fechadura, da chave ou do veículo para acelerar o diagnóstico.',
      icon: Camera,
    },
    {
      step: '03',
      title: 'Confirmação e atendimento imediato',
      description: 'Confirmamos a disponibilidade, informamos a previsão de chegada ou execução e iniciamos o serviço com segurança.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#090B0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D9A441] tracking-wider uppercase mb-3">
            <span>FLUXO DE ATENDIMENTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F8] tracking-tight [text-wrap:balance]">
            Como solicitar seu atendimento em 3 passos simples.
          </h2>
          <p className="text-base text-[#8C969F] mt-4 leading-relaxed [text-wrap:pretty]">
            Sem burocracia ou esperas desnecessárias. Processo transparente do primeiro contato à entrega da chave ou liberação do acesso.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-8 rounded-xl bg-[#12161B] border border-white/8 hover:border-[#D9A441]/35 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-mono font-extrabold text-[#D9A441]/80">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-lg bg-[#1B2128] text-[#D9A441] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#F4F6F8] group-hover:text-[#D9A441] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8C969F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#8C969F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  <span>Passo {index + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule highlight notice box */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#12161B] border border-amber-500/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-[#D9A441]/10 text-[#D9A441] shrink-0 mt-1">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#D9A441] uppercase tracking-wider">HORÁRIO DE OPERAÇÃO</span>
                <span className="text-xs text-[#8C969F]">·</span>
                <span className="text-xs text-[#8C969F]">Todos os dias</span>
              </div>
              <h4 className="text-lg font-bold text-[#F4F6F8] mt-1">
                Plantão de Atendimento até Meia-Noite (23h59)
              </h4>
              <p className="text-xs sm:text-sm text-[#8C969F] mt-1.5 max-w-2xl leading-relaxed">
                Perdeu a chave à noite ou a fechadura travou ao chegar em casa? Nossa equipe mantém canal de plantão ativo até as 23h59 para chamados emergenciais em Goiânia.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Estou com uma emergência durante o plantão e preciso de chaveiro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-[#090B0E] text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chamar no Plantão</span>
          </a>
        </div>
      </div>
    </section>
  );
};
