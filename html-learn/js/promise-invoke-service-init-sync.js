/*
This demo will ensure the service.run() is invoke after the service.init() work
is done. The implementation uses promise/resolve to signal when service is ready
before run.
 */
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

function Service() {
    this.hasInited = false;
    this.initPromise = null;

    this.init = () => {
        console.log("Initializing service.");
        this.initPromise = new Promise((resolve) => {
            sleep(3000).then(() => {
                console.log("Service is ready.");
                this.hasInited = true; // We can use this.hasInited because we are using fat arrow.
                resolve(true); // It's important to call resolve, else signal is wrong!
            });
        });
    };

    this.run = () => {
        let runFunc = () => {
            let id = Math.random().toString(16);
            console.log("Running service with id=" + id);
        };

        if (this.initPromise === null) {
            throw new Error("Service has not initialize yet.");
        }

        if (this.hasInited) {
            console.log("Invoking runFunc right now.");
            runFunc();
        } else {
            console.log("Invoking runFunc after initPromise");
            this.initPromise.then((result) => {
                runFunc();
                return result;
            });
        }
    };
}

let service = new Service();
console.log("main: Invoking service.init for ", service);
service.init();
console.log("main: Invoke service.run right after init", service);
service.run();
setTimeout(()=> {
    console.log("main-timer: Invoke service.run after 5s", service);
    service.run();
}, 5000);
console.log("main: Done.");
