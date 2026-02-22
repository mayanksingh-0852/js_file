// const instagram = new Object() // singletone object 
const instsgram = {} //none singletone user
instsgram.id= "123abc"
instsgram.name= "mayank"
instsgram.age= 25
// console.log(typeof instsgram);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);




const course = {
    courseName: "js mayank",
    price: 99,
    teacher: "riya"
}

const {price: rate} = course
// console.log(typeof rate);

// {
//     "name":"mayank",
//     "price":99,
//     "teacher": "riya"
// }

