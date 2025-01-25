let heros = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shweta = function(){
    console.log(`shweta is present in all objects`);

}

// heroPower.shweta();

heros.shweta();

//inheritance

const user = {
    name : "Shweta",
    email : "s@gmail.com"
}
const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : true 
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let another = "shweta      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

another.trueLength();
