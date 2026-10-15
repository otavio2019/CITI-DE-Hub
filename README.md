# CiTI-DE

Portal institucional da **Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico de Patos (PB)**.

O projeto reúne, em uma única interface, serviços públicos, programas de inovação, oportunidades de qualificação, iniciativas de empregabilidade e informações para cidadãos, empresas e instituições.

## Sobre o projeto

O CiTI-DE funciona como uma porta de entrada digital para as iniciativas de ciência, tecnologia, inovação e desenvolvimento econômico do município de Patos.

A página inicial foi organizada para facilitar o acesso aos principais serviços e programas da secretaria. O visitante pode encontrar cursos, oportunidades de trabalho, programas de inovação, apoio para novas ideias e informações direcionadas a cidadãos, empresas e instituições.

A aplicação utiliza o **App Router do Next.js**, componentes React com TypeScript e Tailwind CSS para a construção da interface.

## Funcionalidades

| Área | Descrição |
| --- | --- |
| **Apresentação institucional** | Apresenta a secretaria, sua atuação e a proposta do portal. |
| **Acesso rápido** | Direciona o visitante para cursos, oportunidades, ideias, InovaPatos e programas. |
| **Serviços** | Reúne cursos e capacitações, Patos + Empregos e ProInova. |
| **Programas** | Apresenta InovaPatos, AceleraPatos, ProInova, Selo Patos Inovação, Patos + Empregos e PICTI. |
| **Caminhos por público** | Organiza os acessos para cidadãos, empresas e instituições. |
| **Estrutura institucional** | Apresenta o Conselho Municipal de CT&I, o Fundo Municipal de CT&I, a Rede de Promoção da Inovação e os Arranjos Promotores de Inovação. |
| **Indicadores institucionais** | Exibe informações resumidas sobre leis municipais, sistema integrado, programas de fomento e o AceleraPatos. |
| **Links externos** | Encaminha o visitante para os portais e páginas específicas de cada serviço ou programa. |

## Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | Framework principal da aplicação e estrutura de rotas com App Router. |
| [React 19](https://react.dev/) | Construção da interface por meio de componentes. |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática do código. |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização da interface com classes utilitárias. |
| [React Icons](https://react-icons.github.io/react-icons/) | Biblioteca de ícones utilizada nos componentes. |
| [ESLint](https://eslint.org/) | Verificação da qualidade e padronização do código. |

## Requisitos

Para executar o projeto, é necessário ter instalado:

- **Node.js**, preferencialmente uma versão LTS compatível com o Next.js 16;

- **npm**, instalado junto com o Node.js;

- **Git**, caso seja necessário clonar o repositório.

O projeto foi validado utilizando Node.js 22.13.0 e npm 10.9.2.

## Como executar o projeto

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/otavio2019/CITI-DE.git
cd CITI-DE
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador:

[http://localhost:3000](http://localhost:3000)

Durante o desenvolvimento, as alterações nos arquivos serão atualizadas automaticamente no navegador.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run lint` | Verifica problemas de qualidade e padronização no código. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm start` | Inicia a aplicação em modo de produção após a execução do build. |

Para validar o projeto antes de publicar, execute:

```bash
npm install
npm run lint
npm run build
npm start
```

## Estrutura do projeto

```
CITI-DE/
├── public/
│   ├── icons/                 # Ícones e logotipo do portal
│   ├── images/                # Imagens utilizadas na aplicação
│   └── arquivos SVG           # Arquivos públicos auxiliares
├── src/
│   ├── app/
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal e metadados
│   │   └── page.tsx           # Página inicial do portal
│   ├── components/
│   │   ├── layout/            # Componentes estruturais do layout
│   │   ├── sections/          # Seções da página inicial
│   │   └── ui/                # Componentes visuais reutilizáveis
│   ├── lib/
│   │   ├── site-content.ts    # Textos, serviços, programas e links
│   │   └── site-icons.ts      # Ícones utilizados pela aplicação
│   └── types/                 # Tipos compartilhados
├── .gitignore
├── eslint.config.mjs          # Configuração do ESLint
├── next.config.ts             # Configuração do Next.js
├── package.json               # Dependências e comandos do projeto
├── package-lock.json          # Versões exatas das dependências
├── postcss.config.mjs         # Configuração do PostCSS e Tailwind CSS
└── tsconfig.json              # Configuração do TypeScript
```

## Organização do código

A página principal é montada a partir de componentes localizados em `src/components/sections`. Essa organização facilita a manutenção de cada parte da interface, como cabeçalho, apresentação, acesso rápido, serviços, programas, públicos, contato e rodapé.

Os textos, serviços, programas, indicadores e links externos ficam concentrados no arquivo `src/lib/site-content.ts`. Sempre que possível, altere o conteúdo nesse arquivo em vez de duplicar informações diretamente nos componentes.

Os ícones utilizados no projeto são organizados em `src/lib/site-icons.ts`.

As imagens públicas ficam dentro da pasta `public/` e podem ser acessadas pelos caminhos `/images/nome-do-arquivo` e `/icons/nome-do-arquivo`.

## Como atualizar textos, serviços e programas

Para alterar um conteúdo do portal:

1. Abra o arquivo `src/lib/site-content.ts`.

1. Localize a lista que deseja editar, como `serviceLinks`, `programLinks`, `services`, `programs` ou `audiencePaths`.

1. Atualize o título, a descrição, o identificador ou o endereço do link.

1. Verifique se o componente responsável utiliza aquela informação.

1. Execute `npm run lint` e `npm run build` antes de publicar.

Exemplo de cadastro de um novo programa:

```
{
  id: "novo-programa",
  title: "Novo programa",
  text: "Descrição breve e objetiva do programa.",
}
```

Ao adicionar um link externo, confirme se o endereço está correto, se utiliza `https://` e se a página de destino está disponível.

## Como adicionar imagens

Coloque novas imagens em `public/images/` e novos ícones ou marcas em `public/icons/`.

Exemplo de utilização de uma imagem em um componente React:

```tsx
<img
  src="/images/exemplo.png"
  alt="Descrição acessível da imagem"
/>
```

Imagens informativas devem sempre possuir um texto alternativo claro. Imagens meramente decorativas devem ser tratadas para não prejudicar a navegação por tecnologias assistivas.

## Build e publicação

Para gerar a versão de produção, execute:

```bash
npm run build
```

Depois, inicie a aplicação com:

```bash
npm start
```

O comando `npm start` deve ser executado somente depois de uma compilação bem-sucedida com `npm run build`.

## Contribuição

Antes de enviar uma alteração, verifique se:

- os textos estão em português do Brasil;

- os links externos continuam funcionando;

- a identidade visual do portal foi preservada;

- não foram incluídas credenciais ou chaves secretas;

- o lint foi executado sem erros;

- o build foi concluído com sucesso.

Exemplo de fluxo de contribuição:

```bash
git checkout -b melhoria/nome-da-melhoria
npm install
npm run lint
npm run build
git add .
git commit -m "melhora documentação do projeto"
git push origin melhoria/nome-da-melhoria
```

Depois, abra um *pull request* descrevendo as alterações realizadas e as verificações executadas.

## Observações

Este repositório contém a interface do portal e seus conteúdos estáticos. Alguns serviços e programas acessados pelos botões podem estar hospedados em endereços externos, como:

- [Portal CiTI-DE](https://citide.patos.pb.gov.br/);

- [Cursos CiTI-DE e SENAC](https://cursos.citide.patos.pb.gov.br/).

A disponibilidade e o conteúdo dessas páginas dependem dos respectivos serviços.

Atualmente, o projeto não declara variáveis de ambiente obrigatórias no arquivo `package.json`. Caso novas integrações utilizem chaves, URLs privadas ou credenciais, esses valores devem ser configurados por variáveis de ambiente e nunca enviados ao repositório.

## Referências

- [Documentação do Next.js](https://nextjs.org/docs)

- [Documentação do React](https://react.dev/learn)

- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)

- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)

- [Lucide React](https://lucide.dev/guide/packages/lucide-react)

- [React Icons](https://react-icons.github.io/react-icons/)
