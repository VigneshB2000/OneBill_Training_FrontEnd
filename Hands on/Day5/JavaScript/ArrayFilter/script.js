var age = [12, 32, 14, 54, 65, 12, 32, 01, 15, 64, 11, 90, 17, 20];
vote = age.filter((value, index, age) => {
    return value > 18;
});
console.log(vote);

vote1 = age.map((value, index, age) => {
    return value > 18;
});

console.log(vote1);

//console.log(a); //undefined
//console.log(b); //Uncaught ReferenceError: Cannot access 'b' before initialization
//console.log(c); //Uncaught ReferenceError: Cannot access 'c' before initialization

var a = 10;
var a = 20;
console.log(a);

let b = 10;
//let b = 20; //Error
b = 30;
console.log(b);

const c = 10;
// const c = 20; //error
// c = 30; //Error
// console.log(c++);//Error
console.log(c);