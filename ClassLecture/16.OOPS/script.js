// ----------- OOPS  -----------

// Question: How to create an object

// way 1

// const obj = {};

// way 2

// class Person {
//   name;
//   age;

//   // CONSTRUCTOR FUNCTION
//   constructor(inputName, inputAge) {
//     this.name = inputName;
//     this.age = inputAge;
//   }

//   // methods: -> function inside the Class

//   canPersonWalk() {
//     console.log("yes i can walk");
//   }
// }

// const utkasrhPersonObject = new Person("utkarsh", 19);
// const ankusPersonObject = new Person("ankush", 19);

// console.log(utkasrhPersonObject);
// console.log(ankusPersonObject);
// console.log(
//   utkasrhPersonObject.canPersonWalk === ankusPersonObject.canPersonWalk,
//   "class"
// ); // true

// utkasrhPersonObject  is an INSTANCE ofPerson class .
// ankusPersonObject  is an INSTANCE of Person class.

// ------------------- BEFORE CLASS KEYWORD (BEFORE ES6)  CONSTRUCTOR FUNCTION -------------

// CONSTRUCTOR FUNCTION are NORMAL function (its just a Special Name)

// PersonFunc is a CONSTRUCTOR FUNCTION
// function PersonFunc(inputName, inputAge) {
//   this.name = inputName;
//   this.age = inputAge;

//   // method

//   this.canPersonWalk = function () {
//     console.log("yes i can walk constructor func");
//   };
// }

// const amithObject = new PersonFunc("amith", 19);
// const priyankaObject = new PersonFunc("priyanka", 20);
// amithObject.canPersonWalk();

// console.log(amithObject);
// console.log(priyankaObject);

// console.log(
//   amithObject.canPersonWalk === priyankaObject.canPersonWalk,
//   "constructor function "
// ); // false

//Question: Having the limited knowledge Which is better Construtor FUnc or CLasss ?
/* Answer
  Classes is better 
  WHY ? 

  Classes methods are SHARED among INSTANCES 

  CONSTRUCTOR FUNCTION mehtods are Newly created for EVERY Instance.

*/

// ----------------- Inheritance -------------------
// ALl the PROPERTIES & METHODS will be part of the CHILD (DERIVED CLASS) .....
// ANy PROPERTIES of child CAN NEVER BE part of Parent Object.

// parent class
// class Student {
//   name;
//   standard;

//   constructor(name, standard) {
//     this.name = name;
//     this.standard = standard;
//   }

//   markAttendance() {
//     console.log(`hey there ${this.name} is present: Normal classroom attance`);
//   }

//   grades() {
//     console.log("grades nice");
//   }
// }

// super // -> parent

// child class -> derived class.
// class SportCaptain extends Student {
//   favTool; // Bat, ball, badmintion, tennis racket

//   constructor(name, stand, favTool) {
//     super(name, stand); // I am calling Constructor of parent
//     this.favTool = favTool;
//   }

//   // markAttendance() {
//   //   console.log(`sports captain ${this.name} is present in the ground`);
//   // }

//   routine() {
//     console.log("play cricket all day and do not study");

//     super.grades(); // -> this can be done
//   }
// }

// const akash = new Student("akash", 5);
// const ankush = new Student("ankush", 10);

// console.log(akash);
// console.log(ankush);

// const virat = new SportCaptain("virat", 11, "bat");

// console.log(virat);

/*
  Question: In derived class (child class) why we are forced to call SUPER first? 
  // you cant create a child before creating the parent.

  

*/

// ----------------- Inheritance BEFORE ES6 (through CONSTRUCTOR FUNCTION) --------------

//  ------------------------ Getters and Setters ----------------

// class Star {
//   name;

//   // DEFAULT CONSTRUCTOR...
//   constructor() {}

//   get getName() {
//     return this.name;
//   }

//   set setName(value) {
//     this.name = value;
//   }
// }
// const sun = new Star();
// console.log(sun);

// sun.setName = "SUN";
// console.log(sun.getName);

// ---------------------- Private properties -----------------------

// Access Modifiers -> public, private, protected in JAVA
// In js There is no such thing... SAD ..

/* class Star {
  weight;
  years;

  constructor(weight, yers) {
    this.weight = weight;
    this.years = yers;
  }
}

const sun = new Star(100, 1000);
console.log(sun);

sun.weight = 1;
sun.years = -100;

*/

//  we can abuse the system and make the weight and years changed .....

// we can get private properties like this

// way 1

// class Star {
//   _weight;
//   _years;
// }
// way 2

class Star {
  #weight; // private properties
  #years;

  name; // public

  constructor(name, weight, year) {
    this.name = name;
    this.#weight = weight;
    this.#years = year;
  }

  set setWeight(value) {
    // if you are dev
    this.#weight = value;
  }

  set setYears(value) {
    this.#years = value;
  }

  get getWeight() {
    return this.#weight;
  }

  get getYears() {
    return this.#years;
  }
}

const sun = new Star("sun", 10010101020301, 900000000);
console.log(sun);

// can someone else change this value

//  This thing is not possible now  ...
// sun.#weight = 12000 ;

sun.setWeight = 1200;

sun.name = "utkarsh sun";

console.log(sun.name, "name"); // you can get NON PRIVATE VALUES LIKE THIS.
// console.log(sun.#weight); // YOU CANT GET PRIVATE VALUES LIKE THIS ...
// console.log(sun.#years);

console.log(sun.getWeight, "weight"); // 10010101020301
console.log(sun.getYears, "years"); // 900000000
