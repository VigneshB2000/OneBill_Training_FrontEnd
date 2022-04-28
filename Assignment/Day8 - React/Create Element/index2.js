const cars = ["Lamborghini", "Ferrari", "Mercedes", "Aston Martin"];
const c = react.createElement(
    "ol",
    null, cars.map((car, index) => {
        return react.createElement("li", { key: index }, car);

    })
);
ReactDOM.render(c, document.getElementById("root"));