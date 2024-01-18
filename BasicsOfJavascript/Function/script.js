console.log("functions");

// {}, []

// Function in js Is treated as FIRST CLASS OBJECTS
// I can Conclude that Function is a OBJECT ONLY

//  ---------- ------- FUNCTION Declaration ---------------

// function functionName(a, b) {
//     // a and b are PARAMETERS
//     // logic  a+ b

//     // return "1000"
// }

// ------ example -----

// function sum(a, b) {

//   console.log(a, b);
//   return a + b;
// }

// sum(1, 1); // 1

// sum("1", "1"); // "1"

// ----  conclusion: we can see functions can take any TYPE of PARAMETER (a,b) and it can return
// any type of data (1 vs "1").

// ----- java ->
// public static int sum (int a, int b) {
//     // logic

// return 1;
// return "1"; // cant return this
// }

//  NOTE: Undefined is the Default value of JS.
// function mult(a, b) {
//   const ans = a * b;

//   //   return ans;

//   return undefined;
//   // this is the line that JS adds Itself if the User or the developer has not
//   //   returned anything from the function.
// }

// console.log(mult(2, 2), "console mult"); //

//  --------- Function Expression -------------

function sum(a, b) {
  return a + b;
}

const answerSum = sum(1, 20);
console.log(answerSum, "answerSum debug declaration");

// int, boolean, string, Array, Object

// let a = function (a,b) {

//     return a + b;
// }

let sumExpression = function (a, b) {
  return a + b;
};

let answerSumExpression = sumExpression(1, 20);
console.log(answerSumExpression, "answerSumExpression debug");
