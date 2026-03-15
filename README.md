# devroast

**💻 Cole seu código. 🔙 Leve uma surra na revisão.**

O **devroast** é uma ferramenta que analisa a qualidade do seu código-fonte e te dá uma nota brutalmente honesta de 0 a 10.

Envie qualquer trecho de código e ative o 🔥 **"roast mode"** para descobrir o quão bom (*ou ruim*) seu código realmente é. Ou navegue pela **leaderboard** para testemunhar os códigos mais bem colocados na categoria 🇫🇷 "vergonha da profissão".

Projeto desenvolvido durante o evento **NLW 22 Operator** da [Rocketseat](https://rocketseat.com.br). Um app totalmente vide-codado com os melhores geradores de código legado do mercado.

## Tecnologias

- **[Node.js](https://nodejs.org)** — Runtime JavaScript
- **[pnpm](https://pnpm.io)** — Gerenciador de pacotes
- **[React](https://react.dev)** — Biblioteca de UI
- **[Next.js](https://nextjs.org)** — Framework de UI
- **[Tailwind](https://tailwindcss.com)** — Estilização
- **[Biome](https://biomejs.dev)** — Linter e formatter
- **[Pencil](https://www.pencil.dev)** — Ferramenta de design integrada a agentes de IA
- **[OpenCode](https://opencode.ai)** — Agente open source para desenvolvimento

## Dependências

- **pnpm 10.x** ou superior ([download](https://pnpm.io/installation))
- **Node.js v25.7.x** ou superior ([download](https://nodejs.org/en/download))

## Configurando o Agente

<details>
<summary><strong>Agente OpenCode (CLI)</strong></summary>

Instale a CLI do OpenCode usando os comandos na [home do projeto](https://opencode.ai) ou através do gerenciador de pacotes do seu sistema.
</details>

<details>
<summary><strong>Pencil MCP</strong></summary>

Instale o Pencil Desktop visitando a página de [downloads](https://www.pencil.dev/downloads) do projeto.

Uma vez instalado, faça login no app e navegue para `Settings > MCP` pelo ícone de usuário, ou clicando no botão `Agents & MCP`. Na lista de integrações, habilite `OpenCode CLI`. Isso irá instalar um servidor MCP para comunicação entre o Pencil Desktop e o agente do OpenCode.

Para validar a integração, rode o comando `opencode mcp list` e verifique se o MCP `pencil` está sendo listado com o status **"connected"**.

⚠️ Caso o agente tenha problemas de conexão com o MCP, certifique-se que o Pencil Desktop esteja rodando **antes de abrir o OpenCode**. O app também deve **permanecer aberto** durante todo o tempo equanto usa o agente.
</details>

<details>
<summary><strong>Context7 MCP</strong></summary>

Siga as instruções no [GitHub](https://github.com/upstash/context7?tab=readme-ov-file#installation) do projeto para instalar o servidor MCP do Context7. Após a instalação, rode o comando `opencode mcp list` e verifique se o MCP `context7` está sendo listado com o status **"connected"**.
</details>

## Comandos

```bash
pnpm i          # Instala as demais dependências do projeto
pnpm dev        # Inicia o servidor de desenvolvimento
pnpm start      # Inicia o servidor de produção
pnpm build      # Faz o build de produção
pnpm lint       # Verifica código com Biome
pnpm format     # Formata código com Biome
```
