console.log('Hello world!');

let text = 'Hello';

export function double(x) {
    return 2 * x;
}

const result = double(text);
console.log(result + " fromage")

//Arrays are typed already
function maxReducer(max:number, next:number) {
    return next > max ? next : max;
}

let max = [2, 10, -10, 13, 56].reduce(maxReducer)
console.log(max)

let array:string[] = [];

array.push("12","15")
console.log(array)

class User {
    name:string;
    age:number;
    city:City;
    eat(){
        console.log('miam')
    }

}

class City{
    name:string;
}

let peter = new User();
peter.name = "Peter";
let london = new City();
london.name = "London";

peter.city = london;

let julia = {
    name: 'Julia',
    age: 24,
    city: {
        name:'Toulouse'
    }

}

//peter = julia; //This is duck typing