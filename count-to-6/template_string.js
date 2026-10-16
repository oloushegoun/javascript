let variable = process.argv[2];

let result = `Bonjour, ${variable} !
Ton nom en minuscules est "${variable.toLowerCase()}".`

console.log(result);