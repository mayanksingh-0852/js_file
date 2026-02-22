new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("new promise was creted")
        resolve()
    },2000)
}).then(function(){
        console.log("new promise was done")
})

const promiseTwo = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "Mayank", email: "mayanksingh007@gmail.com"})
    },3000)    
})

promiseTwo.then(function(xyz){
    console.log(xyz);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Mayank", email:"mayank@gmail.com"})
        }else{
            reject("Error 404")
        }
    },4000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>{
    console.log("The Promise is either resolved or reject")
})

const promiseFive = new Promise((resolve , reject)=>{
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Mayank", email:"mayank@gmail.com"})
        }else{
            reject("Error: JS went wrong")
        }
    },5000)
});
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}