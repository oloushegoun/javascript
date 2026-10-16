let userArray = process.argv.slice(2);
let valeur = Math.min(...userArray);
console.log(`Le minimum de [${userArray}] est ${valeur}`)