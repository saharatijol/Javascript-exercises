//Create a greeting only using strings concatenation, slice and .toUpperCase() /
//.toLowerCase()

//Objective: Create a program where a user will enter their name and return an alert where it shows their
//name has a capitalized First character and lower case on the rest.

var name = prompt("What is your name? ");

//Isolate the first character
var firstChar = name.slice(0,1);

// Turn the first character to Uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

//Isolate rest of the name
var restOfName = name.slice(1, name.length);
//This ensures the rest of the name will be lowercase in the event the name is typed capitalzied
  restOfName = restOfName.toLowerCase();

//Joins the First character and the rest of the name
var capitalizedName = upperCaseFirstChar + restOfName;

//Returns the result by alert
alert("Hello, " +  capitalizedName);
