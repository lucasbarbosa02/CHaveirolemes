export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  category: 'cópias' | 'residencial' | 'automotivo' | 'digital';
  whatsappMessage: string;
}

export const COMPANY_INFO = {
  name: 'Chaveiro Lemes',
  tagline: 'Segurança e precisão em cada detalhe.',
  subheadline: 'Cópias de chaves, soluções residenciais e automotivas, chaves codificadas e fechaduras digitais em Goiânia.',
  address: 'Avenida Transbrasiliana, Quadra 201',
  neighborhood: 'Setor Pedro Ludovico',
  city: 'Goiânia',
  state: 'GO',
  cep: '74835-300',
  fullAddress: 'Avenida Transbrasiliana, Quadra 201, Setor Pedro Ludovico, Goiânia — GO, CEP 74835-300',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Transbrasiliana,+Quadra+201,+Setor+Pedro+Ludovico,+Goiânia+-+GO',
  schedule: 'Plantão até meia-noite',
  phoneDisplay: '(62) 98125-5426',
  phoneRaw: '5562981255426', // WhatsApp & direct call format requested by user
  instagramHandle: '@chaveiromes07',
  instagramUrl: 'https://www.instagram.com/chaveiromes07/',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'copia-chaves',
    number: '01.',
    title: 'Cópia de Chaves de Precisão',
    shortDesc: 'Duplicação computadorizada e manual de chaves comuns, tetra, multiponto e modelos de alta segurança.',
    fullDesc: 'Utilizamos máquinas fresadoras calibradas para reproduzir com exatidão os cortes e profundidades do segredo da sua chave original. Cópias perfeitas sem emperrar fechaduras ou miolos.',
    image: '/src/assets/images/service_key_duplication_1792511295486.jpg',
    category: 'cópias',
    features: [
      'Chaves Yale residenciais tradicionais',
      'Chaves Tetra de 4 lados para portões e travas',
      'Chaves Multiponto de alta segurança',
      'Cópias feitas e testadas no ato com precisão milimétrica',
    ],
    whatsappMessage: 'Olá! Gostaria de fazer cópia de chaves com o Chaveiro Lemes.',
  },
  {
    id: 'chaveiro-residencial',
    number: '02.',
    title: 'Chaveiro Residencial & Aberturas',
    shortDesc: 'Abertura técnica de portas, troca de segredo, conserto e instalação de fechaduras residenciais.',
    fullDesc: 'Atendimento para situações de emergência ou rotina em casas, apartamentos e comércios. Técnicas não destrutivas que preservam o acabamento da sua porta e ferragens.',
    image: '/src/assets/images/service_residential_security_1792511296577.jpg',
    category: 'residencial',
    features: [
      'Abertura cuidadosa de portas travadas ou batidas',
      'Troca de segredo após perda de chaves ou mudança',
      'Substituição de cilindros danificados ou desgastados',
      'Instalação de travas auxiliares e trincos de segurança',
    ],
    whatsappMessage: 'Olá! Preciso de atendimento para chaveiro residencial (abertura/troca de fechadura).',
  },
  {
    id: 'chaveiro-automotivo',
    number: '03.',
    title: 'Chaveiro Automotivo Especializado',
    shortDesc: 'Abertura de veículos nacionais e importados sem danos à lataria, borrachas ou vidros.',
    fullDesc: 'Ferramental específico para veículos de passeio, picapes e vans. Solução segura para quando a chave fica trancada no porta-malas, na ignição ou esquecida no interior.',
    image: '/src/assets/images/service_automotive_keys_1792511296174.jpg',
    category: 'automotivo',
    features: [
      'Abertura técnica sem riscos na pintura ou borrachas',
      'Atendimento para veículos leves, SUVs e utilitários',
      'Extração de chave quebrada na fechadura ou ignição',
      'Confecção mecânica da lâmina a partir do miolo original',
    ],
    whatsappMessage: 'Olá! Estou com a chave trancada no carro e preciso de atendimento automotivo em Goiânia.',
  },
  {
    id: 'chaves-codificadas',
    number: '04.',
    title: 'Chaves Automotivas Codificadas',
    shortDesc: 'Programação de transponder, chaves canivete, telecomandos e Smart Keys presenciais.',
    fullDesc: 'Equipamentos modernos para gravação e clonagem de transponders eletrônicos (chips) e pareamento com o módulo imobilizador do veículo. Reposição e cópias reserva.',
    image: '/src/assets/images/service_automotive_keys_1792511296174.jpg',
    category: 'automotivo',
    features: [
      'Cópia de chave canivete e carcaças completas',
      'Chaves de presença (Smart Key / Start-Stop)',
      'Programação de chip transponder automotivo',
      'Reprogramação do controle de telecomando e alarme',
    ],
    whatsappMessage: 'Olá! Preciso fazer uma chave automotiva codificada. Qual modelo e ano vocês atendem?',
  },
  {
    id: 'fechaduras-digitais',
    number: '05.',
    title: 'Chaves e Fechaduras Digitais',
    shortDesc: 'Instalação, substituição e configuração de fechaduras eletrônicas com biometria, senha e cartão.',
    fullDesc: 'Modernize o acesso ao seu imóvel com tecnologia e comodidade. Furação precisa em portas de madeira ou metal, fixação firme e configuração completa com os usuários.',
    image: '/src/assets/images/service_digital_smart_lock_1792511296187.jpg',
    category: 'digital',
    features: [
      'Instalação de fechaduras com leitor biométrico (impressão digital)',
      'Modelos de embutir e sobrepor com senha numérica e tag RFID',
      'Adequação de batentes e furação milimétrica na porta',
      'Treinamento e auxílio no cadastro de senhas e usuários',
    ],
    whatsappMessage: 'Olá! Gostaria de solicitar orçamento para instalação ou compra de fechadura digital.',
  },
];

