var inputs = process.argv.slice(2);
var result = inputs.map((e) => e[0]).reduce((acc, e) => acc + e);
console.log(`[${inputs}] devient "${result}"`);    