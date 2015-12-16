var LabEnv = function(estado){
    this.estado = {
        d=0;
        x=0;
        y=0;

    }
    this.acciones = ["izquierda","Derecha","Arriba","Abajo"];
}


LabEnv.prototype.maze=function(h,w){
   
    var i, j, x, z, c, str="";
	var temp;
	var cont=0,der=0;
	
    for (i=0; i<w; i++){
        str=str+'#';
    }
    str=str+'\n';
    for(i=1; i<(h-1); i++){
    	for(j=0; j<w; j++){
            if(i==1&&j==0){
                str=str+'I';
            }else{
                if(i==(h-2)&&j==(w-1)){
                    str=str+'S';
                }else{
                    if(i==1&&j==1){
                        str=str+' ';
                    }else{
                        if(i==(h-2)&&j==(w-2)){
                            str=str+' ';
                        }else{
                            if (j==0||j==(w-1)){
                                str=str+'#';
                            }else{
                                x=Math.floor(Math.random()*5);
                                if (x==0) {str=str+'#';} else {str=str+' ';}
                            }
                        }
                    }
                }
            }
        }
        str=str+'\n';
    }
    for (i=0; i<w; i++){
        str=str+'#';
    }
    str=str+'\n';

	return str;
 }
 
s=maze(20,40);
console.log(s);
