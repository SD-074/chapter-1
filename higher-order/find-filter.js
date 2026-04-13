const cartItems = [
  { name: "coffee", count: 2, price: 4.99 },
  { name: "car", count: 1, price: 3.99 },
  { name: "milk", count: 2, price: 10.99 },
  { name: "coffee", count: 2, price: 4.99 },
  { name: "Tea", count: 1, price: 6.99 },
];
const mariaArr = cartItems.filter(i => i.price > 5)
// console.log(mariaArr);

const coffeeItems = cartItems.filter(i => i.name == "coffee");
// console.log(coffeeItems);

const isThereCoffee = cartItems.find(i => i.name == "coffee") // return item

console.log(isThereCoffee);
