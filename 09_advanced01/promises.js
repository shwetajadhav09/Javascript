const promise = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    }, 1000)
})

promise.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chaiaurcode@ex.com"})

    },1000)
})

promise2.then(function(user){
    console.log(user);
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promise3.
then((user) => {
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('promise is either resolved or rejected')
})
