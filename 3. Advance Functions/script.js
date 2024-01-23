// ---------------------- Normal Function bs Arrow Function -------------

// function sum(a, b) {
//   return a + b;
// }

// const sumFunctionExpression = function (a, b) {
//   return a + b;
// };

// const sumFunctionExpressionArraow = (a, b) => {
//   return a + b;
// };

// console.log(sum(1, 2), "normal function"); // 3
// console.log(sumFunctionExpression(1, 2), "function expression"); //3
// console.log(sumFunctionExpressionArraow(1, 2), "arrow function"); // 3

// Difference 1 Arguments
// arguments is a reserved keyword and only availabe inside NORMAL FUNCTIONS Keyword
// arguments are nothing but an ARRAY Of PARAMETERS + Something else.

// function abc(a, b) {
//   console.log(a, b, "normal things");
//   //   console.log(arguments, "arguments debug"); [1000, -1, otherthings]
//     console.log(a, arguments[0]); // 1000 1000
//     console.log(b, arguments[1]); // -1 -1
// }

// abc(1000, -1);

// const abcArrow = (a, b) => {
//   //   const arg = arguments;

//   console.log(a, b);
//   console.log(arguments);
// };

// abcArrow(10000000000000, 2000000000);

// arguments keyword doest work inside the Arrow Function.

// TODO: After we Understand This (keyword) concept

//

// ------------ How to wirte Functions Production ready code ----------

// function sum(param1, param2) {
//   try {
//     let c = param1 + param2;
//     return c;
//   } catch (e) {
//     // what ever you want to do with the error you can do.
//     console.log(e);
//   }
// }

//  -------------------- try and catch  ---------------------

// function spaceship(a, b, action) {
//   try {
//     let res;

//     if (action === "add") {
//       // loigging
//       // Google server....
//       //   throw Error("google server cannot respond addiion");
//       res = a + b;
//     } else if (action === "sub") {
//       res = a - b;
//     } else if (action === "mult") {
//       res = a * b;
//     }
//     return res;
//   } catch (error) {
//     console.log("error ------");
//     // if addtion a, b do some backuo thing....
//     console.log(error);
//   }
// }

// const result = spaceship(1, 2, "add");
// console.log("result", result);

//  ------------------- Dangerous parts of Functions ------------------

// 1. You can pass Function as Parameter
// 2. we can return Function from the Function.
// HOF

// Functions are 1st class Citizens/Objects.

// in here you are passing an Object as a Argument to Sum Function
// const param1 = {
//   marks: 1,
// };

// const param2 = {
//   marks: 200,
// };

// function sum(obj1, obj2) {
//   // Obj1 and Obj2 are Parameters
//   //

//   console.log("hello to sum function earlier");
//   console.log(obj1);
//   console.log(obj2);
//   return obj1.marks + obj2.marks;
// }

// console.log(sum(param1, param2)); // param1 and param2 are Arguments

/*
    Functions are also Objects (First class)... 
*/

// const param1 = function () {
//   console.log("param1");
// };

// const param2 = function () {
//   console.log("param2");
// };

// function sum(obj1, obj2) {
//   // obj1 and obj2 are functions and these are knows as par
//   console.log("hey there i am functon sum");
//   console.log(obj1);
//   console.log(obj2);
// }

// sum(param1, param2);

// 2. we can return function from function

// function person() {
//   let inner = {
//     name: "uttkarsh",
//     class: 12,
//   };

//   return inner;
// }

// const resutnAnswer = person();
// console.log(resutnAnswer);

// function outer() {
//   //   const inner = function () {
//   //     console.log("hey I am from innter functoin");
//   //   };

//   function inner() {
//     console.log("hey I am from innter functoin");
//   }

//   return inner;
// }

// console.log(outer());
