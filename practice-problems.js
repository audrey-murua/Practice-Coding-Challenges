
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