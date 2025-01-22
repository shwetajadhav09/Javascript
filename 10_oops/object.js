function multiply(num){
    return num*5;
}

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25);

chai.printMe();