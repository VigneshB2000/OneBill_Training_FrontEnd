const jsObject = {
    Name: "Rajan",
    SpName: "Developer rajan",
    Age: 20,
    isFine: false,
    Address: {
        DoorNo: 552,
        HouseNo: "Vellaru Illam",
        Pincode: 641013,
        State: "Coimbatore",
        City: "Bengaluru",
    },
};

//Converting from JavaScript Object to JSON

const JsonObj = JSON.stringify(jsObject);
console.log(JsonObj);

//Converting JSON to JavaScript object
const JsObj = JSON.parse(JsonObj);
console.log(JsObj);