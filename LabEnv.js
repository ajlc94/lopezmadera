function maze(h, w){

    var i, j, x, z, c, str="";
	var temp;
	var cont=0,der=0;
	
    for (i=0; i<w; i++){
        str=str+'#'
    }
    str=str+'\n';
    for(i=1; i<h; i++){
    	for(j=0; j<w; j++){
            if (j==0||j==(w-1)){
                str=str+'#';
            }else{
                x=Math.floor(Math.random()*4);
                if (x==0) str=str+'#'; else str=str+' ';
            }
        }
        str=str+'\n';
    }
    for (i=0; i<w; i++){
        str=str+'#'
    }
    str=str+'\n';  		
	return str;
 }
 
s=maze(10,10);
console.log(s);
