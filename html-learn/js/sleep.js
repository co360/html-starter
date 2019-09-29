const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};
console.log("before sleep", new Date());
sleep(3000).then(() => {
    console.log("sleep is done", new Date());
});

// NOTE: You can't do this!
console.log("BAD example: before  1500", new Date());
sleep(1500);
console.log("BAD example: done", new Date());
