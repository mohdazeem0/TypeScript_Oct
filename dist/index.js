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
