// singleton

// Object literals

const Jsuser = {
    name: "mayank",
    age: 25,
    city: "delhi",
    email: "mayank.com",
}

// console.log(Jsuser);

Jsuser.greeting = function (){
    console.log("Hello JS User");
    
}
Jsuser.greetingTwo = function (){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
