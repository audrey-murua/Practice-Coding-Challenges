
// Coding Challenge #1

/* Return the Sum of Two Numbers

Create a function that takes two numbers as arguments and returns their sum.

addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10 */

function addition (x , y) {
    return x + y;
}

console.log(addition(3,2));
console.log(addition(-3,-6));
console.log(addition(7,3));


// Coding Challenge #2

/* Return the Next Number from the Integer Passed

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2 */

function addIncrement (i) {
    return ++i;
}

console.log(addIncrement(0));
console.log(addIncrement(9));
console.log(addIncrement(-3));


// Coding Challenge #3

/* Convert Hours into Seconds

Write a function that converts hours into seconds.

howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400 */

function howManySeconds(hrs) {
    return hrs * (60 * 60);
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

// Coding Challenge #4

/* Return the Remainder from Two Numbers

There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. 
The first parameter divided by the second parameter will have a remainder, possibly zero.
 Return that value.

 remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0 */

function remainder(a, b) {
    return a % b;
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

// Coding Challenge #4

/* Write a function that takes an integer minutes and converts it to seconds.

convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120 */

function minutesToSeconds(min) {
    return min * 60;
}

console.log(minutesToSeconds(5));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(2));

// Coding Challenge #5

/* Create a function that takes voltage and current and returns the calculated power.

circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600 */

function calcPower(voltage, current) {
    return voltage * current;
}

console.log(calcPower(230, 10));
console.log(calcPower(110, 3));
console.log(calcPower(480, 20));

// Coding Challenge #6

/* Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000

function cubes(a) {
	retunr a ** 3
}*/

function cubes(c) {
    return Math.pow(c, 3);
}

console.log(cubes(3));

console.log(cubes(5));

console.log(cubes(10));

// Coding Challenge #7

/* Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720 */

function sumPolygon(n) {
    return (n - 2) * 180;
}

console.log(sumPolygon(3));

console.log(sumPolygon(4));

console.log(sumPolygon(6));