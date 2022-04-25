let systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getDate());
console.log(systemDate.getDay());
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getMilliseconds());
console.log(systemDate.getMinutes());
console.log(systemDate.getMonth());
console.log(systemDate.getTime());

let date1 = new Date("Dec/31/2021");
console.log(date1);
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getFullYear());
console.log(date1.getHours());
console.log(date1.getMilliseconds());
console.log(date1.getMinutes());
console.log(date1.getMonth());
console.log(date1.getTime());

let date2 = new Date("dec/31/2021");
console.log(date1);

let dateVal = date2.getDate();
let Month = date2.getMonth();
let Year = date1.getFullYear();

let fullDate = `${Month + 1}/${dateVal}/${Year}`;
console.log(fullDate);

let mon = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
let date3 = new Date("dec/31/2021");
let dateVal3 = date3.getDate();
let Month3 = mon[date3.getMonth()];
let Year3 = date3.getFullYear();
let Dater = `${Month3}/${dateVal3}/${Year3}`;
console.log(Dater);