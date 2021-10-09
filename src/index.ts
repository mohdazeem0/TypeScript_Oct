//Basics Types

let id:number=5;
let company : string ='Mohd Azeem';
let isPublished:boolean=true;
let x:any='Hello There'; //any types of data types


let ids:number[]=[1,2,3,4,5,6];
let arr:any[]=[1,true,'hello'] //any types of data types

//Tuple
let person:[number,string,boolean]=[1,'azeem',true] //all should be in same spot as data types
//Tuple Array
let employee:[number, string][]

employee=[
    [1,'azeem'],
    [2,'zeem'],
    [3,'azim'],
]

//Unions
let prodId:string|number
prodId=2
