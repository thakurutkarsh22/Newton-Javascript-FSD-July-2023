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

// function sum(a, b) {
//   return a + b;
// }

// const answerSum = sum(1, 20);
// console.log(answerSum, "answerSum debug declaration");

// int, boolean, string, Array, Object

// let a = function (a,b) {

//     return a + b;
// }

// let sumExpression = function (a, b) {
//   return a + b;
// };

// let answerSumExpression = sumExpression(1, 20);
// console.log(answerSumExpression, "answerSumExpression debug");

// ------- Functions with Varibales .......
// This concept is true for both Function expression and declaration.

// let c = 13;

// function sum(a, b) {
//   return a + b + c;
// }

// console.log(sum(1, 2));

// ------ Function with Default value
// This concept is true for both Function expression and declaration.

// function sum(a, b = 0) {
//   console.log(a, b, "params inside sum function");
//   return a + b;
// }

// console.log(sum(1, 100)); // 101 //

// ---------- What a function returns

// function sum() {
//     console.log("!")

//     return undefined; // JS by default returns undefined if you have not returnd anything.
// }

// console.log(sum()) // undefined

// function sum() {
//     return 1;
// }

// console.log(sum()) // 1

//  -------------------- REST OPERaTOR -----------
// Syntax = ... -> takes the value and try to merge it.

// child in a scholl what is imp
// name, standard, rollNumber
// restOfthe THings -> father name , mothername, address

// function child(name, standard, rollnumber, ...asdasdasd) {
//   console.log(name, standard, rollnumber, "importnant information"); // store in good place

//   console.log(asdasdasd);
// }

// // animesh child
// child(
//   "animesh",
//   "12",
//   1,
//   "utkarsh",
//   "anamika",
//   "3233 delhi",
//   "gun",
//   "asdas",
//   "asdasd",
//   "asdasd"
// );

// child("animesh", "12", 1);

// -----------  Pass by Value and Pass By Reference  ------------0

// Primitive -> char, bool, int, bigInt, -> Pass by value..

// let num1 = 1;
// let num2 = 2;

// function sum(a, b) {
//   a = a + 10;
//   b = b + 10;

//   return a + b;
// }

// console.log(sum(1, 2)); // 23
// console.log(sum(num1, num2)); // 23

// console.log(num1, num2); // 1, 2

//  Non Primitive -> Objects, Arays (things that are beinng created in HEAP).
// Pass by reference

// let math = {
//   marks: 100,
//   grade: "A+",
// };

// let science = {
//   marks: 90,
//   grade: "A",
// };

// // biased
// function sum(subParam1, subParam2) {
//     // sumparam1 = {marks: 100, grade: "a" }
//   // 2014 -> 6060
//   subParam1.marks = 60;
//   subParam2.marks = 70;

//   const marks1 = subParam1.marks;
//   const marks2 = subParam2.marks;

//   return marks1 + marks2;
// }

// console.log(sum(math, science)); // 130

// console.log(sum(math.marks, science.marks)); // 100 90

// ---------- ----- SPREAD OPERATOR --------
// Syntax = ...

// spread operator takes all the inside values of the OBJECT (arrays, Object) and SPREAD it out.

// const arr = [1, 2, 3, 4, 5]; // abc@123

// const arrCopy = [...arr]; // abc@124

// console.log(arr); // [1,2,3,4,5]
// console.log(arrCopy); // [1,2,3,4,5]
// console.log(arrCopy == arr); // false
