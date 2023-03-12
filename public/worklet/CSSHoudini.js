/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-03-11 17:03:20
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
registerPaint(
  'waveDraw',
  class {
    static get inputProperties() {
      return ['--animation-tick'];
    }
    paint(ctx, size, properties) {
      let tick = Number(properties.get('--animation-tick'));
      const { width, height } = size;
      const initY = height * 0.7;
      ctx.beginPath();
      for (let i = 0; i <= width; i++) {
        ctx.lineTo(i, initY + Math.sin((i + tick) / 20) * 10);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.lineTo(0, initY);
      ctx.closePath();
      const gnt = ctx.createLinearGradient(0, 75, 800, 75);
      gnt.addColorStop(0, 'rgba(134, 225, 253, 0.3)');
      gnt.addColorStop(0.5, 'rgba(10, 250, 250, 0.3)');
      gnt.addColorStop(1, 'rgba(6, 71, 168, 0.3)');
      ctx.fillStyle = gnt;
      ctx.fill();
    }
  },
);
