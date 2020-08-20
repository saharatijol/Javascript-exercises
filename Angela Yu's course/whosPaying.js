/*
Write a function which will select a random name from a list of names.
The person selected will have to pay for everybody's food bill.

Example Input:
["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output:
Angela is buying lunch today!

Hint:
-You might need to think about Array.length
*/
names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
  var randomName = names[Math.floor(Math.random() * names.length)];
  return (randomName + " is going to buy lunch today!");
}
