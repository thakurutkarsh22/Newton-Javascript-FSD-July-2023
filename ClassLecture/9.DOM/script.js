// HTML -> DOCUMENT (both the things are same);

//  ------------------- SELECTORS (get the element) -------------------

// 1. getElementById

// const headingElement = document.getElementById("heading");
// // console.log(headingElement); // "English readable Element"
// console.dir(headingElement); // "REAL OBject";

// 2. getElementsByTagName.

// console.log("hello");

// const h1HeadingElements = document.getElementsByTagName("h1");
// console.log(h1HeadingElements);

// 3. getElementsByClassName

// const asdClassElementList = document.getElementsByClassName("ads");
// console.log(asdClassElementList);

// 4. querySelector.  -> It selects the 1st Element only ()if you know CSS selector you can you it as well

// const element = document.querySelector(".ads");
// console.log(element);
// console.dir(element);

// 5. querySelectorAll

// const elementList = document.querySelectorAll(".ads");
// console.log(elementList);

//  ----------------------------- EDIT -----------------------

// TODO
// Question: What will you use to Select heading1 -> getElementById or querySelector ?

// answer: getElementById (Very very fast)

// const headingElement = document.getElementById("heading1");
// console.dir(headingElement);
// console.dir(headingElement.id);

// Question: attribute vs Properties
// Attribute we give in HTML and Properties are of ELEMENT JS Object
// Example property className  === Attribute class

// Question  to change the background color to aqua
// headingElement.style.backgroundColor = "yellow";

// ---------------------------- Delete an Element (Removal) ------------------

/*
    1. Select the element which you want to delete
    2. .remove() on that element.

*/

// const paragraphElement = document.getElementById("para");
// console.log(paragraphElement);
// paragraphElement.remove();

// ------------------------ Creation Of ELement and insert an element (Create) ---------------

/*
    1. Create an element
    2. Edit that element

    3. Insert Element inside DOM. but before that I need to select its parent 

*/

const newHeading1Element = document.createElement("h1");
console.log(newHeading1Element);

newHeading1Element.textContent = "xyz";
newHeading1Element.style.backgroundColor = "aqua";

const bodyElement = document.body;
bodyElement.prepend(newHeading1Element);
console.log(bodyElement);

// const containerElement = document.getElementById("container");
// containerElement.append(newHeading1Element);
