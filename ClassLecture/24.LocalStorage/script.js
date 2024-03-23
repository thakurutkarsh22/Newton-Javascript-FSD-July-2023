// get from local Storage -----

// NOTE: ANything you are storing inside the LOCAL STORAGE is a STRING ONLY.

// window.localStorage

/*
localStorage.setItem("name", "akash");
localStorage.setItem("boolean", true);
localStorage.setItem("number", 1);

*/

// get from local storage

/*
const stringItem = localStorage.getItem("name"); // "akash"
const booleanItem = localStorage.getItem("boolean"); // "true"
const numberItem = localStorage.getItem("number"); // "1"

console.log(stringItem, booleanItem, numberItem, "imte");

console.log(typeof booleanItem, " : ", booleanItem); // string
console.log(typeof numberItem, " : ", numberItem); // string

*/

// Question: you have to store utkarsh object;

const utkarsh = {
  name: "utkasrh",
  height: 20,
  weight: 60,
  age: 35,
};

localStorage.setItem("person", JSON.stringify(utkarsh));

const objString = localStorage.getItem("person");
console.log(objString);

const utObj = JSON.parse(objString);
console.log(utObj);
