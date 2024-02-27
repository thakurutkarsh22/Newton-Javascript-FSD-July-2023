// console.log("hello");

// Hey Wait for 5000 ms After that I will RUN THE () => {} (callback function).
// setTimeout( () => {},  5000 )

// setTimeout(() => {
//   console.log("hello there after 5 seconds");
// }, 5000);

// Question: what output I will get ?
console.log("a");

setTimeout(() => {
  console.log("b");
}, 3000);

// 3000 ms is the MINIMUM guranteed time, MAXIMUM WAIT TIME CAN BE ANYTHING.

console.log("c");
console.log("d");
// 1
console.log("e");
console.log("f");
// 2
console.log("g");
console.log("h");
// 3
console.log("i");
console.log("j");
// 4
console.log("k");
console.log("l");
console.log("m");

// ------------- Algorithm Of Event Loop ---------------

/*
    1. as soon as EXECUTER sees (setTimeout)
        1.1 it sends callback function to WEB API memory 
        1.2 it starts the clock.

    2. Event loop is asking the question to Stack (after every 200ms)
        1.1 Are you empty ? -> NO (nothng happens)
        1.1 Are you empty ? -> YES (asks another question to the QUEUE (do you have item))

    3. as soon as the clock becomes 0 the callback function which was inside the web api 
        memory is now pushed to the QUEUE

    4. Again the Event loop is asking the question to Stack (after every 200ms)
        4.1 Are you empty ? -> NO (nothng happens)
        4.1 Are you empty ? -> YES (asks another question to the QUEUE (do you have item))
        4.2 If queue answer is also YES then it means both the answers are YES 

        //**** It means the stack is empty and Queue has item 

    5. Item will be taken out from the queue and pushed inside the Stack to be executed in the last.

    



*/

// NOTE : Video about event loop https://www.youtube.com/watch?v=8aGhZQkoFbQ
