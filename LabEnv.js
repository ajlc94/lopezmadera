function maze(h, w){
    var i, j, x, z, c, str="";
	var temp;
	var cont=0,der=0;
	
    for(i=0; i<h; i++){
    	for(j=0; j<w; j++){
		
			if(i==0 && j==0){
				str=str+'I'; 
			} 
            x=Math.floor(Math.random()*2);
            if (x==1) str=str+'#';				
            if (x==0) str=str+' ';
			if(i==14 && j==14){
				str=str+'S'; 
			}
        }
        str=str+'\n';
    }		
	return str;
 }
 
s=maze(15,15);
console.log(s);
