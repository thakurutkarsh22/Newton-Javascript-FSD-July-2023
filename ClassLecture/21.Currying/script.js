// function sum(a, b) {
//   return a + b;
// }

// sum(1,3) // 4

/*
  Question 1: How can I get THis Syntax ? 
  sum(1)(2) // 3

*/

// answer

// function sum(a) {
//   function innerSum(b) {
//     return a + b;
//   }
//   return innerSum;
// }

// const innerSum = sum(2);
// const answer = innerSum(3);

// const answer = sum(2)(3);

// console.log(answer, "answer");

/*

  QUESTION2: Create sum function which do the following 
    Sum(1) // 1 
    Sum(2) // 3 
    Sum(30) // 33 
*/

let prevValue = 0; // 33

function sum(a) {
  prevValue = prevValue + a;
  return prevValue;
}

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(30)); // 33

/*
  Question 3 
  Sum(1,2)(3,4)(5)(6)  // 21
  curry question 

// TODO: create a function Sum such that it supports Sum(1,2)(3,4)(5)(6) 


*/

/*
  Question 4: 
  addition(6,1,2,3,4)(1)(23, 5,6, 7)....(1).end() // 59 

  // TODO: 


*/
