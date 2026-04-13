const cartItems = [
  { name: "tea", price: 6.99 },
  { name: "coffee", price: 4.99 },
  { name: "car", price: 3.99 },
  { name: "coffee", price: 4.99 },
  { name: "milk", price: 10.99 },
  { name: "tea", price: 6.99 },
  { name: "milk", price: 10.99 },
  { name: "car", price: 3.99 },
  { name: "coffee", price: 4.99 },
  { name: "tea", price: 6.99 },
];
// 56
// map, filter, foreach
let n = 0;
cartItems.forEach((i) => {
    n += i.price;
})
// console.log(n);
// {itemCount: 0, total: 0}

let result = cartItems.reduce((n, i) => {


    n.total += i.price
    return n
    

}, {itemCount: 0, total: 0})

console.log(result);


// console.log(result);



// let result = cartItems.reduce((n, i) => {
//     return n += i.price;
// }, 0)

// console.log(result);





//

let participants = [
    { name: "s", gender: "female" },
    { name: "x", gender: "male" },
    { name: "x", gender: "other" },
    { name: "x", gender: "other" },
    { name: "x", gender: "female" },
    { name: "x", gender: "male" },
];








// let filterResult = participants.filter((i) => {
//     if(i.gender == "other"){
//         return true
//     }
// })
// let filterResult2 = participants.filter(i => i.gender == "other")
// console.log(filterResult2);



// let examples = ["car", "bar", "book"]; // replace bar of wall
// // map, filter, foreach:

// examples.forEach((i, p) => {
//   if (i == "bar") {
//     examples[p] = "wall";
//   }
// });
// console.log(examples);

// let resultArray = []
// examples.forEach((i) => {
//     if(i == "bar"){
//         i = "wall"
//     }
//     resultArray.push(i)

// })
// console.log(resultArray);
// console.log(examples);

// let forExample = examples.forEach((i) => {
//     return i;
// })
// let mapEx = examples.map((i) => {
//     return i})
// console.log(forExample);
// console.log(mapEx);

// map: generate new array
// filter: gernarte new array that fits condition
// foreach: excute func on elements of an array

// const newArr = examples.map((i) => {
//     if(i == "bar"){
//         i = "wall"
//     }
//     return i
// })
// console.log(newArr);
