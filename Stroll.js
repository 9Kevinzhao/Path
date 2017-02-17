
function stroll(a,c){
if (c==a.length-1){
return 1
}
else if(a[c]==false){
return 0;
}
else{
return stroll(a,c+1)
}
}
