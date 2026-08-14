# BX Equity — Landing Page

Projeto Next.js (App Router) + Tailwind CSS com a hero section "BX Equity".

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy na Vercel

### Opção 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```
Siga o passo a passo (login, nome do projeto, etc). No final ele te dá a URL de produção.

Para produção direto:
```bash
vercel --prod
```

### Opção 2 — Painel da Vercel (recomendado se for a 1ª vez)
1. Suba esta pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Acesse https://vercel.com/new
3. Selecione o repositório.
4. Framework Preset: **Next.js** (detectado automaticamente).
5. Clique em **Deploy**.

Nenhuma variável de ambiente é necessária — o projeto é 100% estático/front-end.

## Estrutura

```
app/
  layout.js       # fontes (Playfair Display + Inter) via next/font
  page.js         # renderiza a hero section
  globals.css     # Tailwind base
components/
  BxEquityHero.jsx  # a section em si (logo SVG + textos + badge)
```
