var LabEnv = require("./LabEnv");
var h=20;
var w=40;
var env new LabEnv();
var LabAgent = function(accion){
	this.accion=accion;
}


var Estado = function(x, y, d){
	this.x=x;
	this.y=y;
	this.d=d;
}

var MAX=50; 
var visitado = new Array(MAX);
var prev = new Array(MAX);
for(i=0; i<MAX;i++){
	visitado[i] = new Array(MAX);
	prev[i]= new Array(MAX);
}
for(i=0; i<h; i++){
	for(j=0; j<w; j++){
		prev[i][j] = new Estado(i,j,sqrt(i*i+j*j));
	}
}
ady2 = env.maze(h,w);
ady = new Array(h);
for(i=0;i<h;i++){
	ady[i] = new Array(w);
	for(j=0; j<(w-1); j++){
		ady[i][j] = ady2.charAt(i*(w-1)+j);
	}
}
var dx = new Array(0,0,1,-1);
var dy = new Array(1,-1,0,0);
var h, w;
function print(x, y){
	var i, j;
	for(i=x, j=y; prev[i][j].d!=-1; i=prev[x][y].x, j=prev[x][y].y){
		ady[i][j]='*'; x=i; y=j;
	}
	console.log("Camino con el menor numero de pasos\n");
	ady3="";
	for(i=0; i<h; ++i) {
		for(j=0; j<w; ++j){
			ady3+=ady[i][j];
			console.log(ady3);
		}
		console.log("\n");
	}
}

function BFS(x, y, h, w){ //coordenadas iniciales y dimension del laberinto
	var inicial = new Estado(x, y, 0); //estado inicial: distancia = 0
	var queue = new Array();
	queue.push(inicial);
	memset(visitado, false, sizeToContent(visitado));
	
	prev[x][y] = Estado(-1,-1,-1);
	
	while(!queue.empty()){
		var actual=queue.firstChild();
		queue.shift();
		if(ady[actual.x][actual.y]=='S'){
			print(actual.x, actual.y);
			return actual.d;
		}
		visitado[actual.x][actual.y]=true;
		for(var i=0; i<4; ++i){
			var nx = dx[i]+actual.x;
			var ny = dy[i]+actual.y;
			
			if((nx >= 0) && (nx<h) && (ny>=0) && (ny<w) && (ady[nx][ny]='#') && !(visitado[nx][ny])){
				var adyacente = new Estado( nx, ny , actual.d+1 );
				queue.push( adyacente );
				prev[nx][ny] = actual;
			}
		}
	}
	return -1;
}
BFS(1,0,h,w);
