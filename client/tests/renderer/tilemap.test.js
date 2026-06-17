import { jest } from '@jest/globals';
import { TilemapRenderer } from '../../src/renderer/TilemapRenderer.js';

test('TilemapRenderer converte posições do mundo para o canvas corretamente', () => {
  // Mock canvas and context
  const mockCtx = {
    fillRect: jest.fn(),
    drawImage: jest.fn(),
  };
  const mockCanvas = {
    getContext: () => mockCtx,
    width: 640,
    height: 640
  };

  const renderer = new TilemapRenderer(mockCanvas, {});
  
  // Camera no centro do mapa 20x20
  const camera = { x: 10, y: 5, z: 7 };
  
  // Testando o próprio tile onde a câmera está focada
  // Com viewport 20x20 e tileSize 32, o centro do canvas (10 tiles) é 320x320
  const centerCanvasPos = renderer.worldToCanvas({ x: 10, y: 5 }, camera);
  expect(centerCanvasPos).toEqual({ x: 320, y: 320 });

  // Testando um tile adjacente (1 sqms para a direita)
  const rightCanvasPos = renderer.worldToCanvas({ x: 11, y: 5 }, camera);
  expect(rightCanvasPos).toEqual({ x: 352, y: 320 });
});
