export class WatchDraw {
  constructor() {
    this.time = new Date();//현재시간 박힘
    this.hour = this.time.getHours();
    if (this.hour == 0) {
      this.hour = 12;
    } else if (this.hour >= 13) {
      this.hour -= 13;
    }
    this.min = this.time.getMinutes();
    this.sec = this.time.getSeconds();
    this.m_sec = this.time.getMilliseconds();
    this.ang =0;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;


  }

  update(ctx) {
    let time = new Date();
    let green = ctx.createRadialGradient(250, 250, 0.5, 250, 250, 250);
    green.addColorStop(0, "hsla(180, 55%, 8%, 1)");
    green.addColorStop(1, "hsla(180, 95%, 15%, 1)");
    ctx.fillStyle = green;
    //console.log(this.stageWidth);
    //console.log(this.stageHeight);
    ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.drawSeconds(ctx);
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let m_sec = time.getMilliseconds();
    let hr = time.getHours();
    this.drawSeconds(ctx,sec,m_sec);
    this.drawMinutes(ctx,min,sec,m_sec);
    this.drawHours(ctx,hr,min,sec,m_sec);
  }


  drawSeconds(ctx,sec,m_sec) {
    this.ang = 0.006 * (sec * 1000 + m_sec);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 50);
    ctx.arc(250, 250, 200, this.calcDeg(0), this.calcDeg(this.ang), false);
    ctx.lineTo(250, 250);
    ctx.shadowColor = "hsla(180, 45%, 5%, .4)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = -15;
    ctx.shadowOffsetY = -15;
    ctx.fill();
    
  }


  drawMinutes(ctx,min,sec,m_sec) {
    this.ang =
      0.0001 * (min * 60 * 1000 + sec * 1000 + m_sec);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 100);
    ctx.arc(250, 250, 150, this.calcDeg(0), this.calcDeg(this.ang), false);
    ctx.lineTo(250, 250);
    ctx.shadowColor = "hsla(180, 25%, 5%, .4)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fill();
  }

  drawHours(ctx,hr,min,sec,m_sec) {
    this.ang =
      0.000008333 *
      (hr * 60 * 60 * 1000 +
        min * 60 * 1000 +
        sec * 1000 +
        m_sec);
    if (this.ang > 360) {
      this.ang -= 360;
    }
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 150);
    ctx.arc(250, 250, 100, this.calcDeg(0), this.calcDeg(this.ang), false);
    ctx.lineTo(250, 250);
    ctx.shadowColor = "hsla(180, 45%, 5%, .4)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fill();
  }

 
  //handle zeros for minutes and seconds
  numPad0(str) {
    //0~60
    var cStr = str.toString();
    if (cStr.length < 2) {
      str = 0 + cStr;
    }
    return str;
  }

calcDeg(deg) {
    return (Math.PI / 180) * (deg - 90);
  }
}