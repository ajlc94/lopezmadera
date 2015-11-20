Class Estado extends System.ValueType{
	var x : int;
	var y : int;
	var d : int;
	
	public function Estado(x:int, y:int, d:int){
		this.x=x;
		this.y=y;
		this.d=d;
	}
	public function Estado(){
		this.x=0;
		this.y=0;
		this.d=0;
	}
}

var MAX=100;
var ady = new array[MAX][MAX]; 
var visitado = new array[MAX][MAX];
var dx = new array(0,0,1,-1);
var dy = new array(1,-1,0,0);
var h, w;
	

Estado prev[MAX][MAX];
mat
print(x, y){
	var i, j;
	for(i=x, j=y; prev[i][j].d~=-1; i=prev[x][y].x, j=prev[x][y].y){
		ady[i][j]='*'; x=i; y=j;
	}
	console.log("Camino con el menor numero de pasos\n");
	for(i=0, i<h, ++i){
		for(j=0, j<w; ++j;){
			console.log(ady[i][j]);
		}
		console.log("\n");
	}
}

BFS(x, y, h, w){
	Estado inicial(x, y, 0);
	queue<Estado> Q;
	Q.push(inicial);
	memset(visitado, false, sizeToContent(visitado));
	
	prev[x][y]=Estado(-1,-1,-1);
	
	while(!Q.empty){
		Estado actual=Q.firstChild();
		Q,pop();
		if(ady[actual.x][actual.y]=='S'){
			print(actual.x, actual.y);
			return actual.d;
		}
		visitado[actual.x][actual.y]=true;
		for(var i=0, i<4, ++i){
			var nx=dx[i]+actual.x;
			var ny=dy[i]+actual.y;
			
			if(nx>=0 && nx<h && ny>=0 && ny<w && ady[nx][ny]='o' && !visitado[nx][ny]){
				Estado adyacente( nx, ny , actual.d+1 );
				Q.push( adyacente );
				prev[nx][ny] = actual;
			}
		}
	}
	return -1;
}
