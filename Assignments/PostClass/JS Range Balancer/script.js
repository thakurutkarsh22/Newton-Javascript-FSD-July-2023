// https://my.newtonschool.co/playground/markup/2nrsymjz7fov

// Selectors
const inputBoxElement = document.getElementById("max-sum-holder-input");

const rangeAElement = document.getElementById("range-a-holder-input");
const rangeBElement = document.getElementById("range-b-holder-input");

const rangeAValue = document.getElementById("range-a-value");
const rangeBValue = document.getElementById("range-b-value");

const sumElement = document.getElementById("sum");

// Event listners

inputBoxElement.addEventListener("change", (event) => {
  const value = event.target.value;
  memory.max = value;
  console.log("value", value);
  console.log(memory, "memory");

  //  ------ update the Range b label and the actual range --------

  rangeBValue.innerHTML = value;
  rangeBElement.max = value;
  rangeBElement.value = value;
});

rangeBElement.addEventListener("change", (event) => {
  const value = event.target.value;
  const differenceRange = inputBoxElement.value - value;
  console.log("value inside range B", value, differenceRange);

  // change the range val of b
  rangeBValue.innerHTML = value;

  // its time to update tthe max range of A

  rangeAElement.max = differenceRange;
  // rangeAValue.innerHTML = differenceRange;

  // update max sum
  updateMaxSum();
});

rangeAElement.addEventListener("change", (event) => {
  const value = event.target.value;

  rangeAValue.innerHTML = value;
  // update max sum

  updateMaxSum();
});

function updateMaxSum() {
  sumElement.innerHTML =
    Number(rangeAElement.value) + Number(rangeBElement.value);
}

//  logic

// max sum =

const memory = {
  max: 0,
};
