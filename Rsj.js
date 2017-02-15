let c=0
function rsj(a,c){
if(c=a.length-1){
return 1;
}
else if(a.c=="false"){
return 0;
}
else{
return rsj(a,c+1)+rsj(a,c+2)+rsj(a,c+5)
}
}
