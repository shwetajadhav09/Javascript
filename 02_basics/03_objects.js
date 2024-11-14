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


//singleton

const user = {};

user.id = 123;
user.name = "Shweta"
user.isLoggedIn = false;

const regularUser = {
    email: "s@gmail.com",
    name: {
        userfullname: {
                firstname: "Shweta",
                lastname: "Jadhav"
        }
    }
}

const obj1 = {"a": 1, "b": 2};
const obj2 = {"c": 1, "d": 2};

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('isLoggedIn'));
