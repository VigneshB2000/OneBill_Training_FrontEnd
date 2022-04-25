// function greeting(a) {
//     a();
// }

// function welcome() {
//     console.log("Hello");
// }

// greeting(welcome);

function greeting(a) {
    a("Ram");
}

function welcome(name) {
    console.log("Hello", name);
}

greeting(welcome);