export const WHY_US_ITEMS = [
  {
    number: '01',
    title: 'Localização Central em Goiânia',
    description: 'Sediado no Setor Pedro Ludovico, com fácil mobilidade para atender com agilidade setores vizinhos e toda a capital.',
  },
  {
    number: '02',
    title: 'Plantão até Meia-Noite',
    description: 'Disponibilidade de atendimento estendida até às 23h59 para você não ficar desamparado na volta para casa à noite.',
  },
  {
    number: '03',
    title: 'Variedade de Soluções',
    description: 'Do chaveiro tradicional mecânico a chaves codificadas e fechaduras biométricas inteligentes em um único local.',
  },
  {
    number: '04',
    title: 'Contato Direto pelo WhatsApp',
    description: 'Comunicação sem intermediários ou formulários lentos: fale diretamente com quem vai executar o serviço.',
  },
];

export const SERVICE_REGIONS = [
  'Setor Pedro Ludovico',
  'Setor Bueno',
  'Setor Marista',
  'Jardim Goiás',
  'Setor Bela Vista',
  'Parque Amazônia',
  'Setor Sul',
  'Setor Oeste',
  'Vila Redenção',
  'Aparecida de Goiânia (proximidades)',
];

export const FAQ_ITEMS = [
  {
    question: 'Qual é o horário de funcionamento do Chaveiro Lemes?',
    answer: 'Atendemos presencialmente e em regime de plantão até meia-noite (23h59), inclusive aos finais de semana e feriados para chamados urgentes em Goiânia.',
  },
  {
    question: 'Vocês atendem no local (a domicílio) em Goiânia?',
    answer: 'Sim! Realizamos deslocamento para aberturas residenciais e automotivas de urgência no Setor Pedro Ludovico, Setor Bueno, Marista, Jardim Goiás, Parque Amazônia e demais setores de Goiânia e Aparecida de Goiânia.',
  },
  {
    question: 'Como funciona para fazer cópia de chave automotiva codificada?',
    answer: 'Basta nos informar a marca, modelo e ano do seu carro pelo WhatsApp. Informamos a disponibilidade do transponder ou carcaça canivete e combinamos a gravação e corte da lâmina.',
  },
  {
    question: 'A abertura do carro pode danificar a fechadura ou a pintura?',
    answer: 'Não. Utilizamos ferramental técnico e técnicas profissionais não invasivas específicas para cada marca e montadora, garantindo a abertura sem arranhões na lataria, danos ao vidro ou borrachas.',
  },
  {
    question: 'Vocês instalam fechadura digital adquirida pelo cliente?',
    answer: 'Sim! Fazemos a instalação técnica em portas de madeira ou metal, incluindo o recorte da porta, alinhamento do batente e auxílio na configuração inicial de senhas e biometria.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos Pix, cartões de crédito e débito das principais bandeiras e pagamento em dinheiro no ato da conclusão do serviço.',
  },
];

export function getWhatsAppUrl(customText?: string): string {
  const message = customText || 'Olá! Gostaria de solicitar atendimento com o Chaveiro Lemes em Goiânia.';
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}
