//This is my intro to functions..

//This function calculates how many bottles of milk the robot gets with the input of how much money we gave it.

function getMilk(money) {       //i put the money inside, this is where $5 go
  var bottles = (Math.floor(money/1.5));    //each bottle costs $1.5 Math.floor rounds the number
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("I bought " + bottles + " bottles of milk with $" + money);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money%1.5;         //This says we want this function to output a number which money%1.5 that has a remainder 1
}

getMilk(5); //this says I gave my robot $5, you can put any value in here.

var change = getMilk(4); //Now this gives me a change of money of $1. We are able to store it in change variable because
console.log(change);                        //of our return function's output
