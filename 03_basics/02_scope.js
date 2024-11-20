let a = 100
// global scope


if(true){  //block scope
     let a = 10
     console.log("Inner : ", a);
     
}

console.log(a);
