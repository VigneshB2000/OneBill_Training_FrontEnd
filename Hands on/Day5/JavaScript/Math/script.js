num = Math.min(1, 6, 4, 8, 6);
num1 = Math.min(1, 6, 4, 8, 6);
console.log("Min function ", num);
console.log("Max function ", num1);

arr = [1, 5, 3, 2, 9];
console.log("Max function in an array ", Math.max(arr));
console.log("Random function ", Math.random());
console.log(
    "Random value generation in range 1 to 10 ",
    Math.round(Math.random() * 10 + 1)
);

console.log(Math.floor(4.51)); //4
console.log(Math.ceil(4.51)); //5

var arr = ["Goku", "Shashi", "Cajan", "Lingu", "Nalli"];
console.log(arr[Math.floor(Math.random() * arr.length)]);