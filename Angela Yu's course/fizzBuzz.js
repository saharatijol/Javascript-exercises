//Array Lesson
/*Problem: Write a program that prints the numbers from 1 to 100.
  But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
  For numbers which are multiples of both three and five, print "FizzBuzz".
*/

//Create a program where everytime you run the function, an item is added into the array output = [];
//The numbers should be in increasing sequence by +1 each time the function is run.

var output = [];
var count = 1; // we need to add a number that increases by 1 and put in a container or variable to keep track of the count

// function fizzBuzz () {
//  output.push(count); // This will add 1 item in the array, output will be [1,1,1]
//  count++; // this will allow each addition to be in increasing sequence [1,2,3]
//
//     console.log(output);
// }

function fizzBuzz() {

  while (count <= 100) {

    if (count % 3 == 0 && count % 5 == 0) { //Note: it is important on how you order your if-else statements
      output.push("FizzBuzz");
    } else if (count % 5 == 0) {
      output.push("Buzz");
    } else if (count % 3 == 0) {
      output.push("Fizz")
    } else {
      output.push(count);
    }
    count++;

  }
  console.log(output)
}
