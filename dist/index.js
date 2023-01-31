"use strict";
let id = 5;
id = 10;
let myName = "Prashant";
myName = "Puneeth";
let isValid = true;
isValid = false;
let x = true;
x = 99;
let marks = [97, 80, 97, 69, 90];
marks.push(98);
// Tuple
let random = ["Prashant", 10, true];
random.push(100);
// Tuple array
let dbTable = ["Prashant", 22, true];
dbTable.push("haveMobile");
let employees;
employees = [
    ["Prashant", 22],
    ["Kausthubh", 25],
    ["Siddharth", 32],
];
employees.push(["true", 100]);
// Union
let product_id = 22;
product_id = "bro@gmail.com";
const user = {
    age: 22,
    name: "Prashant",
};
// Type assertion
const cid = 1;
// let customerId=<number>cid
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
addNum(20, 10);
// void
function logmsg(msg) {
    console.log(msg);
}
logmsg("Good day");
logmsg(100);
