//Now this is more complex use of function where we 2 more functions to be executed from the first function

function getMilk(money, costPerBottle) {       //i put the money inside, this is where $5 go
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("I bought " + calcBottles(money, 1.5) + " bottles of milk with $" + money);
  //Line above says: let's find where the function called calcBottles was created and it will place the
  // startingMoney with money from (money, 1.5) and costPerBottle from 1.5 in line above and will calculate
  //number of bottles. Once it gets to the return statement of function calcBottles, this will replace the calcBottles above.
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5);//This is coming from Function 3, the output value of Function 3 will replace this line
}

// getMilk(5); //this says I gave my robot $5, you can put any value in here.

// var change = getMilk(4); //Now this gives me a change of money of $1. We are able to store it in change variable because
// console.log(change);                        //of our return function's output

//Function 2
function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney/costPerBottle);
  return numberOfBottles; //with return, now we can use it for the first function. Use this output
}

//Function 3
function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount%costPerBottle;
  return change;
}

console.log("Hello master, here is your $" + getMilk(5, 1.5) + " change");
