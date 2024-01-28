// --------------- Creation of Array ------

// const arr = [1, 2, 3, 4];
// const arr2 = new Array();

// // java ->
// // int[] arr = new int[4]

// console.log(arr, arr2);

//  ---------------------- Equating Arrays ----------------

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];

// console.log(arr1 === arr2); //false

// const arr3 = arr1;

// console.log(arr2 === arr3); // false
// console.log(arr1 === arr3); // true

//  --------------------- Operations on Array ----------------

// In-Place -> Changing the Obj on the same Address. Without creating a new Obj.

// 1. push -> In-Place

let arr = [12, 3, 4]; // abc@123

console.log(arr.push(100), "pushing new element 100"); // 4
console.log(arr, "printing after Push"); // [12, 3, 4, 100]

// 2. pop -> In-Place

console.log(arr.pop(), "Pop the last element of the array"); // 100
console.log(arr, "printing after Pop");

// 3. slice -> it returns a shallow copy of array
// This is not In-place

arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr, "before sliced array");

const slicedArray = arr.slice(0, 5);
console.log(slicedArray, "sliced array");

const slicedArray2 = arr.slice(3, 7);
console.log(slicedArray2, "sliced array");

const slicedArray3 = arr.slice(3);
console.log(slicedArray3, "sliced array");

console.log(arr, "array after slicing"); // [1, 2, 3, 4, 5, 6, 7, 8]

// 4. splice -> In-Place

// If i want to deleted 4,5,6,7
// 3 is the index of 4
// 4 is nothing but count of element from the index 3 you want to delete.
console.log(arr, "original array Before Splice");
const splicedArrray = arr.splice(3, 4);
console.log(splicedArrray, "spliced array");
console.log(arr, "original array After Splice");

// 5. Sort -> In-Place

// arr = [9, 3, 7, 4, 8, 1, 2];
// console.log(arr, "array before sorting");
// const sortedArray = arr.sort(); // O(nlogn)
// const reverseArray = arr.reverse(); //O(n)  // why this is bad ??
// console.log(sortedArray, "sorted arrray");
// console.log(
//   sortedArray == arr,
//   "see if sortedArray and original array are same"
// );

// console.log(reverseArray, "sorted reverseArray arrray");

// ------ sort function by Default Sorts a array in LEXICOGRAPHICALLY way

// TODO: get the answer for mixed sorting. ...
// arr = [
//   1,
//   20,
//   3000,
//   8,
//   305,
//   70,
//   400,
//   5000,
//   9,
//   410,
//   999,
//   90,
//   100,
//   10000,
//   10000000,
//   1000000000,
//   100000000000,
//   "A",
// ];
// arr = ["a", "baz", "asdasdasdfasdfasdfasdfasdfasdfa"];
// console.log(arr, "before sorting original array");
// const sortedArray = arr.sort(); // this sort will sort in Loxographical way
// const ascendingOrderSortedArray = arr.sort((a, b) => a - b); // sorts in Non Loxographical  way
// const dcendingOrderSortedArray = arr.sort((a, b) => b - a);
// console.log(dcendingOrderSortedArray, "sorted array");

// 6. Shift -> In-place
// arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr, "before shift array");
// console.log(arr.shift(), "shifted value"); // 1
// console.log(arr, "afteer shift array");

// // 7. unshift -> In-place

// arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr, "before unshift array");
// console.log(arr.unshift(0), "unshifted value"); // 8
// console.log(arr, "afteer unshift array");

//  ----------------- Looping -----------------

// 1. for while

// let array = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element, "for loop");
// }

// // for of  -> value

// for (let item of array) {
//   console.log(item, "for of"); // [1,2,3,4,5]
// }

// // for in loop -> Keys (Index are the keys in the array)

// for (let item in array) {
//   console.log(item, "for in"); // 0, 1, 2, 3, 4
// }

//

// --------------- Doubts -------------------

// Q1
let a = 10,
  b = 10,
  c = 10;

if ((a == b) == c) {
  console.log("hello");
} else {
  console.log("bye");
}

// Q2
// TODO:
const fun = () => {
  let a = (b = 0);

  a++;

  return a;
};

fun();

console.log(typeof a);

console.log(typeof b);

// Q3
let x = [1, 2, 3]; // abc@123

let y = [1, 2, 3]; // abc@124

let z = y; //  abc@124

console.log(x == y); // false

console.log(x === y); // false

console.log(z == y); // true

console.log(z == x); // false

// Q4

let num = 0;

function test() {
  var num = 1;

  return num;
}

console.log(test());

console.log(num);

// 1 0
