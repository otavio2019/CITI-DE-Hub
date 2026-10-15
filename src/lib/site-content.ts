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
	empregos: "/programas/empregos-programa",
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
	{ id: "cursos-abertos", category: "Cursos", date: "Acompanhe as inscrições", title: "Cursos CiTI-DE & SENAC", summary: "Capacitações para fortalecer carreiras, negócios e novas oportunidades em Patos.", status: "aberto", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "novo-edital", category: "Edital", date: "Consulte o prazo no edital", title: "Feira Mãos que Criam", summary: "Confira os critérios e orientações para participar desta oportunidade.", status: "aberto", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
	{ id: "acelerapatos-oportunidade", category: "Programa", date: "Agenda do programa", title: "AceleraPatos", summary: "Conheça os incentivos para empresas de ciência, tecnologia e inovação.", status: "em breve", href: "/programas/acelerapatos" },
	{ id: "proinova-oportunidade", category: "Inovação", date: "Acompanhe as chamadas", title: "ProInova", summary: "Apoio para inventores e projetos com potencial de inovação.", status: "em breve", href: "/programas/proinova" },
	{ id: "patos-empregos-oportunidade", category: "Empregos", date: "Oportunidades disponíveis", title: "Patos + Empregos", summary: "Encontre caminhos de qualificação e conexão com o mercado de trabalho.", status: "aberto", href: officialLinks.empregos },
	{ id: "noticia-secretaria", category: "Notícia", date: "Informação institucional", title: "CiTI-DE fortalece o ecossistema local", summary: "Conheça as políticas públicas e redes que apoiam ciência, tecnologia e inovação em Patos.", status: "atualizado", href: "#sobre" },
];

