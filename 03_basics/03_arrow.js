const user = {
    username : "Shweta",
    price: 99,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to this website`);   //this refers to the current context
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()

// const chai = function() {
//     let username = "shweta"
//     console.log(this.username);
    
// }

const chai = () => {
   let username = "shweta"
   console.log(this);
   
}

chai();

const addTwo = (num1, num2) => num1+num2;

console.log(addTwo(4,3));
