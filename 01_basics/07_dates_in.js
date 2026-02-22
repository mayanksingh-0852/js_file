let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// Date typesof Object

// let myDate2 = new Date (2024,2,19,13,33)
let myDate2 = new Date ("2023-12-15")
// console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate2.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);


newDate.toLocaleString("default",{
    weekday: "long"
})

console.log(newDate);
