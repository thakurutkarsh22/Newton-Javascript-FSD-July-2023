// ---------------------- Normal Function bs Arrow Function -------------

function sum(a, b) {
  return a + b;
}

const sumFunctionExpression = function (a, b) {
  return a + b;
};

const sumFunctionExpressionArraow = (a, b) => {
  return a + b;
};

console.log(sum(1, 2), "normal function"); // 3
console.log(sumFunctionExpression(1, 2), "function expression"); //3
console.log(sumFunctionExpressionArraow(1, 2), "arrow function"); // 3

// Difference 1 Arguments
// arguments is a reserved keyword and only availabe inside NORMAL FUNCTIONS Keyword
// arguments are nothing but an ARRAY Of PARAMETERS + Something else.

// function abc(a, b) {
//   console.log(a, b, "normal things");
//   //   console.log(arguments, "arguments debug"); [1000, -1, otherthings]
//     console.log(a, arguments[0]); // 1000 1000
//     console.log(b, arguments[1]); // -1 -1
// }

abc(1000, -1);

const abcArrow = (a, b) => {
  //   const arg = arguments;

  console.log(a, b);
  console.log(arguments);
};

abcArrow(10000000000000, 2000000000);

// arguments keyword doest work inside the Arrow Function.

// TODO: After we Understand This (keyword) concept

//
