// 1.const & let variable

const hubby = 'Omor Sani';
// const phone = 'iPhone 12 pro';
let phone = 'iPhone 12 pro';
phone = 'Samsung Galaxy S18';


// 2. Defolt paramaters

function maxNumber(array = []){
    const max = Math.max (...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3.Declare `` tamplate strirng
const myNotes = `Hello Guyes! This is ${hubby} hubby of Mousumi.`
console.log( myNotes);

// 4.Arrow function
const square = x => x * x;
const add = x=> x + x;

console.log(square(8), add(8));