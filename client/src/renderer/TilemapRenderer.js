export class TilemapRenderer {
  constructor(canvas, spriteManager) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.spriteManager = spriteManager;
    
    // Configurações do jogo 2D pixel-art
    this.ctx.imageSmoothingEnabled = false;
    this.tileSize = 32;
    this.viewportWidth = 20;
    this.viewportHeight = 20;
    
    // Câmera centrada
    this.camera = { x: 10, y: 10, z: 7 };
  }

  worldToCanvas(worldPos, cameraPos) {
    // Tela de 640x640, centro é 320x320 (10 tiles)
    const centerX = (this.viewportWidth / 2) * this.tileSize;
    const centerY = (this.viewportHeight / 2) * this.tileSize;
    
    const dx = worldPos.x - cameraPos.x;
    const dy = worldPos.y - cameraPos.y;
    
    return {
      x: centerX + (dx * this.tileSize),
      y: centerY + (dy * this.tileSize)
    };
  }

  renderFixedGrass() {
    this.ctx.fillStyle = '#1a1208'; // background color
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const startX = this.camera.x - Math.floor(this.viewportWidth / 2);
    const startY = this.camera.y - Math.floor(this.viewportHeight / 2);

    for (let x = 0; x < this.viewportWidth + 1; x++) {
      for (let y = 0; y < this.viewportHeight + 1; y++) {
        const worldX = startX + x;
        const worldY = startY + y;
        
        const canvasPos = this.worldToCanvas(
          { x: worldX, y: worldY },
          this.camera
        );

        // ID 100 será nossa grama no atlas
        this.spriteManager.drawSprite(this.ctx, 100, canvasPos.x, canvasPos.y, this.tileSize, this.tileSize);
      }
    }
  }
}
