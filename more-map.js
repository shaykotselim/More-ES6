const friends =[ 'Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name:'Water-Bottle', price: 503, color: 'yellow'},
    { name:'Coffe-Bottle', price: 504, color: 'red'},
    { name:'Tea-Bottle', price: 5000, color: 'green'},
    { name:'HotPot-Bottle', price: 500, color: 'pink'},
    { name:'Jar-Bottle', price: 5, color: 'blue'},
]

const productName = products.map( product => product.name);
const productcolor = products.map( product => product.color);
const productprice = products.map( product => product.price);
console.log(productName, productcolor, productprice);