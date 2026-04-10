// objects: {}, key: value, 
// functions
// string is object?
// date / math objects
// accessing object and destructuing:
// hoisting: variables vs functions
// const for objects and arrays...

const car = {
    hs: 200,
    color: "red",
    brand: "Honda",
    model: "Civic",
    year: "2004",
    engineOn: false,
    startEngine (){
        this.engineOn = true;

    },
    drive (){
        console.log("driving...");
        console.log(`the car is ${this.model}`);
    }

}

console.log(car.engineOn);
car.drive()
car.startEngine()
console.log(car.engineOn);




// car.drive();
// let arr = [1, 2]
// arr.lenth
// arr.push()
// console.log("Sam".length);


// Date:
const d = new Date();

console.log(d.getDay())
// apply the switch from yesterday with Date()


Math.random() * 10 // 0 - 9 
Math.random() * 100 + 1 // * 101
console.log(Math.floor(Math.random() *  10));
let nu = 44
nu.toFixed(2)
Math.floor(Math.random() *  10);
console.log(car.color);

