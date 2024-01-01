const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = [...str];
    let n = [];
    let arr = result.map(function(element) {
        if (element.toUpperCase() == element){
            n.push(element.toLowerCase())
        }else {n.push(element.toUpperCase())}
    });
    console.log(n.join(''));
});