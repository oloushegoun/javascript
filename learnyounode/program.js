let args = process.argv.slice(2)
let total= 0;
for(i = 0; i< args.length; i++){
    total = total + Number(args[i])
}
console.log(total)