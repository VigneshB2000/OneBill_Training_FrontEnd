var myArray = [
    "Vicky",
    34,
    true,
    undefined,
    null,
    { color: "black" },
    ["black", "blue", "pink"],
];

console.log(myArray[2]);
console.log(myArray[4]);
console.log(typeof myArray[3]);
console.log(myArray[5].length);
console.log(myArray[5].color);
console.log(myArray[5]["color"]);
console.log(myArray.length);

var arr = [10, 20, 30, 40, 50, 60, 70];
var mapMethod = arr.map((value, index, arr) => {
    console.log("Index ", index);
    console.log("Value ", value);
    // console.log(arr);
});