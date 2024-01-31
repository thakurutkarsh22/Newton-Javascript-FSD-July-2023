// 1. Imperative Programming Vs Declarative Progamming.

// let arr = [1, 2, 3, 4];

// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element * 2);
// }

// console.log(newArr);

// const arrayMap = arr.map((item) => {
//   return item * 2;
// });
// console.log(arrayMap);

// --------- Output questions ---------

// Question 1 .

// function foo() {
//   return "I'm the outer function";
// }

// function test() {
//   console.log(bar);
//   return foo();
//   var bar = "I'm a variable";
//   function foo() {
//     return "I'm the inner function";
//   }
// }
// console.log(test());

// undefined
// I'm the inner function

// Questions 2
// const nums = [1,2,3,4,5,6,7];
// nums.forEach((n) => {
//     if(n%2 === 0)
//       break;
//     console.log(n);
// });

// function test(n) {
//   if(n == 2) {
//     return undefined; // there is no Context of For loop and Switch. thats why error.
//   }
// }

// function abc() {
//   let arr = [1, 2, 3, 4, 5];

//   for (let i = 0; i < arr.length; i++) {
//     if (i == 2) {
//       break;
//     }

//     // It will break MY FOR LOOP

//     console.log(arr[i]);
//   }
// }

// switch (true) {
//   case 1:
//     console.log("sdas");
//     break;

//   // Break will see witch as an context and will break;
// }

// abc();

// split Matchall()

// SPLIT

// console.log("aeroplaneskyrolaugh".split("ro")); // ['ae', 'planesky', 'laugh']

// Match

// Ques 4.

// var a = 12;
// console.log(a);
// if (true) {
//   var a = 99;
//   console.log(a);
// }
// for (let i = 0; i < 1; i++) {
//   var a = 100;
//   console.log(a);
// }
// console.log(a);

// 12 99 100 100

// Ques 5 ->

// var a = 12;
// console.log(a);
// function abc() {
//   var a = 99;
//   var b = 100;
//   console.log(a);
//   console.log(b);
// }
// abc();
// console.log(a);

// 12 99 100 12
