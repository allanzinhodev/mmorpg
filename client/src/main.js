import { SpriteManager } from './renderer/SpriteManager.js';
import { TilemapRenderer } from './renderer/TilemapRenderer.js';

const canvas = document.getElementById('gameCanvas');
const spriteManager = new SpriteManager();
const renderer = new TilemapRenderer(canvas, spriteManager);

// Criar um atlas base64 provisório só para o chão de grama e testar
const placeholderAtlas = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nO3BMQEAAADCoPVP7WkJoAAAAHCyAQAAmj/B9QAAAABJRU5ErkJggg=="; // Imagem verde de 32x32

async function init() {
  await spriteManager.loadAtlas(placeholderAtlas, {
    frames: {
      "100": { x: 0, y: 0, w: 32, h: 32 } // Grama
    }
  });

  // Render loop inicial (estático por enquanto)
  renderer.renderFixedGrass();
  
  console.log("Web Client iniciado. Grama renderizada!");
}

init();
