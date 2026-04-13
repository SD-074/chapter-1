// Characteristics of .map()
// Return Value: Every execution of the callback function should return a value; this value is then added to the new array that .map() returns.
// Functionality: It can be used for any purpose where you need to transform elements of an array into a new set of values, such as converting data formats, applying calculations, or altering data structure.

// return in arrow func:

// () => {code...}; vs () => code...;
const cartItems = [
  { name: "coffee", count: 2, price: 4.99 },
  { name: "car", count: 1, price: 3.99 },
  { name: "milk", count: 2, price: 10.99 },
  { name: "coffee", count: 2, price: 4.99 },
  { name: "Tea", count: 1, price: 6.99 },
];

const newArr = cartItems.map((i) => {
  return i.name;
});

const newArr2 = cartItems.map(i => {  return i.name;});

const newArr3 = cartItems.map(i => i.name);






// console.log(newArr);
console.log(newArr3);

// const htmlProdcuts = cartItems((i) => {
//     return `<div class="card"> <h3>${i.name}</h3><p>${i.price}</p></div>`
// })
