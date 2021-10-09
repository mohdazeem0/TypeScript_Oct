//Basics Types

let id: number = 50;
let company: string = 'Mohd Azeem';
let isPublished: boolean = true;
let x: any = 'Hello There'; //any types of data types


let ids: number[] = [1, 2, 3, 4, 5, 6];
let arr: any[] = [1, true, 'hello'] //any types of data types

//Tuple
let person: [number, string, boolean] = [1, 'azeem', true] //all should be in same spot as data types
//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'azeem'],
    [2, 'zeem'],
    [3, 'azim'],
]

//Unions
let prodId: string | number
prodId = 22;

//Enums / Numerated Types//allows us to define set of name constants either numeric or strngs
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}
console.log(Direction1.Up);
enum Direction2 {
    Up = 'up',
    Down='down',
    Left='left',
    Right='right',
}
console.log(Direction2.Down);


//OBJECTS
type User={
    id:number,
    name:string
}
const user:User={
    id:1,
    name:'azeem'
    }

//Type Assertion
let cid:any=1
//let customerId = <number>cid
let customerId=cid as number

//Functions
function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(2,7));


//Void
function log(message:string|number):void{
    console.log(message);
}

//Interfaces /custom types
interface UserInterface{
    id:number,
    name:string
}
const user1:UserInterface={
    id:1,
    name:'azeem'
    }
 


