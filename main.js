// string, numbers, boolean, null, undefined

const name = 'Hamal';
const age = 25;

// Concatenation
console.log('My name is ' +name + ' and I am ' + age );

// Template String - ES6 new Version
console.log(`My name is ${name} and I am ${age}`);

// .length is to get a  string's length of characters
const s = "Hello world";

console.log(s.length);

// These are methods which are functions associated with an object
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); // Only first 5 characters are shown
console.log(s.substring(0, 5).toUpperCase()); // Two methods can be chained together

// Arrays - variables that hold multiple values
const t = 'technology, computers, IT';
console.log(t.split(', '));

// Tp add a value
const fruits = ['apples', 'oranges', 'banana'];
fruits[3] = 'grapes';
console.log(fruits);