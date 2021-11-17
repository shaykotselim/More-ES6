// declar variable based on the name of an object property
const myObeject = { x: 2, y: 50, z: 600, a: 25, b: 68}
const {x, b} = myObeject;

console.log( x, b);

// destructiring array
const [p, q] = [56, 60]
console.log( p, q);

const {fan, color } = { sky: 'blue', soil: 'mati' , color: 'blue', fan: 'yellow'} 
// console.log(fan, color);
console.log(color, fan);

const company ={ name:'Sea Beach', 
ceo:{ name:'Shaykot_Selim', id:'43500', food:'Kazu-Badam'},
web:{ work:'Website-Development', employ:'50', framework:'Next js', tec:{first:'shykot', second: 'selim'}, }
}

console.log(company.web.tec.second);