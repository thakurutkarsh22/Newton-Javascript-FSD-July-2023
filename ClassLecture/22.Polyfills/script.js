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
