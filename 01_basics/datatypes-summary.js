/* (A) Primitive data type :-
            7 types: String,Number, Boolean, Null, Undefined, Symbol, BigInt.

(B) Reference(Non Primitive):-
            array, objects, functions.
*/


const id = Symbol("1233")
const anotherId = Symbol("1234567")
// console.log(anotherId == id)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack is used to (Primitive)-it is used to copy of decleration

// Heap is used to (Non Primitive)-it is used to reference(original value) of decleration

let myYoutubeName = "mithila_meals"

let anotherName = myYoutubeName
anotherName = "mayank"

// console.log(anotherName);


let userOne = {
    email: "mayank.kgs.live",
    upi: "1234@ybl",
}

let userTwo = userOne
userTwo.email = "kumar.m@kgs.live"

// console.log(userOne.email);
// console.log(userTwo.email);
