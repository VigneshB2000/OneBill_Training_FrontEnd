var arr = ["a", 1, true, { ename: "Vicky" }];
console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     document.writeln(arr[i]);
// }

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i] + 10);

//     document.writeln(arr[i] + 10);
//     br
// }
var arr = [10, 20, 30];
for (var i of arr) {
    console.log(i);
}
for (var i = 0; i < arr.length; i++) {
    arr[i] += 10;
    console.log(arr[i]);
}