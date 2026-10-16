module.exports = function makeImportant(a = '', nbr = a.length){
    let b = ''; 
    b = '!'.repeat(nbr);
    return `${a+b}`; 
};