let num = 56;
let numCopy = num;

//primitive variables eill be created in stack memory
console.log(num, numCopy + 10); //primitive varibles not affect memory area

let arr = [1, 2, 3, 4];
let arrCopy1 = arr; //Both variables refer to the same memory address.
arrCopy1.push(56);

console.log(arr, arrCopy1);

//Using spread operator(...) is known as Shallow copy
//Shallow copy copies the first layer.
//reference variable will be created in heap memory.

let arr2 = [4, 5, 3, 2, 1];
let arr2Copy = [...arr]; //here the address will br different

arr2Copy.push(90);
console.log(arr2, arr2Copy);

let arr3 = [1, 2, 3, 4, 5, 6, 7, [3, 4, 5, 6, 7, 8, 9]];

//object copy
let person = {
    pname: "Vicky",
    age: 22,
    percent: "99%",
};

let personCopy = {...person };
person.pname = "Shashi";
personCopy.phNumber = "987654321";
console.log(person, personCopy);

//Shallow copy:
//only firstvlayer of the movie will be copied . nested objects will be affected.
const movie = {
    //fIRST LAYER
    movieName: "No way Home",
    director: "John watts",
    hero: "Tom Holland",

    moreDetails: {
        //Second Layer
        heroine: "Zendaya",
        budget: "200 billion",
        villian: "Green Goblin",
    },
};

//Shallow Copy:nested Objects will be affected. Only First Lyer will be copied. Nested layers and nested arrays share the same location. Changing nested layers TAKES A TOLL IN MAIN OBJECT TOO.
let movieCopy = {...movie };
movie.numberofDays = 100;
movie.moreDetails.heroine = "Elizabeth Olsen";

//Deep Copy

let deepCopy = {...movie, moreDetails: {...movie.moreDetails } };
deepCopy.moreDetails.heroine = "Emma Stone"; // This doesn't affects other objects.
movie.moreDetails.budget = "1000 Billion"; //Deep copy isn't affected by this
console.log(movie, "movies");
console.log(movieCopy, "ShallowCopy");
console.log(deepCopy, "DeepCopy"); //Budget remains the same as before

//Example 2

let employee = {
    eName: "Goku",
    age: 34,
    sal: 99000,
    personalDetails: {
        fatherName: "Rama",
        motherName: "Sita",
    },
};

let empCopy = {...employee };
employee.id = 15;
empCopy.personalDetails = { father: "Dinesh" };
console.log(employee);
console.log(empCopy);

employee.personalDetails.motherName = "Rajani";

//Rest opperator(...)

function addNumbers(...nums) {
    let sum = 0;
    console.log(nums);
    for (i in nums) {
        sum += nums[i];
    }
    console.log(`sum - ${sum}`);
}

addNumbers(10, 20);
addNumbers(30, 80, 70, 20);
addNumbers(10, 20, 30);

//Destrucuturing the Object
let obj = {
    name: "ram",
    age: 23,
    id: "ty",
};
const { name, age, id } = obj;
//This enables the user to simply declare variable name instead of entering the object name every time for accessing the indiviual variables.
console.log(obj.name);
console.log(name);

//Destructuring the arrays
const hobbies = ["Dancing", "Music", "Drawing", "Poetry"];
const [hobby1, hobby2, hobby3, hobby4] = hobbies;

console.log(`Hobby 1 -${hobby1}`);
console.log(`Hobby 2 -${hobby2}`);
console.log(`Hobby 3 -${hobby3}`);
console.log(`Hobby 4 -${hobby4}`);