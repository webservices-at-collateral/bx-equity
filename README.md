# BX Equity v3 — Landing Page

Projeto Next.js (App Router) + Tailwind CSS com a hero section "BX Equity" v3
(layout alinhado à esquerda, com foto de prédio em recorte de seta),
implementada a partir do Figma (node 74:77).

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
vercel --prod
```

### Opção 2 — Painel da Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Acesse https://vercel.com/new
3. Selecione o repositório.
4. Framework Preset: **Next.js** (detectado automaticamente).
5. Clique em **Deploy**.

## Estrutura

```
app/
  layout.js             # fonte Produkt local via next/font
  page.js               # renderiza a hero section
  globals.css           # Tailwind base
components/
  BxEquityHeroV3.jsx    # a section em si (lockup SVG + parágrafo + badge)
public/
  fonts/produkt-regular.woff2
  images/hero-building.png   # imagem de fundo (gradiente + linhas + foto já compostos)
```
