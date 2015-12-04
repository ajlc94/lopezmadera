

function Estado(x, y, d){
	this.x=x;
	this.y=y;
	this.d=d;
}

var MAX=100;
var ady = new Array(MAX,MAX); 
var visitado = new Array(MAX,MAX);
var dx = new Array(0,0,1,-1);
var dy = new Array(1,-1,0,0);
var h, w;
	

var prev = new Estado(MAX,MAX);
function print(x, y){
	var i, j;
	for(i=x, j=y; prev[i][j].d!=-1; i=prev[x][y].x, j=prev[x][y].y){
		ady[i][j]='*'; x=i; y=j;
	}
	console.log("Camino con el menor numero de pasos\n");
	for(i=0; i<h; ++i) {
		for(j=0; j<w; ++j){
			console.log(ady[i][j]);
		}
		console.log("\n");
	}
}

function BFS(x, y, h, w){
	var inicial=new Estado(x, y, 0);
	var queue=[];
	queue.push(inicial);
	memset(visitado, false, sizeToContent(visitado));
	
	prev[x][y]=Estado(-1,-1,-1);
	
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
			
			if((nx >= 0) && (nx<h) && (ny>=0) && (ny<w) && (ady[nx][ny]='o') && !(visitado[nx][ny])){
				var adyacente = new Estado( nx, ny , actual.d+1 );
				queue.push( adyacente );
				prev[nx][ny] = actual;
			}
		}
	}
	return -1;
}

