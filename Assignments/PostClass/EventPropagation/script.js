// https://my.newtonschool.co/playground/markup/jxav1f14quqv

console.log("hello");
const anchorTagElement = document.getElementById("myAnchor");

const checkedElement = document.getElementById("check");

anchorTagElement.addEventListener("click", (event) => {
  event.preventDefault();
});

function func1(event) {
  const isChecked = checkedElement.checked;

  console.log("DIV 1 is clicked.");
  if (isChecked) {
    event.stopPropagation();
  }
}

function func2() {
  console.log("DIV 2 is clicked.");
}
