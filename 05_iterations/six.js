// const coding = ["C++","C","HTML","CSS","JS"];

// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(value);


const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.filter((num)=>{
    return num <8
})
// console.log(newNum);


const may = [1,2,3,4,5,6,7,8,9]

const newMay = may.filter((item) => (item > 4))
// console.log(newMay);


const books= [
    {title: "Book One", genre: "History", publish: 1999, edition: 2010},
    {title: "Book Two", genre: "Science", publish: 1992, edition: 2011},
    {title: "Book Three", genre: "History", publish: 1949, edition: 2010},
    {title: "Book Four", genre: "Science", publish: 1969, edition: 2011},
    {title: "Book Five", genre: "Maths", publish: 1979, edition: 2012},
    {title: "Book Six", genre: "Geography", publish: 1999, edition: 2013},
    {title: "Book Seven", genre: "Maths", publish: 1979, edition: 2012},
    {title: "Book Eight", genre: "Geography", publish: 1992, edition: 2013},
    {title: "Book Nine", genre: "Arts", publish: 1949, edition: 2014},
    {title: "Book Ten", genre: "Arts", publish: 1989, edition: 2015},
]
// console.log(books);

let userBooks = books.filter((bk) => (bk.genre === "Arts"))
 userBooks2 = books.filter((bk) => {bk.publish < 1999
    return bk
})
console.log(userBooks);
