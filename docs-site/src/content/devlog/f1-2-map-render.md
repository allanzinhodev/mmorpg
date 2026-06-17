---
slug: "feat-map-render-fixed-grass"
date: "2026-06-17"
title: "F1.2: Renderizador de Mapa (Grama Fixa)"
phase: 1
status: "done"
tests: "passing"
---

O motor de renderização inicial do Canvas HTML5 foi implementado com sucesso. Para começar simples e validar os cálculos de câmera, focamos em desenhar um grid de 20x20 onde todos os SQMs são formados pelo sprite da grama fixa.

- Construímos o `TilemapRenderer`, que traduz coordenadas globais (`worldX`, `worldY`) para as coordenadas relativas do canvas (`canvasX`, `canvasY`) baseado na posição central da câmera.
- Construímos o `SpriteManager` para no futuro lidar com os cortes no `atlas.json` (atualmente ele renderiza placeholders magenta ou base64).
- Adicionamos testes unitários com Jest mockando o Canvas API para provar que a matemática do `worldToCanvas` desloca os offsets corretamente baseado no tileSize de 32 pixels.
