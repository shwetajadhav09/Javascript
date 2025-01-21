// const user = {
//     username: "Shweta",
//     login: 8,
//     signedIn: true,

//     getUserDetails: function(){
//             console.log(`Username: ${this.username} `); //for the current context of the class
//     }
// }

// console.log(user.getUserDetails());

function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

// const userOne = User("Shweta", 5, true);
// const usertwo = User("Scj", 8, false); //overrides userOne
// console.log(userOne)

//to avoid overriding -> use new keyword

const userOne = new User("Shweta", 5, true);
const userTwo = new User("Scj", 5, false);
console.log(userOne);
