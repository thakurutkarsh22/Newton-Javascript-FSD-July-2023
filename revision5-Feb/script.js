// TODO:

// explained only scope in function declaration can u explain with expression and arrow function
// block scope and funcrtial scope
// Expression n statement.
// Integer.parseInt()// parseInt
// IIFE
// DOM and bom difference

// You do now know js

// InsertAdjacentELemtn bedorebegin, afterbegin, beforeend, afterend

/*
    Question: 

    var a = 12;

    const fun = () => {
        console.log(a)
        var a = 99
        console.log(a)
    }

    fun();

    console.log(a);


    Answer : Undefined, 99, 12

 // 1. Var takes the whole EC(execution context) space thats why it is FUNCTIONAL SCOPE / FUNCTIONAL EXECUTION CONTEXT.
// 2. let and const take little box type space inside any Execution context (that why they are block scope.).

*/

/*
    Question: is let and const are hoisted? 

    answer: yes they are (in TEMPORAL_DEADZONE).

    RULE OF TEMPORAL_DEADZONE - 
    // 1. If value is undefined and someone is trying to read it will THROW ERROR.
    // 2. If value is not undefined and someone is trying to read it will RETURN VALUE.

*/

// console.log(a); // undefined
// console.log(b); // ERROR (REFERENCE ERROR)

// var a = 99;
// let b = 100;

/*

    function Declaration 

    function abc() {

    }


    function Expression 

    const abc = function() {

    }

    arrow Function 

    const abc = () => {

    }


    Question: 

    var a = 12;
    sum()

    function sum() {
        console.log(a)
        var a = 99;
        console.log(a)
    }

    console.log(a)

    Answer - undefined, 99, 12;

//  ---------x-x-x-x-x-x-x-x-------------

    var a = 12;
    sum()

    const sum = function() {
        console.log(a)
        var a = 99;
        console.log(a)
    }

    console.log(a)

    // ERROR bec SUM is not a function DECLARATOIN it is FUNCTION EXPRESSION


*/

/*

    Question: What are IIFE ? 
    Immediately Invoked Function Expression 

*/

// var a = 12;

// (() => {
//   console.log(a);
//   var a = 99;
//   console.log(a);
//   console.log("iife");
// })();

// console.log(a);

// you can think IIFE as the below Example function abc immediately called on the next line.

// function abc() {
//   console.log("normal FUnctoin");
// }

// abc(); // command

// lot of work and wait  1 hour
