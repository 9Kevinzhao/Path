//Your code below
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

function rsj(a,c){
  if (c==a.length-1){
  return 1;
}
  else if(a[c]==false){
return 0;
}
  else if(c>=a.length-1){
    return 0
  }

else{
return rsj(a,c+1)+rsj(a,c+2)+rsj(a,c+5)
}
}

//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
