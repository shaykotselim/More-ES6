const numbers = [ 4, 6, 8, 10];
const output2 = [];
for (const number of numbers ){
    const restult = number * 2;
    output2 .push(restult)
}
console.log(output2);


        //work of map
// 1. loop through each element
// 2. for each element call the provide function
// 3. result for each element will be stored in an  array#

const doubleIt = number => number * 2; 

// const output = numbers.map( x => x * 2);
const output = numbers.map(doubleIt)
console.log(output2);

const square = numbers.map( x => x * x)
console.log( square);