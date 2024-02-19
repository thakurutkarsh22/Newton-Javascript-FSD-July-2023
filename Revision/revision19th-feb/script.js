const nameElement = document.querySelector(".name");

// ------ Way - 1  addEventListener (WE PREFER THIS )--------

// console.dir(nameElement);

// // buttons
const greenButtonElemenet = document.querySelector(".green");
// const blueButtonElemenet = document.querySelector(".blue");
// const orangeButtonElemenet = document.querySelector(".orange");

// // console.dir(greenButtonElemenet, blueButtonElemenet, orangeButtonElemenet);

// greenButtonElemenet.addEventListener("click", () => {
//   const color = greenButtonElemenet.className;
//   nameElement.style.color = color;
// });

// blueButtonElemenet.addEventListener("click", (event) => {
//   const color = blueButtonElemenet.className;
//   nameElement.style.color = color;
// });

// orangeButtonElemenet.addEventListener("click", () => {
//   const color = orangeButtonElemenet.className;
//   nameElement.style.color = color;
// });

//  ------ way 2  USING ATTRIBUTES FOR THE CLICK (ANY EVENT). (WE RARELY PREFER THIS)

//  THis function can Only work in BUBBLING PHASE AND NOT IN CAPTURE PHASE
// THATS WHY way 2 has some limitiations.
function colorButtonClick(event) {
  console.log(event); // element

  const element = event.target;
  const color = element.className;

  nameElement.style.color = color;
}

/*
    Question: What is a class List vs Class name. 

    answer: Class list is Array version of ClassName. 


    add and removal inside the classList 


    greenButtonElemenet.classList.add("slack");
    greenButtonElemenet.classList.remove("slack");


    // TOGGLE -> if the class is there Remove it and If the class is NOT there ADD IT.


    greenButtonElemenet.classList.toggle("asdasdsa")

    TODO: Polyyfill for toggle 
*/

/*
    HOF: 

*/

// let a = b();
// a();

function outer() {
  function sum(a, b) {
    return a + b;
  }

  sum(1, 2);
}

const result = outer();

// const answer = result(1, 2);

console.log(result); // 3
