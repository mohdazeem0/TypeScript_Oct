"use strict";
//Basics Types
let id = 50;
let company = 'Mohd Azeem';
let isPublished = true;
let x = 'Hello There'; //any types of data types
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'hello']; //any types of data types
//Tuple
let person = [1, 'azeem', true]; //all should be in same spot as data types
//Tuple Array
let employee;
employee = [
    [1, 'azeem'],
    [2, 'zeem'],
    [3, 'azim'],
];
//Unions
let prodId;
prodId = 22;
//Enums / Numerated Types//allows us to define set of name constants either numeric or strngs
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: 'azeem'
};
//Type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 7));
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'azeem'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(1, 2));
//||//
//CLASSES
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(12, 'Brad');
const milie = new Person(23, 'Mike');
//console.log(brad.register());
//SubClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(12, 'Mohd Azeem', 'Software Dev');
console.log(emp.register());
//Generics <T> it is type or placeholder
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['azim', 'azeeem', 'ajju']);
numArray.push(12);
strArray.push('hello');
