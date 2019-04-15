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

// To add a value to the end or beginning, respectively
const fruits = ['apples', 'oranges', 'banana'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');

// To check if it is an array or not
console.log(Array.isArray(fruits));

//To check the index of the value
console.log(fruits.indexOf('oranges'));
console.log(fruits);

// Object literals
const person = {
	firstName: 'Hamal',
	lastName: 'Patel',
	age: 25,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: 'random road',
		city: 'London',
		country: 'UK'
	}
}

console.log(person);

// To get the full name
console.log(person.firstName, person.lastName);

// To get movies
console.log(person.hobbies[1]);

// To get the city
console.log(person.address.city);

// Arrays of objects
const todos = [
	{
	id: 1,
	text: 'Take out trash',
	isCompleted: true
	},
	{
	id: 2,
	text: 'Meeting with boss',
	isCompleted: true
	},
	{
	id: 3,
	text: 'Dentist appointment',
	isCompleted: false
	}		
];

console.log(todos[1].text); // To get 'meeting with boss'

// To convert it to JSON to send data to server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);




