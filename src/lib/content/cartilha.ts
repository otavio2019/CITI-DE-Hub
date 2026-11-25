// Conteúdo da Cartilha da Inovação.
// Fonte: portal oficial CiTI-DE (citide.patos.pb.gov.br/cartilha).
// Textos institucionais: alterar aqui, não no componente da página.

export const cartilhaStats = [
	{ value: "6", label: "leis municipais" },
	{ value: "1", label: "sistema integrado" },
	{ value: "4", label: "programas de fomento" },
	{ value: "2%", label: "ISSQN no AceleraPatos" },
];

export const secretaria = {
	title: "A Secretaria que coordena o ecossistema",
	intro:
		"Para garantir o acesso à ciência a toda a população e responder aos anseios da sociedade, a Prefeitura de Patos criou a Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico (CiTI-DE), responsável por formular e executar as políticas públicas e programas deste guia — aproximando a ciência, a tecnologia e a inovação do dia a dia da cidade.",
	bodies: [
		{
			title: "Conselho Municipal (CMCTI)",
			text: "Órgão consultivo e deliberativo que garante participação direta da comunidade, formulando, propondo, avaliando e fiscalizando as políticas de inovação do Município.",
		},
		{
			title: "Fundo Municipal (FMCTI)",
			text: "Gerido pelo Conselho Gestor, financia o fomento à inovação tecnológica, o incentivo às empresas instaladas em Patos e os investimentos em projetos de pesquisa.",
		},
		{
			title: "Arranjos Promotores (API)",
			text: "Ações programadas e cooperadas entre instituições de ciência, empresas e organizações de um setor, credenciadas pela CiTI-DE e conduzidas por uma entidade gestora facilitadora.",
		},
		{
			title: "Rede de Promoção (RPI)",
			text: "A rede municipal que conecta Escritórios de Promoção da Inovação em instituições públicas e privadas, coordenada pela CiTI-DE, para ampliar o alcance das políticas de CT&I.",
		},
	],
};

export const smcti = {
	title: "Todos os elos da inovação, em uma rede só",
	intro:
		"O Sistema Municipal de Ciência, Tecnologia e Inovação (SMCTI) articula organismos públicos e privados — da Câmara de Vereadores às incubadoras — para ampliar as sinergias entre ciência, tecnologia e inovação e sustentar o desenvolvimento do Município a longo prazo.",
	members: [
		"CiTI-DE",
		"Prefeitura de Patos",
		"Conselho Municipal de Inovação",
		"Câmara de Vereadores",
		"Instituições de ensino",
		"Instituições de CT&I",
		"Empresas inovadoras",
		"Associações tecnológicas",
		"Agências de fomento",
		"Incubadoras",
		"Aceleradoras",
		"Parques tecnológicos",
		"Arranjos Promotores (API)",
	],
};

export type CartilhaLaw = {
	law: string;
	title: string;
	summary: string;
	anchor: string;
};

export const laws: CartilhaLaw[] = [
	{
		law: "LC nº 030/2025",
		title: "InovaPatos",
		summary: "A política municipal que dá o chão legal para tudo o mais.",
		anchor: "inovapatos",
	},
	{
		law: "LC nº 031/2025",
		title: "AceleraPatos",
		summary: "Redução de tributos para empresas de CT&I que se instalam na cidade.",
		anchor: "acelerapatos",
	},
	{
		law: "Lei nº 6.231/2025",
		title: "ProInova",
		summary: "Apoio a inventores independentes com pedido de patente.",
		anchor: "proinova",
	},
	{
		law: "Lei nº 6.230/2025",
		title: "Selo Patos Inovação",
		summary: "Reconhecimento anual às empresas mais inovadoras da região.",
		anchor: "selo-inovacao",
	},
	{
		law: "Lei nº 6.229/2025",
		title: "Patos + Empregos",
		summary: "Portal de vagas, currículos e qualificação profissional.",
		anchor: "patos-empregos",
	},
	{
		law: "Dentro da LC 030/2025",
		title: "PICTI",
		summary: "Incentivos financeiros e fiscais para projetos de inovação aprovados.",
		anchor: "picti",
	},
];

