const marvelHero = ["iron-man","spiderman","thor"]
const dcHero = ["Batman","Flash","jocker"]

// marvelHero.push(dcHero)
// console.log(marvelHero);

// const all_hro = marvelHero.concat(dcHero)
// console.log(all_hro);

const all_hero = [...marvelHero, ...dcHero] //spred operator []
// console.log(all_hero);


const allArray = [1,2,3,[2,3,4,5,[3,6,78]],2,5,7,8,[1,2,3,1]]
const all_Array = allArray.flat(Infinity)
console.log(all_Array);
