// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("wow 5 was print");
    }
    // console.log(element);      
}

// -----------------------------------------------------------------------------

for (let i = 0; i <= 10; i++) {
    // console.log(`"Tabel of ${i}`);cls

    
    for(let j= 0; j<= 10; j++){
        // console.log(`"inner loop ${j}and ${i}`);
        // console.log(`${i}*${j}= ${i*j}`);
    }
}

// --------------------------------------------------------------------------
let myArr = ["Mayank","Priyank","Riya"]

for(let i = 0; i < myArr.length; i++){
    const jar = myArr[i]
    // console.log(jar);
}

// ----------------------------------------------------------------
// Break And Continue

// for (let index = 1; index <=20; index++) {
//     if (index == 5) {
//         console.log("Deceted 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log("Deceted 5");
        continue
    }
    console.log(`Value of i is ${index}`);
}