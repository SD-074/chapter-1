let arr = ["Car", "Book", "Child"]
// ["+ Car", "+ Book", "+ Child"]
// "+ " + "Khaled" = "+ Khaled"

// const mapResult = arr.map((ele) => {
    
//     console.log(ele);
//     return ele

// })

const newArr = arr.map((i) => {
    console.log("this is what i is: " + i);
    return i + " blabla"
    
})

console.log(newArr);



// function funExample(element) {
//     console.log(element);
    
    
// }

// const ex = (ele) => {
//     console.log(ele);
// }

// funExample("car")
// ex("book")
// console.log(mapResult);

