// Conteúdo centralizado do portal. Alterações de textos e links devem ser feitas aqui.

export const navigationLinks = [
	{ label: "Sobre", href: "#sobre" },
	
];

export const officialLinks = {
	cartilha: "https://citide.patos.pb.gov.br/cartilha",
	inovaPatos: "https://citide.patos.pb.gov.br/cartilha#inovapatos",
	aceleraPatos: "https://citide.patos.pb.gov.br/cartilha#acelerapatos",
	proInova: "https://citide.patos.pb.gov.br/cartilha#proinova",
	picti: "https://citide.patos.pb.gov.br/cartilha#picti",
	empregos: "https://patos.pb.gov.br/",
	visitePb: "https://visitepb.com.br/",
	patosStartup: "https://citide.patos.pb.gov.br/patos-startup",
	torneioRobotica: "https://citide.patos.pb.gov.br/torneio-de-robotica",
	vitrineStartups: "https://citide.patos.pb.gov.br/vitrine",
	preAceleracaoStartups: "/programas/pre-aceleracao-startups",
	preAceleracaoDocumento: "/documentos/projeto-piloto-pre-aceleracao-startups-patos.pdf",
	seloInovacao: "https://citide.patos.pb.gov.br/cartilha#reconhecimento",
} as const;

export const serviceLinks = [
	{ label: "Cursos CiTI-DE & SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ label: "Sala do Empreendedor", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor" },
	{ label: "Mapeamento dos Artesãos", href: "https://citide.patos.pb.gov.br/mapeamento-artesoes" },
	{ label: "Edital - Feira Mãos que Criam", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
	{ label: "Para Cidadãos", href: "https://citide.patos.pb.gov.br/#servicos-cidadao" },
	{ label: "Para Empresas", href: "https://citide.patos.pb.gov.br/#servicos-empresa" },
	{ label: "Cartilha da Inovação", href: officialLinks.cartilha },
];

export const programLinks = [
	{ label: "InovaPatos", href: officialLinks.inovaPatos },
	{ label: "AceleraPatos", href: officialLinks.aceleraPatos },
	{ label: "ProInova", href: officialLinks.proInova },
	{ label: "Selo Patos Inovação", href: officialLinks.seloInovacao },
	{ label: "Patos + Empregos", href: officialLinks.empregos },
	{ label: "PICTI", href: officialLinks.picti },
];

export const heroCategories = [
	{ label: "Cursos SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ label: "AceleraPatos", href: officialLinks.aceleraPatos },
	{ label: "ProInova", href: officialLinks.proInova },
	{ label: "Empregos", href: officialLinks.empregos },
	{ label: "Selo Inovação", href: officialLinks.seloInovacao },
	{ label: "Cartilha Completa", href: officialLinks.cartilha },
];

// Atalhos de intenção exibidos logo após o hero para acelerar a primeira decisão do visitante.
export const quickAccessLinks = [
	{ id: "curso", label: "Cursos CiTI-DE & SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "empregos-programa", label: "Patos + Empregos", href: officialLinks.empregos },
	{ id: "acelerapatos", label: "AceleraPatos", href: officialLinks.aceleraPatos },
	{ id: "ideia", label: "ProInova", href: officialLinks.proInova },
	{ id: "programas", label: "Cartilha da Inovação", href: officialLinks.cartilha },
	{ id: "selo", label: "Selo Patos Inovação", href: officialLinks.seloInovacao },
];

export const opportunities = [
	{ id: "pre-aceleracao-startups", category: "Startup", date: "15/10 a 10/12/2026", title: "Projeto Piloto de Pré-Aceleração de Startups", summary: "Jornada prática para até 10 startups ou projetos inovadores de Patos, em parceria com o Ecossistema Farol Digital.", status: "projeto piloto", href: officialLinks.preAceleracaoStartups },
	{ id: "patos-startup", category: "Startup", date: "Edital 013/2026", title: "Patos Startup", summary: "Consulte o edital e as orientações oficiais para participar.", status: "consulte o edital", href: officialLinks.patosStartup },
	{ id: "robotica", category: "Educação", date: "Etapa Patos", title: "Torneio de Robótica", summary: "Acompanhe as informações e etapas do TJR em Patos.", status: "consulte informações", href: officialLinks.torneioRobotica },
	{ id: "vitrine-startups", category: "Startups", date: "Ecossistema local", title: "Vitrine de Startups", summary: "Conheça negócios inovadores e tecnologias nascidas em Patos.", status: "disponível", href: officialLinks.vitrineStartups },
	{ id: "visite-pb", category: "Turismo", date: "Plataforma oficial", title: "VisitePB", summary: "Descubra pontos turísticos, rotas, eventos, gastronomia e comércio local.", status: "disponível", href: officialLinks.visitePb },
	{ id: "cursos", category: "Cursos", date: "Consulte inscrições", title: "Cursos CiTI-DE & SENAC", summary: "Veja cursos e capacitações para fortalecer sua carreira.", status: "consulte cursos", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "cartilha", category: "Programas", date: "Fonte oficial", title: "Cartilha da Inovação", summary: "Conheça as leis municipais e os programas de CT&I de Patos.", status: "ler cartilha", href: officialLinks.cartilha },
];

export const services = [
	{ id: "pre-aceleracao-startups", title: "Pré-aceleração de Startups", text: "Diagnóstico, mentorias, desenvolvimento de negócios e conexão com oportunidades de continuidade.", status: "Conheça o projeto", href: officialLinks.preAceleracaoStartups, external: false },
	{ id: "patos-startup", title: "Patos Startup", text: "Conheça o edital e as iniciativas para negócios inovadores do ecossistema de Patos.", status: "Consulte o edital", href: officialLinks.patosStartup, external: true },
	{ id: "robotica", title: "Torneio de Robótica", text: "Acompanhe o torneio e as etapas realizadas em Patos.", status: "Consulte informações", href: officialLinks.torneioRobotica, external: true },
	{ id: "startups", title: "Vitrine de Startups", text: "Conheça negócios inovadores e tecnologias nascidas em Patos.", status: "Acessar vitrine", href: officialLinks.vitrineStartups, external: true },
	{ id: "visite-pb", title: "VisitePB", text: "Explore turismo, cultura, gastronomia e comércio local em uma plataforma georreferenciada.", status: "Acessar plataforma", href: officialLinks.visitePb, external: true },
	{ id: "cursos", title: "Cursos CiTI-DE & SENAC", text: "Qualificação profissional para fortalecer carreiras, negócios e o ecossistema de tecnologia.", status: "Ver cursos", href: "https://cursos.citide.patos.pb.gov.br/", external: true },
	{ id: "sala-empreendedor", title: "Sala do Empreendedor", text: "Orientação e apoio para abrir, organizar e desenvolver seu negócio.", status: "Atendimento contínuo", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor", external: true },
	{ id: "artesaos", title: "Mapeamento dos Artesãos", text: "Acesse informações e oportunidades para fortalecer o artesanato local.", status: "Acessar serviço", href: "https://citide.patos.pb.gov.br/mapeamento-artesoes", external: true },
	{ id: "cartilha", title: "Cartilha da Inovação", text: "Conheça as leis e os programas municipais de ciência, tecnologia e inovação.", status: "Ler cartilha", href: officialLinks.cartilha, external: true },
];

export const programs = [
	{ id: "pre-aceleracao-startups", title: "Pré-aceleração de Startups", text: "Jornada de oito semanas para aumentar a maturidade de startups e projetos inovadores de Patos.", status: "Projeto piloto", href: officialLinks.preAceleracaoStartups },
	{ id: "inovapatos", title: "InovaPatos", text: "Política municipal que estabelece medidas de incentivo e apoio à ciência, tecnologia e inovação.", status: "Conheça na cartilha", href: "/programas/inovapatos" },
	{ id: "acelerapatos", title: "AceleraPatos", text: "Incentivos municipais para empresas de ciência, tecnologia e inovação que se instalam em Patos.", status: "Conheça na cartilha", href: "/programas/acelerapatos" },
	{ id: "proinova", title: "ProInova", text: "Apoio ao inventor independente que já comprove o depósito de um pedido de patente.", status: "Conheça na cartilha", href: "/programas/proinova" },
	{ id: "selo-inovacao", title: "Selo Patos Inovação", text: "Reconhecimento anual às empresas que se destacam em inovação e desenvolvimento sustentável.", status: "Conheça na cartilha", href: "/programas/selo-inovacao" },
	{ id: "empregos-programa", title: "Patos + Empregos", text: "Portal de vagas, currículos, qualificação profissional e intermediação de mão de obra.", status: "Ver informações", href: "/programas/empregos-programa" },
	{ id: "picti", title: "PICTI", text: "Incentivos para projetos de inovação aprovados, conforme regras e edital.", status: "Conheça na cartilha", href: "/programas/picti" },
];

export const faqItems = [
	{ question: "Quem pode participar dos cursos?", answer: "Consulte os critérios da capacitação escolhida. As oportunidades podem atender cidadãos, empreendedores ou públicos específicos conforme a chamada." },
	{ question: "Como faço para solicitar apoio?", answer: "Envie uma dúvida pelo canal de atendimento ou procure a Sala do Empreendedor para receber orientação sobre o próximo passo." },
	{ question: "Como uma empresa acessa os incentivos?", answer: "Conheça o AceleraPatos, confira os critérios e procure a Sala do Empreendedor para iniciar a orientação." },
	{ question: "Onde encontro os editais?", answer: "A seção Últimas oportunidades reúne chamadas e editais disponíveis. Também é possível acompanhar os canais oficiais da CiTI-DE." },
	{ question: "Como funciona o ProInova?", answer: "O ProInova apoia inventores e projetos com potencial de inovação. A página do programa reúne orientações, documentos e formas de participação." },
	{ question: "Como faço contato com a secretaria?", answer: "Envie uma dúvida por e-mail para citi-de@patos.pb.gov.br ou consulte o endereço e o horário na área de atendimento." },
	{ question: "Quais documentos são necessários?", answer: "A documentação varia conforme o serviço, edital ou programa. Confira os requisitos na página da oportunidade antes de enviar sua solicitação." },
];

export const programDetails = {
	inovapatos: {
		title: "InovaPatos",
		summary: "Política municipal que estabelece medidas de incentivo e apoio à ciência, tecnologia e inovação em Patos.",
		audience: "Empresas, cidadãos, instituições de ensino e iniciativas dos ambientes empresarial, acadêmico e social.",
		offers: ["Incentivo fiscal", "Apoio financeiro não reembolsável", "Apoio financeiro reembolsável", "Participação societária", "Apoio direto por captação", "Subvenções econômicas"],
		participation: "O acesso depende da aprovação de um Projeto de Inovação pelo Comitê Gestor, conforme o edital aplicável.",
		documents: "Projeto de Inovação e demais documentos definidos no edital ou regulamento vigente.",
		period: "Conforme editais e chamadas públicas.",
		sourceHref: officialLinks.cartilha,
		faq: [{ question: "Qual lei institui o InovaPatos?", answer: "Lei Complementar nº 030/2025, conforme a Cartilha da Inovação." }],
	},
	acelerapatos: {
		title: "AceleraPatos",
		summary: "Incentivos municipais para empresas de ciência, tecnologia e inovação que se instalem em Patos.",
		audience: "Empresas do setor de ciência, tecnologia e inovação interessadas em se instalar ou expandir suas atividades em Patos.",
		offers: ["ISSQN reduzido para 2%", "IPTU zerado para o imóvel-sede", "ITBI zerado na aquisição do imóvel-sede", "Taxas de licenciamento e alvará zeradas"],
		participation: "Apresente o projeto de implantação ou expansão, o Termo de Intenções com o Município e o comprovante de regularidade no CNPJ, conforme as regras vigentes.",
		documents: "Projeto de implantação ou expansão, Termo de Intenções e comprovante de regularidade no CNPJ, conforme a Cartilha da Inovação.",
		period: "Conforme as regras e os procedimentos do programa.",
		sourceHref: officialLinks.cartilha,
		faq: [{ question: "Qual lei institui o AceleraPatos?", answer: "Lei Complementar nº 031/2025, conforme a Cartilha da Inovação." }],
	},
	proinova: {
		title: "ProInova",
		summary: "Apoio ao inventor independente que já comprove o depósito de um pedido de patente.",
		audience: "Inventores independentes com pedido de patente depositado e projetos que possam ser avaliados e desenvolvidos.",
		offers: ["Análise de viabilidade técnica e econômica", "Assistência para transformar a invenção em produto ou processo", "Assistência para constituir uma empresa", "Orientação para transferência de tecnologia"],
		participation: "Apresente a invenção e a comprovação do depósito do pedido de patente, seguindo as orientações do programa.",
		documents: "Comprovante do pedido de patente e os documentos solicitados na análise do projeto.",
		period: "Conforme orientações e procedimentos do programa.",
		sourceHref: officialLinks.cartilha,
		faq: [{ question: "Qual lei institui o ProInova?", answer: "Lei Municipal nº 6.231/2025, conforme a Cartilha da Inovação." }],
	},
	"selo-inovacao": {
		title: "Selo Patos Inovação",
		summary: "Reconhecimento anual às empresas que se destacam por ideias inovadoras e práticas de desenvolvimento sustentável.",
		audience: "Empresas de Patos e região com iniciativas, produtos ou processos inovadores.",
		offers: ["Reconhecimento institucional", "Premiação anual", "Visibilidade para práticas inovadoras e sustentáveis"],
		participation: "Acompanhe as orientações e os critérios de reconhecimento divulgados pela CiTI-DE.",
		documents: "Informações da empresa e evidências das práticas ou resultados apresentados, conforme a chamada.",
		period: "Conforme o calendário e a chamada de reconhecimento.",
		sourceHref: officialLinks.cartilha,
		faq: [{ question: "Qual lei institui o Selo Patos Inovação?", answer: "Lei Municipal nº 6.230/2025, conforme a Cartilha da Inovação." }],
	},
	"empregos-programa": {
		title: "Patos + Empregos",
		summary: "Portal de vagas, currículos, qualificação profissional e intermediação de mão de obra.",
		audience: "Pessoas que buscam emprego, qualificação ou novas oportunidades profissionais.",
		offers: ["Divulgação de vagas", "Cadastro de currículos", "Informações sobre capacitações", "Intermediação de mão de obra"],
		participation: "Acesse o portal da Prefeitura e acompanhe as orientações da oportunidade desejada.",
		documents: "Os documentos dependem da vaga, curso ou oportunidade escolhida.",
		period: "Conforme a disponibilidade de vagas e capacitações.",
		sourceHref: officialLinks.cartilha,
		faq: [{ question: "Qual lei institui o Patos + Empregos?", answer: "Lei Municipal nº 6.229/2025, conforme a Cartilha da Inovação." }],
	},
	picti: {
		title: "PICTI",
		summary: "Programa de incentivos para projetos de inovação aprovados.",
		audience: "Pessoas físicas ou jurídicas de Patos em dia com suas obrigações municipais, conforme o edital.",
		offers: ["Incentivo fiscal", "Apoio financeiro não reembolsável", "Apoio financeiro reembolsável", "Participação societária", "Captação de recursos", "Subvenções econômicas"],
		participation: "Apresente um Projeto de Inovação para avaliação do Comitê Gestor e acompanhe o edital aplicável.",
		documents: "Projeto de Inovação, plano de trabalho e demais documentos definidos no edital.",
		period: "Conforme o edital ou chamada pública.",
		sourceHref: officialLinks.cartilha,
		faq: [{ question: "Como o PICTI se relaciona ao InovaPatos?", answer: "O PICTI está previsto dentro da política do InovaPatos, conforme a Cartilha da Inovação." }],
	},
	"pre-aceleracao-startups": {
		title: "Projeto Piloto de Pré-Aceleração de Startups de Patos",
		summary: "Jornada prática e objetiva para apoiar até 10 startups ou projetos inovadores com diagnóstico, mentorias, desenvolvimento de negócios e conexão com oportunidades.",
		audience: "Startups em estágio inicial, empreendedores com projetos inovadores, projetos acadêmicos com potencial de negócio e equipes com soluções, produtos ou serviços inovadores.",
		offers: ["Diagnóstico inicial", "Mentorias direcionadas", "Desenvolvimento do modelo de negócio", "Aprimoramento da solução ou MVP", "Preparação de pitch", "Conexão com parceiros e oportunidades"],
		participation: "O projeto prevê seleção de até 10 participantes. Consulte o documento do projeto para acompanhar as orientações de divulgação, inscrição e mobilização.",
		documents: "Consulte as orientações da seleção e os requisitos divulgados pela CiTI-DE e pelo Ecossistema Farol Digital.",
		period: "Duração aproximada de 8 semanas, com início previsto em 15 de outubro de 2026 e encerramento previsto para 10 de dezembro de 2026. O cronograma pode sofrer ajustes.",
		sourceHref: officialLinks.preAceleracaoDocumento,
		partner: "Prefeitura Municipal de Patos — CITI-DE, em parceria com o Ecossistema Farol Digital.",
		goals: ["Selecionar até 10 startups", "Diagnosticar 100% dos participantes", "Garantir mentorias para todas as startups", "Realizar encontros de desenvolvimento dos negócios", "Realizar 1 Pitch Day ou Demo Day", "Conectar startups a parceiros e oportunidades de continuidade"],
		timeline: [
			{ period: "15 a 22 de outubro de 2026", activity: "Divulgação, inscrições e mobilização das startups" },
			{ period: "23 a 29 de outubro de 2026", activity: "Seleção das 10 startups e diagnóstico inicial" },
			{ period: "30 de outubro a 5 de novembro de 2026", activity: "Mentorias iniciais e definição das prioridades de cada startup" },
			{ period: "6 a 12 de novembro de 2026", activity: "Encontro 1 — Problema, solução, cliente e proposta de valor" },
			{ period: "13 a 19 de novembro de 2026", activity: "Encontro 2 — Modelo de negócio, produto e MVP" },
			{ period: "20 a 26 de novembro de 2026", activity: "Encontro 3 — Mercado, posicionamento e estratégia comercial" },
			{ period: "27 de novembro a 3 de dezembro de 2026", activity: "Ajustes dos negócios e preparação dos pitches" },
			{ period: "4 a 9 de dezembro de 2026", activity: "Preparação final e conexões" },
			{ period: "10 de dezembro de 2026", activity: "Pitch Day / Demo Day e encerramento" },
		],
		faq: [
			{ question: "Quantas startups serão selecionadas?", answer: "Serão selecionadas até 10 startups ou projetos inovadores." },
			{ question: "Quais são as etapas da jornada?", answer: "Seleção e diagnóstico, mentorias, desenvolvimento do negócio e Pitch Final com conexões." },
			{ question: "O cronograma é definitivo?", answer: "Não. O documento informa que o cronograma poderá sofrer ajustes conforme a disponibilidade de parceiros, mentores e participantes." },
		],
	},
};

// Organiza a entrada do portal pela intenção do visitante, sem exigir conhecimento da secretaria.
export const audiencePaths = {
	cidadao: {
		label: "Sou cidadão",
		intro: "Encontre cursos, empregos, programas e capacitações para transformar sua ideia em caminho profissional.",
		items: [
			{ label: "Cursos e capacitações", href: "https://cursos.citide.patos.pb.gov.br/" },
			{ label: "Patos + Empregos", href: officialLinks.empregos },
			{ label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
			{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
			{ label: "Cartilha da Inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
		],
	},
	empresa: {
		label: "Represento uma empresa",
		intro: "Conheça incentivos, apoio e programas para desenvolver inovação e negócios em Patos.",
		items: [
			{ label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos" },
			{ label: "Selo Patos Inovação", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
			{ label: "Solicitar apoio", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor" },
			{ label: "Programas de inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
		],
	},
	instituicao: {
		label: "Sou uma instituição",
		intro: "Acesse editais, leis, documentos e redes para construir parcerias pelo desenvolvimento local.",
		items: [
			{ label: "Editais e oportunidades", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
			{ label: "Leis e documentos", href: "https://citide.patos.pb.gov.br/cartilha" },
			{ label: "Redes e conselhos", href: "#sobre" },
			{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
			{ label: "Parcerias e inovação", href: "https://citide.patos.pb.gov.br/cartilha#picti" },
		],
	},
};

// Estruturas institucionais que explicam como a CiTI-DE organiza a política pública de inovação.
export const institutionalBodies = [
	{ title: "Conselho Municipal de CT&I", text: "Participação social, acompanhamento e fiscalização das políticas de ciência, tecnologia e inovação." },
	{ title: "Fundo Municipal de CT&I", text: "Fomento a projetos, empresas e iniciativas estratégicas para o desenvolvimento local." },
	{ title: "Rede de Promoção da Inovação", text: "Conexão entre instituições públicas, privadas, ensino, pesquisa e empreendedores." },
	{ title: "Arranjos Promotores de Inovação", text: "Cooperação entre instituições de ciência, empresas e organizações para gerar soluções." },
];

// Indicadores públicos que resumem a estrutura e o alcance institucional da CiTI-DE.
export const institutionalStats = [
	{ value: "6", label: "leis municipais", sourceLabel: "Cartilha da Inovação", sourceHref: officialLinks.cartilha, updatedAt: "2026-10-06" },
	{ value: "1", label: "sistema integrado", sourceLabel: "Cartilha da Inovação", sourceHref: officialLinks.cartilha, updatedAt: "2026-10-06" },
	{ value: "4", label: "programas de fomento", sourceLabel: "Cartilha da Inovação", sourceHref: officialLinks.cartilha, updatedAt: "2026-10-06" },
	{ value: "2%", label: "ISSQN no AceleraPatos", sourceLabel: "Cartilha da Inovação", sourceHref: officialLinks.cartilha, updatedAt: "2026-10-06" },
];


export const contactInfo = {
	email: "citi-de@patos.pb.gov.br",
	instagramCiti: "https://www.instagram.com/citide_patos/",
	instagramPrefeitura: "https://www.instagram.com/pmpatos/",
	portalPrefeitura: "https://patos.pb.gov.br/",
	hours: "08:00 às 14:00",
	address: "Avenida Vidal de Negreiros, 84 - Centro, Patos - PB",
	map: "https://maps.app.goo.gl/ibpgjG25uxvzyBYL7",
} as const;

export const hubAudiences = [
	{ number: "01", title: "Quem está começando", text: "Tem uma ideia, projeto ou negócio em fase inicial e quer encontrar orientação para transformar intenção em próximo passo." },
	{ number: "02", title: "Quem já empreende", text: "Já atua no mercado e busca capacitação, conexões e caminhos para crescer com mais estrutura." },
	{ number: "03", title: "Quem quer inovar", text: "Empresa, instituição ou pesquisador que deseja desenvolver soluções com impacto real em Patos." },
	{ number: "04", title: "Quem busca oportunidade", text: "Cidadão que procura cursos, emprego, editais e serviços públicos para avançar profissionalmente." },
];

export const hubBenefits = [
	"Acesso a cursos e capacitações",
	"Orientação para negócios e projetos",
	"Conexão com programas públicos",
	"Informações sobre editais e oportunidades",
	"Reconhecimento de iniciativas inovadoras",
	"Aproximação com o ecossistema local",
];

export const hubStages = [
	{ title: "Entenda seu momento", text: "Comece pela trilha que mais combina com o que você precisa hoje." },
	{ title: "Encontre o caminho", text: "Conheça os serviços, programas e oportunidades disponíveis." },
	{ title: "Coloque em movimento", text: "Acesse o canal certo, confira os critérios e dê o próximo passo." },
];

export const hubFaqs = [
	["O que é o CiTI-DE Hub?", "É a porta de entrada para serviços, programas e oportunidades de ciência, tecnologia, inovação, empreendedorismo e desenvolvimento em Patos."],
	["Preciso já ter uma empresa ou projeto?", "Não. O Hub atende pessoas em diferentes momentos: desde quem está buscando qualificação até quem já tem uma empresa, pesquisa ou iniciativa em andamento."],
	["Como encontro uma oportunidade?", "Use as trilhas desta página para escolher seu perfil ou consulte diretamente os programas, serviços e inscrições disponíveis."],
	["Os serviços são gratuitos?", "As condições variam conforme cada programa ou serviço. Consulte a página da oportunidade para verificar critérios, documentos e prazos."],
] as const;

export const hubOpportunityLinks = [
	{ label: "Pré-aceleração de Startups", href: officialLinks.preAceleracaoStartups },
	{ label: "Patos Startup", href: officialLinks.patosStartup },
	{ label: "Cursos CiTI-DE & SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ label: "Conhecer os programas", href: officialLinks.cartilha },
] as const;