export const inovapatos = {
	law: "Lei Complementar nº 030/2025",
	intro:
		"Estabelece as medidas de incentivo e apoio à ciência, tecnologia e inovação nos ambientes empresarial, acadêmico e social, para empresas e cidadãos estabelecidos ou domiciliados no Município de Patos.",
	picti: {
		title: "PICTI — Programa de Incentivo",
		text: "Concede incentivos a pessoas físicas ou jurídicas de Patos em dia com suas obrigações municipais, para promover o empreendedorismo inovador. O acesso depende da aprovação de um Projeto de Inovação pelo Comitê Gestor, conforme edital — e gera uma Carta de Autorização válida por até dois anos para captar recursos junto a incentivadores.",
	},
	benefitsTitle: "Seis formas de benefício",
	benefits: [
		"Incentivo fiscal",
		"Apoio financeiro não reembolsável",
		"Apoio financeiro reembolsável",
		"Participação societária",
		"Apoio direto por captação de recursos",
		"Subvenções econômicas",
	],
	highlights: [
		{
			title: "Contratação Pública para Solução Inovadora (CPSI)",
			text: "Órgãos e entidades da Prefeitura podem contratar pessoas físicas ou jurídicas, isoladas ou em consórcio, para testar soluções inovadoras — com ou sem risco tecnológico — por meio de licitação em modalidade especial.",
		},
		{
			title: "Vitrine Tecnológica",
			text: "Uma base de dados aberta que reúne pesquisas e tecnologias desenvolvidas em Patos, dando visibilidade à produção local mesmo sem vínculo formal com uma ICT.",
		},
		{
			title: "Plano de Inovação do Executivo (PIEM)",
			text: "A CiTI-DE elabora um Plano Anual de Inovação, apresentado ao Conselho Municipal, propondo soluções novas para os problemas do Município.",
		},
		{
			title: "Escritórios de Promoção da Inovação",
			text: "Unidades instaladas em instituições públicas ou privadas que integram a Rede de Promoção da Inovação (RPI) — oferecendo orientação direta a quem quer inovar, com articulação coordenada pela CiTI-DE.",
		},
	],
};

export const acelerapatos = {
	law: "Lei Complementar nº 031/2025",
	intro:
		"Reduz a tributação municipal para empresas do setor de ciência, tecnologia e inovação que se instalarem em Patos, tornando a cidade mais competitiva para receber novos negócios de base tecnológica.",
	benefitsTitle: "O que sua empresa ganha",
	benefits: [
		"ISSQN reduzido para 2%",
		"IPTU zerado para o imóvel-sede da atividade empresarial",
		"ITBI zerado na aquisição do imóvel-sede",
		"Taxas de licenciamento e alvará de funcionamento zeradas",
	],
	documentsTitle: "Documentos para inscrição",
	documents: [
		"Projeto de implantação ou expansão em Patos, com as tecnologias a serem desenvolvidas e o impacto esperado em empregos e economia local.",
		"Termo de Intenções com o Município, com compromissos de geração de empregos e capacitação de mão de obra local e regional.",
		"Comprovante de regularidade no CNPJ como integrante do setor de ciência, tecnologia e inovação.",
	],
};

export const proinova = {
	law: "Lei Municipal nº 6.231/2025",
	intro:
		"Coordenado pela CiTI-DE, apoia o inventor independente que já comprove o depósito de um pedido de patente — e permite solicitar que sua criação seja adotada por órgãos da Prefeitura ou por uma ICT pública para avaliação e desenvolvimento futuro.",
	items: [
		"Análise da viabilidade técnica e econômica da invenção",
		"Assistência para transformar a invenção em produto ou processo, com mecanismos financeiros e creditícios",
		"Assistência para constituir uma empresa que produza o bem objeto da invenção",
		"Orientação para transferência de tecnologia a empresas já constituídas",
	],
};

export const selo = {
	law: "Lei Municipal nº 6.230/2025",
	title: "Selo Patos Inovação em Movimento",
	text: "Reconhece e premia, todos os anos, empresas de Patos e região que se destacam pela utilização de ideias inovadoras e práticas que promovem o desenvolvimento sustentável, econômico, social ou tecnológico local.",
};

export const empregos = {
	law: "Lei Municipal nº 6.229/2025",
	title: "Patos + Empregos",
	text: "Fomenta emprego e renda com um portal digital para divulgação de vagas, cadastro de currículos e informações sobre capacitações — além de promover cursos de qualificação profissional e intermediar mão de obra.",
};
