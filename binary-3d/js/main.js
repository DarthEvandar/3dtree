var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene = new THREE.Scene();



var lines = [[0,-30,0,0,-15,0]];
var nextLines = [[0,-30,0,0,-15,0]];
var tempLines = [];
var l = 10;
/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;*/


var iters = 8;
function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}
for(var j=0;j<1;j++){
		var randomAngle1 = getRandom(Math.PI/6,Math.PI/3);
		var randomAngle2 = getRandom(Math.PI/6,Math.PI/3);
		var x = getRandom(0,l);
		var z = getRandom(0,l);
		var y1 = Math.abs(Math.tan(randomAngle1)*(Math.sqrt(Math.pow(x,2)+Math.pow(z,2))));
		var y2 = Math.abs(Math.tan(randomAngle2)*(Math.sqrt(Math.pow(x,2)+Math.pow(z,2))));
		/*var randomAngle1 = getRandom(Math.PI/12,Math.PI/2.5);
		var randomAngle2 = getRandom(Math.PI/12,Math.PI/2.5);*/
		/*console.log(randomAngle1);
		console.log(randomAngle2);*/
		var angle1;
		var angle2;
		if((nextLines[j][0]>nextLines[j][3]&&nextLines[j][1]>nextLines[j][4])||(nextLines[j][0]>nextLines[j][3]&&nextLines[j][2]<nextLines[j][5])){
			angle1= (Math.PI/2)+(Math.PI/2)+Math.atan( (nextLines[j][4]-nextLines[j][1])/(Math.sqrt( Math.pow(nextLines[j][3]-nextLines[j][0],2) +Math.pow(nextLines[j][5]-nextLines[j][2],2) ) ) ) -randomAngle1;
			angle2= (Math.PI/2)+(Math.PI/2)+Math.atan( (nextLines[j][4]-nextLines[j][1])/(Math.sqrt( Math.pow(nextLines[j][3]-nextLines[j][0],2) +Math.pow(nextLines[j][5]-nextLines[j][2],2) ) ) ) +randomAngle2;
		}else{
			angle1=Math.atan((nextLines[j][4]-nextLines[j][1])/(Math.sqrt(Math.pow(nextLines[j][3]-nextLines[j][0],2)+Math.pow(nextLines[j][5]-nextLines[j][2],2))))-randomAngle1;
			angle2=Math.atan((nextLines[j][4]-nextLines[j][1])/(Math.sqrt(Math.pow(nextLines[j][3]-nextLines[j][0],2))+Math.pow(nextLines[j][5]-nextLines[j][2],2)))+randomAngle2;
		}	
		
		console.log("tan",Math.tan(angle1),"angle",angle1,"x",x,"y1",y1,"z",z);
		console.log("tan",Math.tan(angle2),"angle",angle2,"x",x,"y2",y2,"z",z);
		tempLines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]+x,nextLines[j][4]+y1,nextLines[j][5]+z]);
		lines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]+x,nextLines[j][4]+y1,nextLines[j][5]+z]);
		tempLines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]-x,y2+nextLines[j][4],nextLines[j][5]-z]);
		lines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]-x,y2+nextLines[j][4],nextLines[j][5]-z]);
	}
