// ---- ----------- Variable Naming -------------------

// Variable Name  CAN NEVER START WITH A NUMBER.
// Variable Name can HAVE number in Between Or In the END

// const 1num -> this is illegal
// const 10 = "asasd" -> this is also illegal

// const num1 -> this is good
// const nu1mmmm -> this is also Good.

// ------ ---------------------- VARIABLE -------------------------

// Let Const Var

// let num = 12;
// num = 10000000; // this is allowed
// console.log(num);
// let names = "utkarsh";

// let char = "c";
// let decision = true;

// console.log(num, names, char, decision);

// Old Js -> before Es-6 Ecma Script Before 2015

// var name = "akash";
// var id = 1;
// var decision = true;
// var ch = "c";

// console.log(name, id);

// new Js After ES6 After 2015

// const name = "utkrsh";
// name = "asdasdas"; // this is illegal. You cannot re assign const..
// const name; // this is also illegal

// console.log(name, "names debug");

// NOTE: It means JS is not a strictly Typed Language like JAVA.

//  ----- Destructuring variable declaration and assignement.

// let a = 12;

// this line can be converted to 2 steps.
// let a; // varaible declaration.
// a = 120000; // variable assignment;

// console.log(a, "a debug");

//  ------------------------------- String Literal --------------------

// var score = 115;

// // magic

// const commentary = ` Hey India's score is ${score} Enjoy!!!`;
// const scoreBoard = `  ${score} Enjoy!!!`;
// const popupButton = ` Score is  ${score} Enjoy!!!`;

// console.log(commentary);
// console.log(scoreBoard);
// console.log(popupButton);

//  ----- --------- Data Types -----------------

// 1 - Number;

// let num = 1;
// let marks = 12.5;

// console.log(marks);

// console.log(1 / 0); // Infinity

// // 2 - BigInt

// var bigInt = 12312312312312312312312312312;

// // 3 - String

// var name = "utkrsh";
// ("");
// let school = "Kiit world school ${bigInt}";
// let cha = "c"; //. this is a string unlike JAVA

// let score = `Yes !! to variable things ${bigInt}`;

// console.log(name, school, cha, score);

// // NOTE - Character is in Java but not in Javascript.

// // 4 - Boolean

// let isNameChecked = false;
// let isSunHot = true;

// // 5 - null

// let age = null;
// console.log(age, "age devug");

// // 6 - undefined (JS gives a default Value to the variables)

// let person;

// console.log(person, "person debug");

//  ----------------- Interaction ----------------------
// 1. Console.log
// console.log("hello console");

// // 2. alerts
// alert("helloa how are y");

// -----------------------------  typeOf Keyword ----------------------

// const marks = 12;
// console.log(typeof marks); // number

// const place = "delhi";
// console.log(typeof place); // string

// const bigNumber = 12312312312312312312312312312312;
// console.log(typeof bigNumber); // number

// const bool = true;
// console.log(typeof bool); //boolean

// let weather;
// console.log(typeof weather); // undefined

// let school = null;
// console.log(typeof school); // it should have been null BUT THERE IS A BUG IN JS so its answer is "Object"

// --------------------------- Type Conversion (Coersion) -------------------

// ---------- String Conversion

// Rule 1 -> String + Number(int) = String;
// String + boolean = String;
// String + String = String;
// String + bigInt = String;
// String + null = String;

// String + ANything = String;

// var numberPlusString = 1 + "hello";
// const booleanPlusString = true + "hello";
// let nullPlusString = null + "hello";
// console.log(numberPlusString);
// console.log(booleanPlusString);
// console.log(nullPlusString);

// Rule 2 - String(anything) = string
// const numString = String(1);

//  ----------- Number Conversion

// 1. String-Number to a Number ;

// const marks = "12";
// console.log(+marks); // 12 // DO not use this +, it works but it is bad for Code readibility.
// console.log(Number(marks)); // 12

// const anyRandomString = "12abcd";
// console.log(Number(anyRandomString)); // Nan // You cannot convert every STRING to a number (that dosent makes sense).

// const mult = "3" * "3"; // 9
// const minus = "3" - "3"; // 0
// const division = "3" / "3"; // 1
// const modulus = "3" % "3"; // 0

// // NOTE -> Example of String + string = string
// const addition = "3" + "3"; // "33"

// // + -> Concatination, Addition
// + -> when there is a string + means Concatination and NOT Mathematical Addition (By default).

// console.log(mult, minus, division, addition, modulus); // 9 0 1 '33' 0

//  ------------- Boolean Conversion

// Number -> Boolean
Boolean(0); // false
Boolean(1); // true
Boolean(100); // true

// Boolean(anyNumber Except 0) // Give True

// String -> Boolean

Boolean(""); // false
Boolean("1"); // true

// Boolean(any length of string except 0) // Give True./
