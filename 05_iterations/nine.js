// Reduce

const myNum = [1,2,3]

const newNum = myNum.reduce((acc, currval)=>(acc + currval),0)
// console.log(newNum);


const shoping = [
    {car: "XUV 700",
     price: 1},

    {car: "XUV 500",
     price: 1},

    {car: "XUV 3XO",
     price: 1},

    { car: "XUV",
      price: 1
    },
    
]
const newShop = shoping.reduce((acc, car) => (acc + car.price),0)
console.log(newShop);
