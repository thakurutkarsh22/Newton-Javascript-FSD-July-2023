// Question: How can you Replicate API response with PROMISES with Delay of 5 seconds;

/*
// PROMISE CREATION
const pokemonServerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "pikachu",
      ability: "lightning thunder",
    });
  }, 5000);
});

// PROMISE consumption : can only happen IF PROMISE REJECT OR RESOLVE.

pokemonServerPromise.then((data) => {
  console.log(data, "pokemon data");
});

setTimeout(() => {
  console.log("after 5 sec");
}, 5000);

*/

//  ---------------- --------------- Promises are single Value ---------------

/*
// 1. PROMISE CREATION
const promise = new Promise((resolve, rej) => {
  resolve("lio");
  resolve("abc");
  resolve("def");
});

// 2. PROMISE CONSUMPTION
promise
  .then((data) => {
    console.log(data, "Promises are single Value leve 1"); // lio NO def NO ABC
  })
  .then((data) => {
    console.log(data, "Promises are single Value level 2");
  });

  OBSERVATION: we can only resolve one value only from Promise.

  */

// ------------------------ Promise are Eager -----------------

// PROMISE CREATION

/*

console.log("Start of the doom");

const fetchPromise = new Promise((resolve) => {
  console.log("inside the promise");

  // MoCking the API CALL (RESULT delay of 5 seconds )
  setTimeout(() => {
    resolve("resolved DATA");
  }, 5000);
});

console.log("Outside subscribing");

// PROMISE CONSUMPTION

fetchPromise.then((data) => console.log("handling result of : " + data));

console.log("after resolution of Promise");

*/

// ------------ SetTimeout Vs Promise -------------
// MicrotaskQueue vs MacrotaskQueue
/*
  1. Event loop ask question from the Stack (Are you empty)
  2. Event loop ask question from MICROTASK QUEUE (Promise Queue). DO you have any item ? 
    2.1 YES -> That item will be Entertained and MACROTASK QUEUE will not be entertained after that.
    2.2 NO -> THen ONLY Ill event loop will ask a question to MACROTASK QUEUE.

*/

const promise = new Promise((res) => {
  res(1);
});

setTimeout(() => {
  console.log("hello");
}, 0);

promise.then((data) => {
  console.log(data);
});

// Answer: 1 hello;
