let arr = [1, 2, 3, 4, 5];

let arr2 = arr;

arr = null;

arr2 = null;

console.log(arr); //
console.log(arr2); //

/* If not one is pointing to the Object inside the HEAP, then GC (garbage collection), in some time
    (no one know how much time) the GC will go ahead and delte that Object.


    IMPORTANT: Mark and Sweep (Javascript.info)

*/
