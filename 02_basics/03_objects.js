//literals

const JSuser = {
    name: "Shweta",
    age: 21,
    location: "Gujarat",
    email : "scj@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Sunday"]
}

console.log(JSuser.email);

JSuser.email = "s@gmail.com";

//if we dont want to change the email, use freeze()
//Object.freeze(JSuser);

JSuser.greeting = function () {
    console.log("Hello Jsuser");
}

 JSuser.greetingTwo = function () {
     console.log(`Hello, ${this.name}`);
 }

JSuser.greeting();
JSuser.greetingTwo();
