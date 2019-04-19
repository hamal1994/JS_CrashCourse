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

// Object literals let us store a collection of properties. REMEMBER THE : AND ,

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

// Arrays can hold any data types, therefore they can hold objects

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

// Combining functions with objects

var favouriteRecipe = {
  recipeTitle : 'Pizza',
  servings : 5,
  ingredients : ['dough', 'tomato', 'cheese'],
  directions : 'First roll the dough into a circle and grate the cheese.'
}

function letsCook(){
  console.log(`I'm hungry! Let's cook ${favouriteRecipe.recipeTitle}`);
}

letsCook();		// Output will be 'I'm hungry! Let's cook Pizza'


// To convert it to JSON to send data to server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// while loops

let i = 0;
while(i < 10){
	console.log(`while loop number: ${i}`);
	i++;
}

// x can be anything
for(let x of todos){
	console.log(x.text);
}

// .length is how many things are in an array
var favouriteFoods = ['chicken', 'lamb', 'rice'];
for (var i = 0; i< favouriteFoods.length; i++){
  console.log(favouriteFoods[i]);	// This will list all the items in the array
}

// Objects can also hold functions.

var jolene = {
  age: 21,
  hairColor: 'Auburn',
  talk: function() {
    console.log('Hello!');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);
  }
};

jolene.talk();				// call object methods with .notation
jolene.eat('pizza');

// Loops & if statements

for (var i = 1; i <= 100; i++) {	// Count from 1 to 100
  if (i % 3 === 0) {				// This checks if the number is divisible by 3 with a remainder 0.
    console.log(' Fizz');			// Says 'Fizz' after multiples of three
  } else if (i % 5 === 0) {
    console.log(' Buzz');			// Says 'Buzz' after multiples of five
  } else {
    console.log(i);
  }
}

// Break statement

for (var i = 100; i <= 200; i++) {		// Count from 100 to 200
  console.log('Testing ' + i);

  //Stop at the first multiple of 7
  if (i % 7 === 0) {
    console.log('Found it! ' + i);
    break;    // This statement exits the loop
  }
}

// .slice

var str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));				// the first 31 characters are cut.
// expected output: "the lazy dog."

console.log(str.slice(4, 19));			// the first 19 characters are shown except for the first 4 that are cut.
// expected output: "quick brown fox"

console.log(str.slice(-4));				// the last 4 characters are displayed.
// expected output: "dog."

console.log(str.slice(-9, -5));			// the second -5 cuts out the dog.
// expected output: "lazy"

// DOM Access: By Id

<img id="kittenPic" src="http://placekitten.com/g/200/300" alt="cat"/>	/* This line of html can be found by using:
document.getElementById();  */
var imgKitten = document.getElementById('kittenPic');

// DOM Access: By Tag Name

/*<ul>
  <li>Daisy</li>		 // This line of html can be found by using document.getElementsByTagName(tagName);
  <li>Tulip</li>
</ul>
*/

var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++) {
  var listItem = listItems[i];
}

// Newer browsers can get classname or cssselectors

document.getElementsByClassName(className);
document.querySelector(cssQuery);
document.querySelectorAll(cssQuery);

// getElement vs. getElements

document.getElementById('uniqueID'); 							// getElement returns a single node

document.getElementsByTagName('p'); 							// getElements returns multiple nodes
var specificParagraph = document.getElementsByTagName('p')[2];	// To modify a single node, you will need to use bracket notation to get the correct one

// To change DOM Nodes e.g. id's or classes

<img id="kittenPic" src="http://placekitten.com/g/200/300" alt="cat"/> 

var imgKitten = document.getElementById('kittenPic');

// will return src attribute on image
imgKitten.src

// We can now set our src to a new src
imgKitten.src = 'http://placekitten.com/g/600/500';

// DOM Nodes: Getting and Setting Attributes

<img id="kittenPic" src="http://placekitten.com/g/200/300" alt="cat"/>

var imgKitten = document.getElementById('kittenPic');

// will return src attribute on image
imgKitten.getAttribute('src');

// will set our src to a new src
imgKitten.setAttribute('src', 'http://placekitten.com/g/600/500');

// DOM Nodes: Styles

var pageBody = document.getElementsByTagName('body')[0];		// This is targeting the body
pageBody.style.color = 'red';									// The .style.color can be used to change the body's color
// It's basically the same as doing this:
body {							// CSS
  color: red;	
}

// The rule of thumb in JavaScript is to change CSS styles from "-" to camelCase

// Example:
body {							// CSS
  background-color: pink;
  padding-top: 10px;
}
// Use this JS:
var pageBody = document.getElementsByTagName('body')[0]
pageBody.style.backgroundColor = 'pink';					//These are camelcased now compared to above
pageBody.style.paddingTop = '10px';							//

// DOM innerHTML

//The entire body can be overwritten, for example:
var pageBody = document.getElementsByTagName('body')[0];
pageBody.innerHTML = '<h1>Oh Noes!</h1><p>I changed the whole page!</p>'		// The whole page's body will be this now

pageBody.innerHTML += '...just adding this at the end of the page.';			// Or just add some new content to the end















