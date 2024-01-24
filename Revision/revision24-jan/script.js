/// More about Function...
// Callbacks ....
// Higher order Functions .....

// var a = 1; // Primitive
// var b = true
// var c = "abcd"

// var obj = { // Non Primitive
//   name: "utkars",
// };

// console.log("hello");
// console.log(obj, a);

// function criticalFunctoin() {
//   const a = 10;
//   const b = 20;

//   const c = a + b;
//   // logic a + b;

//   // logging "a+b" // google services console.log() google.log()
//   throw Error("Google logger Number required but you send String"); // have i done anything about this error ?

//   return c;
// }

// console.log(criticalFunctoin());

function criticalFunctoin() {
  try {
    const a = 11;
    const b = 21;

    const c = a + b;
    // logic a + b;

    // logging "a+b" // google services console.log() google.log()
    throw Error("Google logger Number required but you send String"); // have i done anything about this error ?

    return c;
  } catch (error) {
    // Handle the error gracefully..  Beautiful Page ....
    console.log("----------");
    alert(error.message);
    console.log(error);
  }
}

console.log(criticalFunctoin());
