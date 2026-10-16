module.exports = function average(...args) {
    let num = 0;
    args.forEach(element => {
        num += element
    });
    let den = args.length;
    let moy = num / den;

    return moy
};