for(var i=0;i<iters;i++){
	for(var j=0;j<nextLines.length;j++){
		var randomAngle1 = getRandom(Math.PI/6,Math.PI/3);
		var randomAngle2 = getRandom(Math.PI/6,Math.PI/3);
		var x = getRandom(0,l)*(Math.random() < 0.5 ? -1 : 1);
		var z = (l-Math.abs(x))*(Math.random() < 0.5 ? -1 : 1);
		var y1 = (Math.random() < 0.3 ? -1 : 1)*Math.tan(randomAngle1)*(Math.sqrt(Math.pow(x,2)+Math.pow(z,2)));
		var y2 = (Math.random() < 0.3 ? -1 : 1)*Math.tan(randomAngle2)*(Math.sqrt(Math.pow(x,2)+Math.pow(z,2)));
		/*var randomAngle1 = getRandom(Math.PI/12,Math.PI/2.5);
		var randomAngle2 = getRandom(Math.PI/12,Math.PI/2.5);*/
		/*console.log(randomAngle1);
		console.log(randomAngle2);*/
		var angle1;
		var angle2;
		if((nextLines[j][0]>nextLines[j][3]&&nextLines[j][1]>nextLines[j][4])||(nextLines[j][0]>nextLines[j][3]&&nextLines[j][2]<nextLines[j][5])){
			angle1= (Math.PI/2)+(Math.PI/2)+Math.atan( (nextLines[j][4]-nextLines[j][1])/(Math.sqrt( Math.pow(nextLines[j][3]-nextLines[j][0],2) +Math.pow(nextLines[j][5]-nextLines[j][2],2) ) ) ) -randomAngle1;
			angle2= (Math.PI/2)+(Math.PI/2)+Math.atan( (nextLines[j][4]-nextLines[j][1])/(Math.sqrt( Math.pow(nextLines[j][3]-nextLines[j][0],2) +Math.pow(nextLines[j][5]-nextLines[j][2],2) ) ) ) +randomAngle2;
		}else{
			angle1=Math.atan((nextLines[j][4]-nextLines[j][1])/(Math.sqrt(Math.pow(nextLines[j][3]-nextLines[j][0],2)+Math.pow(nextLines[j][5]-nextLines[j][2],2))))-randomAngle1;
			angle2=Math.atan((nextLines[j][4]-nextLines[j][1])/(Math.sqrt(Math.pow(nextLines[j][3]-nextLines[j][0],2))+Math.pow(nextLines[j][5]-nextLines[j][2],2)))+randomAngle2;
		}	
		
		console.log("tan",Math.tan(angle1),"angle",angle1,"x",x,"y1",y1,"z",z);
		console.log("tan",Math.tan(angle2),"angle",angle2,"x",x,"y2",y2,"z",z);
		tempLines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]+x,nextLines[j][4]+y1,nextLines[j][5]+z]);
		lines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]+x,nextLines[j][4]+y1,nextLines[j][5]+z]);
		tempLines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]-x,y2+nextLines[j][4],nextLines[j][5]-z]);
		lines.push([nextLines[j][3],nextLines[j][4],nextLines[j][5],nextLines[j][3]-x,y2+nextLines[j][4],nextLines[j][5]-z]);
	}

	l=l*.75;
	nextLines = tempLines;
	tempLines = [];
}
var t = 1;
var width = 9;
//ctx.lineWidth = width;
/*for(var i=0;i<lines.length;i++){
	if(i==t-1){
		t=t*2;
		width=width-1;
	}

	//ctx.lineWidth = width;
	if(i>=Math.pow(2,iters)-1&&i%2!=0){
		ctx.beginPath();
		ctx.moveTo(lines[i][2],lines[i][3]);
		ctx.lineTo(lines[i+1][2],lines[i+1][3]);
		ctx.stroke();
	}
	console.log(lines[i][0]+" "+lines[i][1]+" "+lines[i][2]+" "+lines[i][3])
	//ctx.beginPath();
	//shape.moveTo(lines[i][0],lines[i][1]);
	shape.lineTo(lines[i][2],lines[i][3]);
	//ctx.stroke();
	
}*/
/*geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));*/
var ls = new THREE.Group();

for(var i = 0;i<lines.length;i++){
	/*console.log(lines[i][0],lines[i][1],lines[i][2]);
	console.log(lines[i][3],lines[i][4],lines[i][5]);*/
	if(i==t-1){
		t=t*2;
		width=width-1;
	}
	var geometry = new THREE.Geometry();
	/*var tube = new THREE.TubeGeometry(new THREE.SplineCurve3([new THREE.Vector3(),new THREE.Vector3(lines[i][0],lines[i][1],lines[i][2]),new THREE.Vector3(lines[i][3],lines[i][4],lines[i][5])]),64,.1,8,false);
	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
	var mesh = new THREE.Mesh( tube, material );*/
	geometry.vertices.push(new THREE.Vector3(lines[i][0],lines[i][1],lines[i][2]));
	geometry.vertices.push(new THREE.Vector3(lines[i][3],lines[i][4],lines[i][5]));
	var material = new THREE.LineBasicMaterial({ color: 0x0000ff,linewidth:5 });
	var line = new THREE.Line(geometry, material);
	ls.add(line);
	//ls.add(mesh);
}
scene.add(ls);

function animate(){
	requestAnimationFrame(animate);
	ls.rotation.y+=.01;
	renderer.render(scene,camera);
}
var render = function () {

	requestAnimationFrame( render );

	renderer.render( scene, camera );

};
window.addEventListener( 'resize', function () {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}, false );
animate();
//render();