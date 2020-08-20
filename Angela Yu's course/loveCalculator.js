//Random Number Generator - Love Calculator

var n = Math.random();
n = n*6; //This will never reach 6.. This is to replicate the 6 sides of a dice roll
n = Math.floor(n) + 1; //This rounds the decimal number to single integer and + 1 is for it to reach 6 but not more than 7.
//Range from 1-6
console.log(n);

//Create 2 prompts for names of people ignore the input and calculate random number that is a percentage
var name = prompt("What is your name?");
var name2 = prompt("What is the name of your crush?")
var loveScore = Math.random() * 100; //Range of 0-99.99999999
loveScore = Math.floor(loveScore) + 1; //Range of 1-100

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%" + " You love each like Kanye loves Kanye.");
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
}
if (loveScore <=30) {
  alert("Your love score is " + loveScore + "%" + " You go together like oil and water.")
}
=
