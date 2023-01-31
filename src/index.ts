let id: number = 5;
id = 10;

let myName: string = "Prashant";
myName = "Puneeth";

let isValid: boolean = true;
isValid = false;

let x: any = true;
x = 99;

let marks: number[] = [97, 80, 97, 69, 90];
marks.push(98);

// Tuple
let random: any[] = ["Prashant", 10, true];
random.push(100);

// Tuple array
let dbTable: [string, number, boolean] = ["Prashant", 22, true];
dbTable.push("haveMobile");

let employees: [string, number][];
employees = [
  ["Prashant", 22],
  ["Kausthubh", 25],
  ["Siddharth", 32],
];
employees.push(["true", 100]);

// Union
let product_id: string | number = 22;
product_id = "bro@gmail.com";

// Object
type User = {
  age: number;
  name: string;
};

const user: User = {
  age: 22,
  name: "Prashant",
};

// Type assertion
const cid: any = 1;

// let customerId=<number>cid
let customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}
addNum(20, 10);

// void
function logmsg(msg: string | number): void {
  console.log(msg);
}
logmsg("Good day");
logmsg(100);

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;
