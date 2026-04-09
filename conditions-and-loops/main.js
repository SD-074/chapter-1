// // input method
// // conditions
// //      if / if-else / default / ternary operator ?:
// //      switch
// //      for loop
// //      continue / break
// //      while loop

// // let userAge = prompt("What is your age: ");

// // console.log(userAge);


// if (userAge >= 16 && userAge < 60) {

//     let msg = "Welcome to our school!"
//     // let notAccepted = "Sorry, you are to young!"
//     console.log(msg);
//     alert(msg);
    

// } else if (userAge >= 60 && userAge < 90) {
//     let userInput = prompt("Did you have a d l before? please answer by yes or no")

//     userInput == "yes" ? alert("Great, we will contact you soon!") : alert("Sorry, we can't proceed with your application!")
   




// }

// else if (userAge >= 90) {
//     alert("Sorry, we are not accepting atm!")

// }

// else {
//     alert("Sorry, you are to young!")

// }


// let a = 10;

// a >= 9 && alert("a is bigger or equal to 9")

// Switch Statement
// console.info('Switch Statement');

// let day = 3; // Change the value of day

// switch (day) {
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 6:
//   case 7:
//     console.log('Weekend');
//   default:
//     console.log('Another day');
// }

// console.log("hi");

// console.log("before the for loop");

// for (let i = 0; i < 6; i++){

//      if (i == 2){
//         continue;
//         break;
//     }

//     console.log(i);

//     console.log("in the for loop block :(");

   

   

// }

// console.log("After the for loop");


// let age = 1;
// let limiter = 0;
// while (age < 18) {
//     age < 18;

//     console.log("you are young", age);

//     age++
//     limiter++

//     if (limiter > 10)break;
    
    
// }





let userInput = prompt("What do you want to tell me:")
let coutner = 0;
const limit = 5;
while (coutner < limit) {

    let newMsg = prompt("do you have more? type done to finish the app.")
    if (newMsg != "done"){
        userInput += " | " + newMsg
    } else {
        break;
    }


    coutner++;
    if (coutner >= limit) break;


    
}

alert(userInput)








