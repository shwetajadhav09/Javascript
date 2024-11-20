function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("E");
    console.log("T");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


//rest operator
function calculateCartPrice(...num){
    return num;
}

function calculateCartPriceone(val1, val2, ...num1){
    return num1 ;
}
console.log(calculateCartPrice(100,200,300))
console.log(calculateCartPriceone(100,200,300,1000))


const user ={
    username : "Shweta",
    price: 2000
}

function handleObject(obj){
    console.log(`The username is ${obj.username} and the price is ${obj.price}`);
    
}

// handleObject(user);
handleObject({
    username: "SHweta",
    price: 999
})
