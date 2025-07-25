

//-----------------------------------------------1：一条直线
/*
const cnv: any = document.getElementById('c');
const cxt = cnv.getContext('2d');
cxt.moveTo(100, 100);
cxt.lineTo(200, 100);
cxt.stroke();
*/

//-----------------------------------------------2：多条直线
/*
const cnv: any = document.getElementById('c');
const cxt = cnv.getContext('2d');
cxt.moveTo(20, 100);
cxt.lineTo(200, 100);
cxt.stroke();

cxt.moveTo(20, 120.5);
cxt.lineTo(200, 120.5);
cxt.stroke();
*/

//-----------------------------------------------3：直线加颜色
const cnv: any = document.getElementById('c');
const cxt = cnv.getContext('2d');

cxt.moveTo(50, 50);
cxt.lineTo(200, 50);

cxt.lineWidth = 20;
cxt.strokeStyle = 'red';
cxt.lineCap = 'round';

cxt.stroke();