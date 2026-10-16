let arg1 = process.argv[2];
let arg2 = process.argv[3];


function html(strings, ...values) {

    let tab = values;

    tab.forEach((element, index) => {
        let newElement = "";
        for (let i = 0; i < element.length; i++) {
            if (element[i] === '<') {
                newElement += '&lt;';
            } else if (element[i] === '>') {
                newElement += '&gt;';
            } else if (element[i] === '&') {
                newElement += '&amp;';
            } else if (element[i] === '"') {
                newElement += '&quot;';
            } else if (element[i] === "'") {
                newElement += '&apos;';
            } else {
                newElement += element[i];
            }
        }

        tab[index] = newElement;
    });
    return `${strings[0]}${tab[0]}${strings[1]}${tab[1]}${strings[2]}`;
}

console.log(html`<b>${process.argv[2]} dit</b> : "${process.argv[3]}"`);
