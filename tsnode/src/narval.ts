import {double} from "./hello";

class Animal {


    constructor(public name: string, public weight: number) {

    }
}

const lulu = new Animal('Cat', 7);

class Narval extends Animal {
    constructor(public length: number) {
        super('Gérard', 400);
    }

    detect(object: any) {
        console.log(object, 'detected');
    }
}

const gerard = new Narval(30);
console.log(gerard)
gerard.detect(lulu)
console.log("--")

//Observable pattern
class Viewer<T> {
    viewable: T

    view(thing: T) {
        this.viewable = thing
    }
}

let viewer = new Viewer<Animal>();
viewer.view(gerard)
console.log(viewer);

gerard.length = double(40)

const lorem = ` This
is on
multiline
<html>
    <div>${gerard.name}</div>
</html>
    
`;
console.log(lorem);

type Operation = (x:number, y:number) => number;

let add:Operation = (x,y) => x+y;

console.log(add(12,5));

let div=(x:number,y:number)=>x/y;
//ducktyping works on any type , including functions

let myOperation:Operation = div;

//Splat operator
const people=['Jim','John','Jack']
const  morePeople = people.push('Jules') //push is mutative

console.log(people,morePeople);

const morePeopleSexy = [...people, 'Jacky','Joseph'];
console.log(morePeopleSexy);

//With objects : Only ES 2017
const house = {
    size: 50,
    price: 50000
}


let palace = {
    ...house,
    employees:5
}

console.log(palace);

let rental = {
    people, //shortcut for people:people
    palace:palace,
    price:10000,
    days:7
}
console.log(rental);