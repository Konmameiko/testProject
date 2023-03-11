// 文件名为 CSSHoudini.js
registerPaint(
  'waveDraw',
  class {
    static get inputProperties() {
      return [];
    }
    paint(ctx, size, properties) {
      const { width, height } = size;
      const initY = height * 0.5;
      ctx.beginPath();
      for (let i = 0; i <= width; i++) {
        ctx.lineTo(i, initY + Math.sin(i / 20) * 10);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.lineTo(0, initY);
      ctx.closePath();

      ctx.fillStyle = 'rgba(255, 0, 0, 0.9)';
      ctx.fill();
    }
  },
);
