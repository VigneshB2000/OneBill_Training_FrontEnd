// Callbacks make sure that a function is not gonna run before a task is completed but will run right after the task is completed. itb helps us develop asynchronous Javascript .

function first(callback) {
    setTimeout(() => {
        console.log("first executed");
        callback();
    }, 5000);
}

function second() {
    setTimeout(() => {
        console.log("second executed");
    }, 2000);
}

first(second);
second();

console.log("..................................");

function test() {
    console.log("first function");

    function inner() {
        console.log("inner html");
    }
    return inner;
}
test()(); // function currying