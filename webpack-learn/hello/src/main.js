function helloEventHandler (event) {
    console.log("Received event", event);
}

// Make function global
window.helloEventHandler = helloEventHandler;
