export class SpriteManager {
  constructor() {
    this.sprites = new Map();
    this.atlasImage = null;
    this.isLoaded = false;
  }

  async loadAtlas(imageUrl, atlasJson) {
    return new Promise((resolve, reject) => {
      this.atlasImage = new Image();
      this.atlasImage.onload = () => {
        for (const [id, rect] of Object.entries(atlasJson.frames)) {
          this.sprites.set(parseInt(id), rect);
        }
        this.isLoaded = true;
        resolve();
      };
      this.atlasImage.onerror = reject;
      this.atlasImage.src = imageUrl;
    });
  }

  drawSprite(ctx, spriteId, x, y, width = 32, height = 32) {
    if (!this.isLoaded) return;
    
    const rect = this.sprites.get(spriteId);
    if (!rect) {
      // Draw placeholder if sprite not found
      ctx.fillStyle = '#ff00ff';
      ctx.fillRect(x, y, width, height);
      return;
    }

    ctx.drawImage(
      this.atlasImage,
      rect.x, rect.y, rect.w, rect.h,
      x, y, width, height
    );
  }
}
