//This is a Leap Year Challenge Exercise
/* Write a program that works out whether if a given year is leap year.
  A normal year has 365 days, leap years have 366, with an extra day in February.

  This is how to work out whether if a particular year is a leap year:
  A year is leap year if it is evenly divisible by 4
  EXCEPT if that year is also divisible by 100
  UNLESS that year is also evenly divisible by 400

  EX. Is year 2000 a leap year?
  2000 / 4 = 500 (Leap)
  2000 / 100 = 20 (Not Leap)
  2000 / 400 = 5 (Leap) -- therefore it is a leap year

  Is year 2100 a leap year?
  2100 / 4 = 525 (Leap)
  2100 / 100 = 21 (Not Leap)
  2100 / 400 = 5.25 (Not Leap) -- therefore not a leap year
*/

function isLeap(year) {
  if (year % 4 === 0 || year % 400 === 0) {
    return ("Leap year.");
  } else if (year % 100 === 0) {
    return ("Not leap year.");
  } else if (year % 400 === 0) {
    return ("Leap Year.");
  } else {
    return ("Not leap year.");
  }
}

//Input year 2400
//Output Leap year

//Input year 1989
//Output Not Leap year
