let arr = ["car", "book", "wall", "driving a car", "read a book"]

const filteredArray = arr.filter((i) => {
  
    return i.length > 5
})

console.log(filteredArray);

// i.length > 5 // tre

let findArry = arr.find((i) => {
    return i.length > 5
})

console.log(findArry);


