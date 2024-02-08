// All elements

const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

// If I click on child Element

childElement.addEventListener("click", () => {
  console.log("child CLicked");
});

grandParentElement.addEventListener("click", () => {
  console.log("grandparent hello");
});
