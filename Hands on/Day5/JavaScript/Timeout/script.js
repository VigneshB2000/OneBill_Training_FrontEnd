console.log("start");

function getName() {
    console.log("welcome");
}

getName();

setTimeout(() => {
    console.log("Timeout for first callback");
}, 5000);

setTimeout(() => {
    console.log("Timeout for second callback");
}, 3000);
console.log("end");