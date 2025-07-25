
const cnv: any = document.getElementById('c');
const cxt = cnv.getContext('2d');
//起点坐标 (x, y)
cxt.moveTo(100, 100);
//终点坐标 (x, y)
cxt.lineTo(200, 100);
//将起点和终点连接起来
cxt.stroke();
