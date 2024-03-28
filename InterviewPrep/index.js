/*
    Question 1: 

    console.log(a)
    var a =  12

*/

// TODO: ------ ONCE BASIC JS COMPLETED THEN FOLLOW THIS (SIDE BY SIDE).

// TODO: Resource on CS for 0 to 1.

// ADVANCE COERSIOIN : https://javascript.info/object-toprimitive

// QUESTION 1:
/*
var a = 10;

if (true) {
  var a = 99;
  console.log(a, "ans 1");
}

function abc() {
  console.log(a, "ans 2");
  var a = 12;
  console.log(a, "ans 3");
}

abc();

console.log(a, "ans 4");

// 99 undefined 12 99
*/

// Quesiton 2:

/*
let a  = 12;

console.log(a)

if(true) {
    let a = 99;
    console.log(a)
}

console.log(a);

*/

/*

fun();

const fun = function () {
  console.log("abc fun");
};

sum();

function sum() {
  console.log("hello");
}
*/

// MIN question to understand Parsing in JS is 10 (CREATE DIAGRAM WITH HAND).

// GARBAGE COLLECTION: https://javascript.info/garbage-collection

// IN TEH END complete Javascript.info  DONT PICK(generator and Regex).

//  ---------------- REVISION 2 ---------------------

// JSON.stringify ->

// JSON.parese ->

// ----- output ------

//------Normal Function, Arrow Function in Object--------------

var person = {
  age: 28,
  greet1: function () {
    console.log("greet 1", this);
    console.log("greet 1", this.age);
    function greet2() {
      console.log("greet 2", this);
      console.log("greet 2", this.age);
    }
    const greet3 = () => {
      console.log("greet 3", this);
      console.log("greet 3", this.age);
    };
    greet2();
    greet3();
  },
};

let person1 = {
  age: 50,
};

person.greet1.call(person1);
person.greet1();
