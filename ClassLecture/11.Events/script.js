// Any thing that you do in Browser Is an ACTION

/*
    What do you do in your browser ?

    Click, DoubleClick, Select, Hover (moving around on browser),
    Changing the screen size, SCROLLING etc.....

    Every action is AN Event of its Own type


    // ROLE OF BROWSER 
    ANY ACTION HAPPENS create an event and SEND IT, it is upto the JS FILE if they ACCEPT EVENT OR NOT.
*/

console.log("a");

// Till now I have not done anything To LISTEN to the EVENT.
// SO we have to add LISTNERS.

// 1. We select an ELEMENT on WHOM WE WANT TO LISTEN
// 2. We specify what EVENT we want to listen on that ELEMENT.
// 3. Ofcourse the Callback function when that event arrives.

// const button1Element = document.getElementById("button1");
// console.log(button1Element);

// function button1Callback() {
//   button1Element.style.background = "red";
//   console.log("click buuton  1");
// }

// button1Element.addEventListener("click", button1Callback);

const containerELement = document.getElementById("container");
console.log(containerELement);

containerELement.addEventListener("mouseout", () => {
  containerELement.style.background = "red";
});

containerELement.addEventListener("click", () => {
  containerELement.style.background = "purple";
});

containerELement.addEventListener("mouseenter", () => {
  containerELement.style.background = "yellow";
});
