// ---------- POLLYFILLS ------------------------

//

// 1. myMap

// Why I am doing this
// Answer: So that Every array that is Created has myMap method in PROTOTYPE.

// STEPS to CONSIDER
// 1.  Crete a function with the name of YOUR lIKING (myMap).
// 2. Think about the PARAMETERS IT WILL TAKE (callBackFun) .
// 3. THINK ABOUT the output (in my CASE map give a new Array back).

// NOW after these basic Steps think about the CORE LOGIC
// 1. Map needs to do a for loop around the Array
// -> so think about how to GET THE ARRAY  HINT: -> (this);

/*
function myMap(callBackFun) {
  // context -> this -> [1,2,3,4]

  let ansArray = [];

  const array = this;

  for (let i = 0; i < array.length; i++) {
    const item = array[i]; // 3
    const answer = callBackFun(item, i, array); // 6

    ansArray.push(answer);
  }

  return ansArray;
}

Array.prototype.myMap = myMap;

const array = [1, 2, 3];

const myMapAnswer = array.myMap((item, i, array) => {
  return item * 2;
}); // [2, 4, 6]

console.log("my map answer", myMapAnswer, array);

let arr = [1, 2, 3, 4, 5];

const doubleArray = arr.map((item, index, array) => item * 2);

// // const doubleArray = [12, 3, 4, 5].myMap((item) => item * 3);

// console.log(doubleArray, arr);


*/

//2.  My Filter

/*
const filterdArray = arrayarr.filter((item) => item > 4); // [5,6,7,8,9]

console.log(filterdArray, arrayarr, "NORMAL FILTER FUNCTION ");

const arrayarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function MyFilter(callbackFun) {
  // context -> this -> arr
  let asnwerArray = [];

  const array = this;

  for (let i = 0; i < array.length; i++) {
    const item = array[i]; // 5
    const answer = callbackFun(item, i, array); // true | false

    if (answer) {
      asnwerArray.push(item);
    }
  }

  return asnwerArray;
}

Array.prototype.MyFilter = MyFilter;

const myFilteredArr = arrayarr.MyFilter((item) => {
  return item > 4;
}); // [5,6,7,8,9]

console.log(arrayarr, myFilteredArr, "my filter");
*/

// 3. Push (you can mek for POP, shift and Unshift)

/*
function myPush(value) {
  // context -> this -> arr

  const array = this;

  const n = array.length;

  array.splice(n, 0, value);

  return array.length;
}

Array.prototype.myPush = myPush;

const arr = [1, 2, 3, 4, 5];

const updatedLength = arr.myPush(16); // call site
arr.myPush(70);

console.log(updatedLength);
console.log(arr, "updated arrays");

*/

// 4. Reduce.

// EXAMPLE 1:
// let arr = [1, 2, 3, 4, 5];

// let count = arr.reduce((prev, currentValu) => {
//   return prev + currentValu;
// }, 100);

// let count = arr.reduce((prev, currentValu) => {
//   return prev + currentValu;
// });

/*

function myReduce(callbackFunction, initialValue = 0) {
  const array = this;

  let prevValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    let returnVal = callbackFunction(prevValue, currentValue);

    prevValue = returnVal;
  }

  return prevValue;
}

Array.prototype.myReduce = myReduce;

let count2 = arr.myReduce((prev, currentValu) => {
  return prev + currentValu;
}, 100);

console.log(count, "count ");
console.log(count2, "count 2");

*/

// EXAMPLE 2:

const students = [
  { name: "utkarsh", marks: 400 },
  { name: "arun", marks: 480 },
  { name: "ankit", marks: 200 },
];

// Question get the total marks of the student with reduce function
// 1080

// const totalMarks = students.reduce((prev, current) => {
//   return prev + current.marks;
// }, 0);

const totalMarks = students.reduce((prev, current) => {
  return prev + current.marks;
});

console.log(totalMarks, "total marks"); // {total: 500}

// FINAL MY REDUCE FUNCTION: PLEASE SEE THIS........

function myReduce(callbackFunction, initialValue) {
  const array = this;

  let prevValue;
  let i = 0;

  if (initialValue !== undefined) {
    prevValue = initialValue;
  } else {
    prevValue = array[0];
    i++;
  }

  for (i; i < array.length; i++) {
    const currentValue = array[i];
    let returnVal = callbackFunction(prevValue, currentValue);

    prevValue = returnVal;
  }

  return prevValue;
}

Array.prototype.myReduce = myReduce;

const totalMarks2 = students.myReduce((prev, current) => {
  return prev + current.marks;
}, 0);

console.log(totalMarks2, "total marks 2"); // {total: 500}

const total1 = [1, 2, 3].myReduce((prev, current) => {
  return prev + current;
});
const total2 = [1, 2, 3].myReduce((prev, current) => {
  return prev + current;
}, 0);

console.log("totoal 222222", total2);
console.log("totoal 111111 ", total1);

// ----------------------------- Debouncing -------------------------\\

// ----- unoptimized Solution

const inputBoxElement = document.getElementById("inputBox");

function fetchSuggestions(event) {
  const value = event.target.value;

  fetch("google.com", {
    method: "POST",
    body: JSON.stringify(value),
  });

  console.log(value);
}

// inputBoxElement.addEventListener("input", fetchSuggestions);
// inputBoxElement.addEventListener("input", (event) => {});

// Optimized solution

// lets create a debouncing function

// callBackFunction = fetchSuggestions;

/*
function debounce(callBackFunction, delay) {
  let timerNumber;

  function outputFunction(event) {
    // clear the old timer (AbC)
    clearTimeout(timerNumber);

    // set the new timer  (ABCD)
    timerNumber = setTimeout(() => {
      callBackFunction(event);
    }, delay);
  }

  return outputFunction;
}

const betterFetchSuggestions = debounce(fetchSuggestions, 2000);

inputBoxElement.addEventListener("input", betterFetchSuggestions);

*/

// 2 things we understood by this
// debounce function takes 2 parameters inside it (fn, time)
// returns a function itself.

// ---------- THROTTLING --------------

function fireBullet(event) {
  console.log("FIRE");
}

// inputBoxElement.addEventListener("input", fireBullet);

/*
function throttling(callback, delay) {
  let flag = true;

  function outputFunction(eventObject) {
    if (flag) {
      callback(eventObject); // fire function
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  }

  return outputFunction;
}

const throttledFireBullet = throttling(fireBullet, 1000);

inputBoxElement.addEventListener("input", throttledFireBullet);

*/
