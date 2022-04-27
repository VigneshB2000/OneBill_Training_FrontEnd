/*
createElement Function has three Parameters
1.Element
2.Attribute
3.Text for the Html Element


ReactDOM.render function has 2 Parameters
1. variable
2.getElement
*/
// const e1 = React.createElement("h1", null, "React JS for novice");
// ReactDOM.render(e1, document.getElementById("root"));

// const e1 = React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Car"),
//     React.createElement("li", null, "Bike"),
//     React.createElement("li", null, "Cycle")
// );
// ReactDOM.render(e1, document.getElementById("root"));

const mobiles = ["IPhone", "OnePlus", "Samsung", "Redmi", "Oppo"];
const e1 = React.createElement(
    "ul",
    null,
    mobiles.map((mobile, index) => {
        return React.createElement("li", { key: index }, mobile);
    })
);
ReactDOM.render(e1, document.getElementById("root"));