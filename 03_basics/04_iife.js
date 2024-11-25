// immediately invoked function expressions (IIFE)

(function chai(){
    //named iife
    console.log("DB connected");
    
})();

// the second function will give an error if you dont put ; after the first iife.

( () => {
    // unnamed iife
   console.log("DB CONNECTED");
   
})();

( (name) => {

    console.log(`DB CONNECTED, ${name}`);
    
 })("shweta");

 