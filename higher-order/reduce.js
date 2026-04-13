const cartItems = [
    {name: "coffee", count: 5, price: 4.99},
    {name: "car", count: 3,  price: 3.99},
    {name: "milk", count: 1,  price: 10.99},
    {name: "coffee", count: 12,  price: 4.99},
    {name: "Tea", count: 4,  price: 6.99},
]
// const mapResult = cartItems.map((i, j) => {
//     console.log(i);
//     console.log(j);

// let amount = 0;
// let total = cartItems.reduce((i, j) => {
//     // console.log(i += j.price);
    
    
//     return i += j.price;
//     // i = 0 + 4.99

//     ///////
//     // i (4.99) += 3.99

//     ///// 3 it
//     // i (8.98) += 10.99

// }, 0)

// console.log(total);


// {items: 5, total: 50}
const rsult = cartItems.reduce((i, j) => {

    // 1

    i.items += 1; // i? 
    i.total += j.price;
    return i;

}, {items: 0, total: 0})
console.log(rsult);

// console.log(total);

//  {name: "coffee", count: 5, price: 4.99},
//     {name: "car", count: 3,  price: 3.99},
//     {name: "milk", count: 1,  price: 10.99},

// coffee 17 3.99
// tea    4  7.99

// total 5555
// })
// const reduceResult = cartItems.reduce((previousValue, currentValue) => {
//     console.log(`Previous value is: `, previousValue);
//     console.log(`Current value is: `, currentValue);
//     console.log("/////// /////// \n");

// }, "Khal")

// arr.map(()=>{})
// arr.reduce(()=> {}, startValue)
// console.log(reduceResult);



const reduceResult2 = cartItems.reduce((i, j, k, l) => {
    
}, {})
// return price
// return price and count of items
// return list of product, with count and price

// cartItems.reduce((acc, item, index) => {

//     console.log("I'm iteration: " + index , acc, item);
    
// })

