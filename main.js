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

<ul>
  <li>Daisy</li>		   ////This line of html can be found by using document.getElementsByTagName(tagName);////////
  <li>Tulip</li>
</ul>


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

// DOM Nodes: Getting and Setting Attributes, changing an image to a new one

<img id="kittenPic" src="http://placekitten.com/g/200/300" alt="cat"/>

var imgKitten = document.getElementById('kittenPic');

// will return src attribute on image
imgKitten.getAttribute('src');

// will set our src to a new src
imgKitten.setAttribute('src', 'http://placekitten.com/g/600/500');

// DOM Nodes: Changing the Styles with

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

//The entire body can be replaced or new content can be added, for example:
var pageBody = document.getElementsByTagName('body')[0];
pageBody.innerHTML = '<h1>Oh Noes!</h1><p>I changed the whole page!</p>'		// The whole page's body will be this now
pageBody.innerHTML += '...just adding this at the end of the page.';			// Or just add some new content to the end

// HTML:
<ul>
    <li>Nickname:
      <span id="nickname"></span>
    </li>
</ul>

// JS:
document.getElementById('nickname').innerHTML = 'Hamz';

// Outcome:
Nickname: Hamz


// You can also target one specific element's content
<p id="warning"></p>
// To add content to the above paragraph use this:
var warningParagraph = document.getElementById('warning');

warningParagraph.innerHTML = 'Danger Will Robinson!';

// Creating New Nodes

var pageBody = document.getElementsByTagName('body')[0];

// create our image tag with attributes
var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/g/500/200';
newImg.style.border = '1px solid black';

// add our image to the body
pageBody.appendChild(newImg);

// create a paragraph tag with content
var newParagraph  = document.createElement('p');
var paragraphText = document.createTextNode('Squee!');
newParagraph.appendChild(paragraphText);  // Adds the paragraph text to the paragraph element

// add our new paragraph to the body
pageBody.appendChild(newParagraph);

// Events

// An event is an object that is sent when a user interacts with the webpage, for example JS creates a event when a user clicks an element
element.addEventListener('click', function(event) {
  // code to be executed when user clicks
});

//common types of events:
click: Occurs when the user clicks on an element
mouseover: Occurs when the pointer is moved onto an element
mouseout: Occurs when the pointer is moved off an element
keyup: Occurs when the user releases a key
load: Occurs when a document has been loaded
focus: Occurs when an element gets focus
blur: Occurs when an element loses focus

// Functions can be called directly from html:
<button id="myBtn" onclick="sayHi()">Click Me!</button>   //enter onclick="" in the html to call the function

function sayHi (event) {
  alert('Hi!');
};

// You can call a function from the addEventListener:
<button id="myBtn">Click Me!</button>
var button = document.getElementById("myBtn");

button.addEventListener("click", function (event) {
  alert("Hi!");
});
or

var button = document.getElementById("myBtn");

var sayHi = function (event) {
  alert("Hi!");
};

button.addEventListener("click", sayHi);

// Preventing Defaults

// the event object has a built-in method to prevent the default behavior
<a id="myLink" href="https://www.girldevelopit.com">GDI</a>  

// This code means that when you click on the link, it will not work
var link = document.getElementById("myLink");

link.addEventListener("click", function(event) {
  event.preventDefault();
}); 

// currentTarget

// The event's currentTarget references the element the event listener was attached to.
<button id="myBtn">Click Me!</a>

// Once the link is clicked on, it should change its style to this:
var myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function(event) {
  btn = event.currentTarget;

  btn.style.backgroundColor = 'red';    
  btn.innerHTML = 'Clicked!';
});

// Forms

// You can collect information from users to use in your code. The most common method is an HTML form
<form id="userForm">
  <label for="name">First Name:</label>
  <input type="text" id="firstName"/>
  <input type="radio" name="married" value="Yes" checked /> Yes
  <input type="radio" name="married" value="No" /> No
  <input type="submit" id="submitBtn" value="Submit" />
</form>

// You retrieve the values of form elements using the value method.
var name = document.getElementById('firstName').value;
console.log(name);
// You can retrieve the value of a form at any time. Even when an event like blur is triggered (when a form element loses focus).

// Radio Buttons

// Radio buttons usually do not have IDs, so you will need to use a for loop to get the value on each radio:
var radios = document.getElementsByName('married');

var length = radios.length;

for (var i = 0; i < length; i++) {
  if (radios[i].checked) {
    var radioButtonValue = radios[i].value;
    // only one radio can be checked, so stop now
    break;
  }
}

// Submit buttons

// If you are going to retrieve form values with the submit button, be sure to prevent the default action!
var submitButton = document.getElementById('submitBtn');

submitButton.addEventListener("click", function(event) {
  event.preventDefault();       // Default action is prevented

  var name = document.getElementById('firstName').value;
  console.log(name);
})

// The Math.floor() function returns the largest integer less than or equal to a given number:

console.log(Math.floor(5.99));
// expected output: 5
console.log(Math.floor(5.05));
// expected output: 5
console.log(Math.floor(5));
// expected output: 5
console.log(Math.floor(-5.05));
// expected output: -6
