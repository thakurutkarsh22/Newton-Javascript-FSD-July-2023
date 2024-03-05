// --------------- PROMISE APIS   -----------------

// Promise has 6 Static methods

/*
  1. Promise.all
  
  I need a list of Promise That need to be resolved simontaneously.

  All the Promise nnedds to RESOLVE otherwise ALL THE PROMISE WILL be rejected.

*/

let payerPromise = new Promise((res, rej) => {
  // Payer had 200 rs with him, he is paying Shopkeeper 100 rs.
  res(100); // balance lafet with payer
});

let shopKeeperPromise = new Promise((res, rej) => {
  res(10000 + 100);

  // rej("didnt get money"); // 10000
});

// payerPromise.then(asdsadas) / shopKeeperPromise.then(asdadasda);

// Insted of doing this

Promise.all([payerPromise, shopKeeperPromise])
  .then((data) => {
    // data // [payerPromiseData, shopKeeperPromiseData] // [100, 10100]
    // RBI (reserve bank of India Father of all the banks)
    // RBI take a ledger
    // payer - 100
    // shopkeeper - 10100

    console.log(data, "RBI will take a ledger");
  })
  .catch((error) => {
    // RBI CAN DECIDE TO PAY BACK THE PAYER
    console.log(error, "RBI SHOULD ROLLBACK THE MONEY TO PAYER");
  });

/*
    2. Promise.race 

    List of all the Promise and will check who won.

  */

const googlePromise = new Promise((res) => {
  //const data =  XMLHttpRequest(google.com) 1 second  // data from google
  // res(data);

  setTimeout(() => {
    res("data from google ");
  }, 1000);

  // google server is respononding with "data" after 1 second
});

const utkarshWebsitePromise = new Promise((res) => {
  setTimeout(() => {
    res("data from utkarsh website");
  }, 5000);

  // utkasrrh server is respononding with "data" after 5 second
});

Promise.race([googlePromise, utkarshWebsitePromise]).then((data) => {
  console.log("data inside the race", data);
});
