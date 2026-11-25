# Cartilha da Inovação — referência de conteúdo

Fonte: https://citide.patos.pb.gov.br/cartilha (portal oficial da CiTI-DE, consultado em 25/11/2026).
Usar como referência de conteúdo para a página `/cartilha` do Hub. Em caso de divergência,
prevalece o texto oficial da lei.

## Estrutura da página oficial

1. **Hero** — "Cartilha da Inovação" + resumo + 4 números: 6 leis municipais, 1 sistema
   integrado, 4 programas de fomento, 2% de ISSQN no AceleraPatos.
2. **Gestão e governança** — a CiTI-DE e seus quatro corpos:
   - CMCTI — Conselho Municipal: consultivo e deliberativo, garante participação da comunidade.
   - FMCTI — Fundo Municipal: gerido por Conselho Gestor, financia fomento e pesquisa.
   - API — Arranjos Promotores de Inovação: cooperação setorial credenciada, com entidade gestora.
   - RPI — Rede de Promoção da Inovação: escritórios em instituições públicas e privadas.
3. **SMCTI — Sistema Municipal** — articula 13 integrantes: CiTI-DE, Prefeitura, Conselho
   Municipal de Inovação, Câmara de Vereadores, instituições de ensino, instituições de CT&I,
   empresas inovadoras, associações tecnológicas, agências de fomento, incubadoras,
   aceleradoras, parques tecnológicos e Arranjos Promotores (API).
4. **Pacote de leis** — seis programas com a norma de cada um:

   | Programa | Norma | Resumo |
   | --- | --- | --- |
   | InovaPatos | LC nº 030/2025 | Política municipal que sustenta as demais |
   | AceleraPatos | LC nº 031/2025 | Redução de tributos para empresas de CT&I |
   | ProInova | Lei nº 6.231/2025 | Apoio a inventor independente com patente depositada |
   | Selo Patos Inovação | Lei nº 6.230/2025 | Premiação anual às empresas mais inovadoras |
   | Patos + Empregos | Lei nº 6.229/2025 | Portal de vagas, currículos e qualificação |
   | PICTI | dentro da LC 030/2025 | Incentivos a projetos de inovação aprovados |

5. **InovaPatos (a política-mãe)** — LC 030/2025 estabelece medidas de incentivo à CT&I nos
   ambientes empresarial, acadêmico e social. Blocos internos:
   - **PICTI**: incentivos a PF/PJ de Patos em dia com o município; exige Projeto de Inovação
     aprovado pelo Comitê Gestor conforme edital; gera Carta de Autorização válida por até
     dois anos para captar recursos com incentivadores.
   - **Seis formas de benefício**: incentivo fiscal; apoio financeiro não reembolsável; apoio
     financeiro reembolsável; participação societária; apoio direto por captação de recursos;
     subvenções econômicas.
   - **CPSI** — Contratação Pública para Solução Inovadora: licitação em modalidade especial
     para testar soluções inovadoras, com ou sem risco tecnológico.
   - **Vitrine Tecnológica**: base aberta de pesquisas e tecnologias desenvolvidas em Patos.
   - **PIEM** — Plano de Inovação do Executivo: plano anual apresentado ao Conselho Municipal.
   - **Escritórios de Promoção da Inovação**: unidades da RPI que orientam quem quer inovar.
6. **AceleraPatos** — LC 031/2025. Benefícios: ISSQN a 2%; IPTU zerado no imóvel-sede; ITBI
   zerado na aquisição do imóvel-sede; taxas de licenciamento e alvará zeradas.
   Documentos: projeto de implantação/expansão com tecnologias e impacto esperado; termo de
   intenções com o Município (empregos e capacitação local); comprovante de regularidade do
   CNPJ como empresa de CT&I.
7. **ProInova** — Lei 6.231/2025, coordenada pela CiTI-DE, para inventor independente com
   depósito de patente. Quatro etapas: análise de viabilidade técnica e econômica; assistência
   para virar produto/processo com mecanismos financeiros e creditícios; assistência para
   constituir empresa que produza o bem; orientação para transferência de tecnologia.
8. **Selo Patos Inovação (6.230/2025)** — reconhece e premia anualmente empresas de Patos e
   região com práticas inovadoras e desenvolvimento sustentável, econômico, social ou tecnológico.
9. **Patos + Empregos (6.229/2025)** — portal de vagas, cadastro de currículos, informações de
   capacitação, cursos de qualificação e intermediação de mão de obra.
10. **Contato** — patos.pb.gov.br; citi-de@patos.pb.gov.br; @citide_patos e @pmpatos;
    atendimento 08h às 14h; Avenida Vidal de Negreiros, 84 — Centro, Patos/PB.

## Situação no Hub

A página `/cartilha` já cobre as dez seções acima, com a mesma ordem de assunto e os mesmos
números. Conteúdo estruturado em `src/lib/content/cartilha.ts`; apresentação em
`src/app/cartilha/page.tsx`.
