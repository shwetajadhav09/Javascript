let a = 100
// global scope


if(true){  //block scope
     let a = 10
     console.log("Inner : ", a);
     
}

console.log(a);

function one(){
     const username = "hitesh"
 
     function two(){
         const website = "youtube"
         console.log(username);
     }
     // console.log(website);
 
      two()
 
 }
 
 // one()
 
 if (true) {
     const username = "hitesh"
     if (username === "hitesh") {
         const website = " youtube"
         // console.log(username + website);
     }
     // console.log(website);
 }
 
 // console.log(username);
 
 
 // ++++++++++++++++++ interesting ++++++++++++++++++
 
 
 console.log(addone(5))
 
 function addone(num){
     return num + 1
 }
 
 
 
 addTwo(5)
 const addTwo = function(num){
     return num + 2
 }
