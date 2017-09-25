
var lines = [[window.innerWidth/2,window.innerHeight-20,window.innerWidth/2,window.innerHeight-250]];
var nextLines = [[window.innerWidth/2,window.innerHeight-20,window.innerWidth/2,window.innerHeight-250]];
var tempLines = [];
var l = 150;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var iters = 8;
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
for(var i=0;i<iters;i++){
	for(var j=0;j<nextLines.length;j++){
		var randomAngle1 = getRandom(Math.PI/6,Math.PI/3);
		var randomAngle2 = getRandom(Math.PI/6,Math.PI/3);

		/*var randomAngle1 = getRandom(Math.PI/12,Math.PI/2.5);
		var randomAngle2 = getRandom(Math.PI/12,Math.PI/2.5);*/
		console.log(randomAngle1);
		console.log(randomAngle2);
		var angle1;
		var angle2;
			if((nextLines[j][0]>nextLines[j][2]&&nextLines[j][1]>nextLines[j][3])||(nextLines[j][0]>nextLines[j][2]&&nextLines[j][1]<nextLines[j][3])){
				angle1=((Math.PI/2)+((Math.PI/2)+Math.atan((nextLines[j][3]-nextLines[j][1])/(nextLines[j][2]-nextLines[j][0]))))-randomAngle1;
				angle2=((Math.PI/2)+((Math.PI/2)+Math.atan((nextLines[j][3]-nextLines[j][1])/(nextLines[j][2]-nextLines[j][0]))))+randomAngle2;
			}else{
				angle1=randomAngle1+Math.atan((nextLines[j][3]-nextLines[j][1])/(nextLines[j][2]-nextLines[j][0]));
				angle2=Math.atan((nextLines[j][3]-nextLines[j][1])/(nextLines[j][2]-nextLines[j][0]))-randomAngle2;
			}	
		tempLines.push([nextLines[j][2],nextLines[j][3],nextLines[j][2]+(Math.cos(angle1)*l),nextLines[j][3]+(Math.sin(angle1)*l)]);
		lines.push([nextLines[j][2],nextLines[j][3],nextLines[j][2]+(Math.cos(angle1)*l),nextLines[j][3]+(Math.sin(angle1)*l)]);
		tempLines.push([nextLines[j][2],nextLines[j][3],nextLines[j][2]+(Math.cos(angle2)*l),nextLines[j][3]+(Math.sin(angle2)*l)]);
		lines.push([nextLines[j][2],nextLines[j][3],nextLines[j][2]+(Math.cos(angle2)*l),nextLines[j][3]+(Math.sin(angle2)*l)]);
	}
	l=l*.75;
	nextLines = tempLines;
	tempLines = [];
}
var t = 1;
var width = 9;
ctx.lineWidth = width;
for(var i=0;i<lines.length;i++){
	if(i==t-1){
		t=t*2;
		width=width-1;
	}

	ctx.lineWidth = width;
	if(i>=Math.pow(2,iters)-1&&i%2!=0){
		ctx.beginPath();
		ctx.moveTo(lines[i][2],lines[i][3]);
		ctx.lineTo(lines[i+1][2],lines[i+1][3]);
		ctx.stroke();
	}
	console.log(lines[i][0]+" "+lines[i][1]+" "+lines[i][2]+" "+lines[i][3])
	ctx.beginPath();
	ctx.moveTo(lines[i][0],lines[i][1]);
	ctx.lineTo(lines[i][2],lines[i][3]);
	ctx.stroke();
	
}
/*var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


window.location.href=image;*/
        /* love.graphics.line(tree[i].p2.x,tree[i].p1.y,tree[i].p2.x,tree[i].p2.y)
        love.graphics.line(tree[i].p1.x,tree[i].p1.y,tree[i].p2.x,tree[i].p1.y) */
        //love.graphics.rectangle("line",tree[i].p1.x,tree[i].p1.y,tree[i].p2.x-tree[i].p1.x,tree[i].p2.y-tree[i].p1.y)

   
