function buildPath(p,n){
let path=[]
for(var i=0;i<n;i++){
if(Math.random()<p){
path.push(false);
}
else{
path.push(true)
}
}
return path
}

let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
