// foreach: 
const cartItems = [
    {name: "coffee", count: 2, price: 4.99},
    {name: "car", count: 1, price: 3.99},
    {name: "milk", count: 2, price: 10.99},
    {name: "coffee", count: 2, price: 4.99},
    {name: "Tea", count: 1, price: 6.99},
]
let total = 0;
const newArr = []

cartItems.forEach((i, k, x) => {
    console.log(x);
    
    
    total = total + i.price;
    newArr.push(i.price)
    // console.log(total); 
    // return total;
}
)

// cartItems.forEach((i) => {
//     total = total + i.price;
//     newArr.push(i.price)
//     console.log(total); 
//     return total;
// }
// )

console.log(newArr);


