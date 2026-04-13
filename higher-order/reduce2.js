const cartItems = [
  { name: "coffee", count: 5, price: 4.99 },
  { name: "car", count: 3, price: 3.99 },
  { name: "milk", count: 1, price: 10.99 },
  { name: "coffee", count: 12, price: 4.99 },
  { name: "Tea", count: 4, price: 6.99 },
];

// coffee 17 3.99
// tea    4  7.99

// total 5555

// let resultArr = []
// let total = 0
// // using forloop/foreach:
// cartItems.forEach(i => {
//     // inlcudes?
//     // how to check if object / object.name is already there?
//     let isExist = resultArr.find(j => j.name == i.name)
//     if(isExist != undefined){
//         // update resultArr by map
//         resultArr = resultArr.map(k => {
//             if (k.name == isExist.name){
//                 k.count += isExist.count;
//                 total += isExist.count * isExist.price;
//             }

//         })
//         // add the result of count * price to total

//         // console.log("No code yet....");

//     }else {
//         // add the time with its count
//         total += i.count * i.price;

//         // add the result of count * price to total
//         resultArr.push(i)
//     }

// })

// console.log(resultArr);
// console.log(total);

// Solution with reduce:

const result = cartItems.reduce(
  (i, j) => {
    // count, douplicated,
    let isDouple = i.items.some((element) => element.name == j.name);

    if (isDouple) {
      // console.log("Careful wwe have a doooll");
      // update the original array:
      i.items = i.items.map((item) => {
        if (item.name == j.name) {
          item.count += j.count;
        }
        return item;
      });
    } else {
      i.items.push(j);
    }

    i.total += j.count * j.price;

    return i;
  },
  { items: [], total: 0 },
);

console.log(result);
