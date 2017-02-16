function buildPath(p,n){
let path=[]
for(var i=0;i<n;i++){
if(Math.random()<p){
path.push("false");
}
else{
path.push("true")
}
}
return path
}
console.log(buildPath(0.5,8))
