var tela = document.querySelector("canvas");
var ctx = tela.getContext("2d");

//background
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 360, 290);

//first line
//1
ctx.fillStyle = "#2c9653";
ctx.fillRect(0, 0, 50, 50);
//2
ctx.fillStyle = "#5ebe67";
ctx.fillRect(50, 0, 50, 50);
//3
ctx.fillStyle = "#42B558";
ctx.fillRect(100, 0, 50, 50);
//4
ctx.fillStyle = "#6bc26e";
ctx.fillRect(150, 0, 50, 50);
//5
ctx.fillStyle = "#47954f";
ctx.fillRect(200, 0, 50, 50);
//6
ctx.fillStyle = "#72c36a";
ctx.fillRect(250, 0, 50, 50);
//7
ctx.fillStyle = "#5cbc61";
ctx.fillRect(300, 0, 50, 50);
//8
ctx.fillStyle = "#b2d9b9";
ctx.fillRect(340, 0, 20, 50);

//second line
//1
ctx.fillStyle = "#4bba5c";
ctx.fillRect(0, 50, 50, 50);
//2
ctx.fillStyle = "#84ca89";
ctx.fillRect(100, 50, 50, 50);
//3
ctx.fillStyle = "#55a35b";
ctx.fillRect(150, 50, 50, 50);
//4
ctx.fillStyle = "#72c36a";
ctx.fillRect(200, 50, 50, 50);
//5
ctx.fillStyle = "#3c995a";
ctx.fillRect(290, 50, 50, 50);
//6
ctx.fillStyle = "#bde0bf";
ctx.fillRect(340, 50, 20, 50);

//third line
//1
ctx.fillStyle = "#59bb58";
ctx.fillRect(0, 100, 50, 40);
//2
ctx.fillStyle = "#69be66";
ctx.fillRect(100, 100, 50, 40);
//3
ctx.fillStyle = "#5db259";
ctx.fillRect(150, 100, 50, 40);
//4
ctx.fillStyle = "#5ead5a";
ctx.fillRect(200, 100, 50, 40);
//5
ctx.fillStyle = "#72c36a";
ctx.fillRect(290, 100, 50, 40);
//6
ctx.fillStyle = "#87ce86";
ctx.fillRect(340, 100, 20, 40);

//fourth line
//1
ctx.fillStyle = "#a7d6a6";
ctx.fillRect(0, 140, 50, 50);
//2
ctx.fillStyle = "#5da662";
ctx.fillRect(50, 140, 50, 50);
//3
ctx.fillStyle = "#82ca89";
ctx.fillRect(100, 140, 50, 50);
//4
ctx.fillStyle = "#41904f";
ctx.fillRect(200, 140, 50, 50);
//5
ctx.fillStyle = "#82ca89";
ctx.fillRect(250, 140, 50, 50);
//6
ctx.fillStyle = "#41904f";
ctx.fillRect(300, 140, 40, 50);
//7
ctx.fillStyle = "#67c060";
ctx.fillRect(340, 140, 20, 50);

//fifth line
//1
ctx.fillStyle = "#8bcb8f";
ctx.fillRect(0, 190, 50, 50);
//2
ctx.fillStyle = "#48964e";
ctx.fillRect(50, 190, 50, 50);
//3
ctx.fillStyle = "#31904e";
ctx.fillRect(250, 190, 50, 50);
//4
ctx.fillStyle = "#71bc87";
ctx.fillRect(300, 190, 40, 50);
//5
ctx.fillStyle = "#4fa256";
ctx.fillRect(340, 190, 20, 50);

//sixth line
//1
ctx.fillStyle = "#57b85a";
ctx.fillRect(0, 240, 50, 50);
//2
ctx.fillStyle = "#a2d49f";
ctx.fillRect(50, 240, 50, 50);
//3
ctx.fillStyle = "#1ba053";
ctx.fillRect(100, 240, 50, 50);
//4
ctx.fillStyle = "#82bf89";
ctx.fillRect(150, 240, 50, 50);
//5
ctx.fillStyle = "#79b580";
ctx.fillRect(200, 240, 50, 50);
//6
ctx.fillStyle = "#67bf5d";
ctx.fillRect(250, 240, 50, 50);
//7
ctx.fillStyle = "#76c67d";
ctx.fillRect(300, 240, 40, 50);
//7
ctx.fillStyle = "#2c9653";
ctx.fillRect(340, 240, 20, 50);

/////FACE
//left eye
ctx.fillStyle = "black";
ctx.fillRect(50, 50, 80, 90);
//middle
ctx.fillStyle = "transparent";
ctx.fillRect(130, 50, 90, 90);
//right eye
ctx.fillStyle = "black";
ctx.fillRect(220, 50, 80, 90);
//noise
ctx.fillStyle = "black";
ctx.fillRect(130, 140, 90, 100);
// left mouth
ctx.fillStyle = "black";
ctx.fillRect(90, 190, 40, 100);
//right mouth
ctx.fillStyle = "black";
ctx.fillRect(220, 190, 40, 100);
