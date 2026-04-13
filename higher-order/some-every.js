const cartItems = [
  { name: "coffee", count: 2, price: 4.99 },
  { name: "car", count: 1, price: 3.99 },
  { name: "milk", count: 2, price: 10.99 },
  { name: "coffee", count: 2, price: 4.99 },
  { name: "Tea", count: 1, price: 6.99 },
];

let someResult = cartItems.some(i => i.name == "coffee") // true if one or more items fit the condition
let everyResult = cartItems.every(i => i.name == "coffee") // true if all items fit the condition

console.log(someResult);
console.log(everyResult);


