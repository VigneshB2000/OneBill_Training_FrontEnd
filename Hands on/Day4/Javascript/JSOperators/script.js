//Named Function
function getName(a, b) {
    console.log(a + b);
}
//Anonymous Function
getName(3, 5);

var getName1 = function(c, d) {
    console.log(c - d);
};

getName1(20, 10);

getName2;
var getName2 = function() {
    console.log(8 - 3);
};

//Immediately Invoked Function

var add = (function(a, b) {
    console.log(a + b);
})(10, 20);

var hello = (function(c) {
    var x = c * c;
    console.log("The variable is in function 1 " + c);
    bello(c);
})(5);

function bello(x) {
    console.log("The variable in second function 2 " + x);
}