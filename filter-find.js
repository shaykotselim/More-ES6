const numbers = [ 5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);
// console.log(bigNumbers);

const products = [
    { name:'Water-Bottle', price: 503, color: 'yellow'},
    { name:'Coffe-Bottle', price: 504, color: 'red'},
    { name:'Tea-Bottle', price: 5000, color: 'green'},
    { name:'HotPot-Bottle', price: 500, color: 'pink'},
    { name:'Jar-Bottle', price: 5, color: 'blue'},
]

const expensive = products.filter(product => product.price > 500 );
console.log(expensive);

const pinki = products.find(product => product.color =='pink')
console.log(pinki);