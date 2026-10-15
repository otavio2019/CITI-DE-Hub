# CiTI-DE Hub

Landing page institucional do **CiTI-DE Hub**, uma porta de entrada para iniciativas de ciência, tecnologia, inovação, empreendedorismo e desenvolvimento econômico em Patos (PB).

A aplicação é independente de plataformas de hospedagem específicas e pode ser executada localmente, em qualquer servidor Node.js ou em Docker.

## Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Requisitos

- Node.js 22 ou superior;
- npm 10 ou superior;
- Docker 20.10 ou superior, caso prefira usar contêiner.

## Executar localmente

```bash
git clone https://github.com/otavio2019/CITI-DE-Hub.git
cd CITI-DE-Hub
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção com Node.js

```bash
npm ci
npm run lint
npm run build
npm start
```

A aplicação de produção ficará disponível em [http://localhost:3000](http://localhost:3000).

## Executar com Docker

### Build da imagem

```bash
docker build -t citi-de-hub .
```

### Iniciar o contêiner

```bash
docker run --rm -p 3000:3000 citi-de-hub
```

Abra [http://localhost:3000](http://localhost:3000).

O Dockerfile usa três estágios: instala as dependências, gera o build otimizado e executa somente os arquivos necessários em uma imagem Node.js enxuta, usando um usuário sem privilégios de root.

### Executar em segundo plano

```bash
docker run -d \
  --name citi-de-hub \
  --restart unless-stopped \
  -p 3000:3000 \
  citi-de-hub
```

Para parar e remover o contêiner:

```bash
docker stop citi-de-hub
docker rm citi-de-hub
```

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com atualização automática. |
| `npm run lint` | Verificação de qualidade do código. |
| `npm run build` | Build otimizado para produção. |
| `npm start` | Servidor Next.js em modo de produção. |

## Estrutura principal

```text
CITI-DE-Hub/
├── public/                 # Logo e imagens públicas
├── src/app/
│   ├── globals.css         # Identidade visual e responsividade
│   ├── layout.tsx          # Layout e metadados
│   └── page.tsx            # Landing page principal
├── Dockerfile              # Build multi-stage de produção
├── .dockerignore           # Arquivos fora do contexto Docker
├── next.config.ts          # Saída standalone do Next.js
├── package.json
└── tsconfig.json
```

## Conteúdo e links

A home utiliza links para serviços externos do CiTI-DE, incluindo o portal oficial, cursos e Sala do Empreendedor. Esses destinos podem ser alterados diretamente em `src/app/page.tsx`.

Imagens e logotipos ficam em `public/images/` e `public/icons/`.

## Validação

Antes de publicar alterações, execute:

```bash
npm ci
npm run lint
npm run build
```
