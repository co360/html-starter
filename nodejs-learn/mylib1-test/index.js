const mylib1 = require('mylib1');
for (let i = 0; i < 10; i++) {
    console.log("Iteration#" + i);
    console.log("mylib1.greeting('World')", mylib1.greeting('World'));
    console.log("mylib1.PI", mylib1.PI);
    console.log("mylib1.random(1, 10)", mylib1.random(1, 10));
}
