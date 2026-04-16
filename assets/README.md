# assets/ — Imagens Necessárias

Esta pasta deve conter os seguintes arquivos de imagem para o site funcionar corretamente.
Coloque os arquivos aqui antes de publicar no GitHub Pages.

---

## Lista de Imagens

| Arquivo                | Dimensão recomendada | Formato | Descrição                                                      |
|------------------------|----------------------|---------|----------------------------------------------------------------|
| `logo.png`             | 260 × 80 px          | PNG     | Logo da marca Rumo Certo (fundo transparente, versão branca)   |
| `banner-desktop.jpg`   | 1920 × 1080 px       | JPG/WEBP| Banner principal para desktop (Edmilson + produto + campo)     |
| `banner-mobile.jpg`    | 750 × 1334 px        | JPG/WEBP| Versão vertical do banner para smartphones                     |
| `saco-15kg.jpg`        | 800 × 600 px         | JPG/WEBP| Foto do saco de 15 kg do adubo Rumo Certo                      |
| `saco-25kg.jpg`        | 800 × 600 px         | JPG/WEBP| Foto do saco de 25 kg do adubo Rumo Certo                      |

---

## Dicas

- Prefira o formato **WebP** para melhor performance (menor tamanho, mesma qualidade).
  - Se usar WebP, renomeie os arquivos para `.webp` e atualize os `src` no `index.html`.
- Comprima as imagens com [Squoosh](https://squoosh.app) ou [TinyPNG](https://tinypng.com) antes de subir.
- O `banner-desktop.jpg` é usado também como `og:image` (preview ao compartilhar link).
- Mantenha o logo com fundo **transparente** para que fique correto sobre o header verde escuro.

---

## Estrutura esperada

```
assets/
├── logo.png
├── banner-desktop.jpg
├── banner-mobile.jpg
├── saco-15kg.jpg
├── saco-25kg.jpg
└── README.md  ← este arquivo
```
