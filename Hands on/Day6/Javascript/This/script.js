// console.log(window);
// var a = "44";
// // console.log(window.alert("Hello"));
// // console.log(window.document); //gives html file
// // console.log(window.history); //
// // console.log(window.navigator); //latitude and logitude

// console.log(
//     window.navigator.geolocation.getCurrentPosition((loc) => {
//         console.log("location", loc);
//     })
// );

console.log(this === window);

function add() {
    console.log(this);
}
add();

let person = {
    name: "Ram",
    age: 23,
    sal: function add() {
        console.log(this);
    },
};
//Inside the function this refers to current object
console.log(person.sal);