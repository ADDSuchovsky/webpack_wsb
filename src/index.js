// import * as wsb from "./sum2"

const sum = require('./sum').sum;

// console.log(wsb.sum2(1,2))
// console.log(wsb.sum2(1,2))

let heading = document.querySelector("#demo"),
 sumValue = sum(10,50);
console.log(sumValue)
heading.innerHTML = `10 + 5 = ${sumValue}`;