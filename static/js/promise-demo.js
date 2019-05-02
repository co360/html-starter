var promise1 = new Promise(function(resolve, reject) {
    console.log("Starting promise handler.");
    setTimeout(function() {
        resolve('foo');
        console.log("Promise resolved.");
    }, 3000);
});

promise1.then(function(value) {
    console.log("Promised resolved and returned value:");
    console.log(value);
    // expected output: "foo"

    console.log("Promised object after resolved");
    console.log(promise1);
});

console.log("Note that this thread continue to execute without waiting on promise!");
console.log(promise1);
// // expected output: [object Promise]