export const services = [
	{ id: "cursos", title: "Cursos e capacitações", text: "Qualificação profissional para fortalecer carreiras e negócios em Patos.", status: "Inscrições abertas", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "empregos", title: "Patos + Empregos", text: "Oportunidades, vagas e caminhos para quem busca entrar ou crescer no mercado.", status: "Atendimento contínuo", href: officialLinks.empregos },
	{ id: "sala-empreendedor", title: "Sala do Empreendedor", text: "Orientação e apoio para abrir, organizar e desenvolver seu negócio.", status: "Atendimento contínuo", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor" },
	{ id: "artesaos", title: "Mapeamento dos artesãos", text: "Acesso a informações e oportunidades para fortalecer o artesanato local.", status: "Atendimento contínuo", href: "https://citide.patos.pb.gov.br/mapeamento-artesoes" },
	{ id: "inscricoes", title: "Inscrições e editais", text: "Consulte chamadas, inscrições e oportunidades abertas pela secretaria.", status: "Inscrições abertas", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
	{ id: "atendimento", title: "Atendimento CiTI-DE", text: "Entre em contato para encontrar orientação e o caminho certo para sua demanda.", status: "Atendimento contínuo", href: "#contato" },
];

export const programs = [
	{ id: "inovapatos", title: "InovaPatos", text: "Conexões e iniciativas para aproximar conhecimento, tecnologia e desenvolvimento local.", status: "Atendimento contínuo" },
	{ id: "acelerapatos", title: "AceleraPatos", text: "Benefícios e incentivos para empresas de ciência, tecnologia e inovação.", status: "Em breve" },
	{ id: "proinova", title: "ProInova", text: "Apoio para inventores e projetos com potencial de inovação.", status: "Em breve" },
	{ id: "selo-inovacao", title: "Selo Patos Inovação", text: "Reconhecimento para empresas que se destacam por práticas inovadoras.", status: "Em breve" },
	{ id: "empregos-programa", title: "Patos + Empregos", text: "Oportunidades, qualificação e conexão com o mercado de trabalho.", status: "Inscrições abertas" },
	{ id: "picti", title: "PICTI", text: "Incentivo a projetos de pesquisa, tecnologia e inovação aprovados.", status: "Em breve" },
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
		summary: "Conexões e iniciativas para aproximar conhecimento, tecnologia e desenvolvimento local.",
		audience: "Empreendedores, instituições, pesquisadores e pessoas com iniciativas de inovação.",
		offers: ["Conexões com o ecossistema local", "Apoio a iniciativas inovadoras", "Integração entre conhecimento e desenvolvimento"],
		participation: "Consulte a cartilha da inovação e acompanhe as oportunidades publicadas pela CiTI-DE.",
		documents: "Os documentos variam conforme a chamada ou iniciativa. Confira os requisitos da oportunidade vigente.",
		period: "Conforme chamadas, agendas e oportunidades divulgadas.",
		faq: [{ question: "Quem pode participar?", answer: "Pessoas, empresas e instituições envolvidas com ciência, tecnologia e inovação." }],
	},
	acelerapatos: {
		title: "AceleraPatos",
		summary: "Programa de incentivos e benefícios para empresas de ciência, tecnologia e inovação.",
		audience: "Empresas que desenvolvem atividades ou projetos relacionados à inovação em Patos.",
		offers: ["Benefícios e incentivos fiscais", "Orientação para empresas inovadoras", "Conexão com políticas públicas de desenvolvimento"],
		participation: "Verifique os critérios na cartilha e procure a Sala do Empreendedor para iniciar a solicitação.",
		documents: "Documentação empresarial e comprovações previstas na legislação e no regulamento do programa.",
		period: "Solicitações conforme regras e prazos do programa.",
		faq: [{ question: "Onde solicitar apoio?", answer: "A Sala do Empreendedor é o canal inicial para orientação e encaminhamento." }],
	},
	proinova: {
		title: "ProInova",
		summary: "Apoio para inventores e projetos com potencial de inovação.",
		audience: "Inventores independentes, pesquisadores, empreendedores e equipes de projeto.",
		offers: ["Orientação para transformar ideias em soluções", "Apoio a projetos inovadores", "Conexão com parceiros e oportunidades"],
		participation: "Apresente sua ideia ou projeto pelos canais de atendimento da CiTI-DE e acompanhe as chamadas disponíveis.",
		documents: "Descrição do projeto, identificação dos responsáveis e documentos solicitados na chamada.",
		period: "Conforme edital ou oportunidade publicada.",
		faq: [{ question: "Preciso ter uma empresa?", answer: "Não necessariamente. O programa também contempla inventores e projetos em desenvolvimento." }],
	},
	"selo-inovacao": {
		title: "Selo Patos Inovação",
		summary: "Reconhecimento para empresas que se destacam por práticas inovadoras.",
		audience: "Empresas e organizações com iniciativas, produtos ou processos inovadores.",
		offers: ["Reconhecimento institucional", "Visibilidade para práticas inovadoras", "Integração com o ecossistema de inovação"],
		participation: "Confira os critérios de reconhecimento e acompanhe as orientações de inscrição.",
		documents: "Informações da empresa e evidências das práticas ou resultados de inovação apresentados.",
		period: "Conforme período de inscrições e agenda de reconhecimento.",
		faq: [{ question: "O selo tem custo?", answer: "Consulte o regulamento vigente para conhecer as condições de participação." }],
	},
	"empregos-programa": {
		title: "Patos + Empregos",
		summary: "Oportunidades, qualificação e conexão com o mercado de trabalho.",
		audience: "Pessoas que buscam emprego, qualificação ou novas oportunidades profissionais.",
		offers: ["Acesso a oportunidades de trabalho", "Informações de qualificação", "Conexão com empresas e mercado"],
		participation: "Consulte as oportunidades disponíveis e acompanhe as orientações de cada vaga ou ação.",
		documents: "Os documentos dependem da vaga, curso ou oportunidade escolhida.",
		period: "Conforme disponibilidade de vagas e inscrições.",
		faq: [{ question: "Onde encontro as vagas?", answer: "Acompanhe a cartilha e os canais oficiais da CiTI-DE." }],
	},
	picti: {
		title: "PICTI",
		summary: "Incentivo a projetos de pesquisa, tecnologia e inovação aprovados.",
		audience: "Pesquisadores, instituições de ensino, empresas e equipes com projetos de CT&I.",
		offers: ["Incentivo a pesquisa e desenvolvimento", "Apoio a projetos tecnológicos", "Articulação entre instituições e parceiros"],
		participation: "Acompanhe os editais e chamadas para verificar elegibilidade e apresentar seu projeto.",
		documents: "Projeto, plano de trabalho, documentos institucionais e demais itens definidos no edital.",
		period: "Conforme edital ou chamada pública.",
		faq: [{ question: "Como saber quando há uma chamada?", answer: "Consulte regularmente os canais oficiais e a cartilha da inovação." }],
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
