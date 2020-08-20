//In this challenge, you are creating a function that tells how many days, weeks and months
//we have left if we live until 90 years.

//Assume there are 365 days in a year, 52 weeks in a year and 12 months in a year

function lifeInWeeks(age) {

    /************Don't change the code above************/
  const days=365;
  const weeks=52;
  const months=12;

  var convertAgeDays=age*days;
  var convertAgeWeeks=age*weeks;
  var convertAgeMonths=age*months;

  var x=32850-convertAgeDays;
  var y=4680-convertAgeWeeks;
  var z=1080-convertAgeMonths;

  console.log('You have ' + x + ' days, ' + y + ' weeks and ' + z + ' months left.')
}

lifeInWeeks(30); // This is assuming you are 30years old


//A shorter solution:

// function lifeInWeeks( age ){ // right there
//
// var ageRemain = 90 - age;
//
// var days = ageRemain * 365;
// var weeks = ageRemain * 52;
// var months = ageRemain * 12;
//
// console.log("You have " + days + " days, " + weeks + " weeks, and " + months +  " months left.")
