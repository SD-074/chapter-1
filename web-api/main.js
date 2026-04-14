const body = document.body; // html body element
// how can we select a specific:

// console.log("hi from js");
let title = document.getElementById("title");
// document.getElementsByClassName("title")
const cartItems = [
  {
    name: "coffee",
    description: "prodcut description goes hear... our..",
    price: 4.99,
    img: "https://images.unsplash.com/photo-1761839257789-20147513121a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "car",
    description: "prodcut description goes hear... our..",
    price: 3.99,
    img: "https://images.unsplash.com/photo-1761839257789-20147513121a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "milk",
    description: "prodcut description goes hear... our..",
    price: 10.99,
    img: "https://images.unsplash.com/photo-1761839257789-20147513121a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
 
  {
    name: "Tea",
    description: "prodcut description goes hear... our..",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1761839257789-20147513121a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

// cartItems.forEach((i) => {
//     let img = document.createElement("img")
//     img.src = i.img
//     let pName = document.createElement("h3")
//     pName.innerText = i.name
//     let div = document.createElement("div")
//     div.appendChild(img)
//     div.appendChild(pName)
//     body.appendChild(div)

// });

// const userInput = prompt("input something");
// const buttonInput = document.createElement("button");
// buttonInput.innerText = userInput;
// buttonInput.style.color = "white";
// buttonInput.style.backgroundColor = "red";
// body.appendChild(buttonInput);




title.innerText = "Hi from js";
title.style.backgroundColor = "blue";

let button = document.createElement("button");
button.innerText = "click me from js";
button.style.color = "white";
button.style.backgroundColor = "blue";
body.appendChild(button);

function alertHandler (){
    const userInput = prompt("give me the content of the new button:")
    const btn = document.createElement('button');
    btn.innerText = userInput;
    btn.addEventListener("click", () => btn.style.backgroundColor = "green")
    // btn.addEventListener("click", (userInput) => btn.style.backgroundColor = userInput)
    body.appendChild(btn)
}




let arr = [];
const num = 5;
arr.push(num);

// alert("hello from js");
// prompt("hidsf")
