const numbers = [3, 45, 45, 32, 76, 45]
console.log(numbers.length);
const fruits = ['Kola', 'Apel', 'Tormuj', 'Jam', 'Lebu' ];
console.log(fruits);
console.log(fruits[2]);

fruits[1] = 'Jambura';
console.log(fruits);

const destinations = ['bankok', 'bali', 'ladakh']
destinations.push('bandorban');
console.log(destinations);
destinations.push('rangamati', 'kaptai');
console.log(destinations);
let pop1 = destinations.pop();
let pop2 = destinations.pop();
console.log(destinations);
destinations.shift();
console.log(destinations);
destinations.unshift('kashmir');
console.log(destinations);
console.log(pop1, pop2)