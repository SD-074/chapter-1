// Join the army app:

// logic: man > 18 & < 40; woman > 20 & < 35;

// write a function getUserInfo that propmpt the user for (name, age, gender)
// Store the user input in array
// write another function canJoin that to check if the user can join the army or not
// wirte a third function notifyUser to notify the user if they can join the army or not

let userInfoArray = []
const user = {}

function getUserInfo() {

    let userName = prompt("Welcome to x army program, please enter your name.");
    let userGender = prompt("Are you man or woman?");
    let userAge = prompt("How old are you?");
    // userInfoArray.push(userName);
    // userInfoArray.push(userGender);
    // userInfoArray.push(userAge);
    user.name = userName;
    user.gender = userGender;
    user.age = userAge;
    canJoin(user);
}


function canJoin(user) {
    let result = false;
    console.log(user);
    
    if (user.gender == "man" && user.age >= 18 && user.age <= 40) {
        // result = true;
        user.canJoin = true;
    
        
    } else if (user.gender == "woman" && user.age >= 18 && user.age <= 40) {
        // result = true;
        user.canJoin = true;

    } else {
        // result = false;
        user.canJoin = false;

    }

    notifyUser(user);
}

// function canJoin(userInfoArray) {
//     let result = false;
//     if (userInfoArray[1] == "man" && userInfoArray[2] >= 18 && userInfoArray[2] <= 40) {
//         result = true;
//     } else if (userInfoArray[1] == "woman" && userInfoArray[2] >= 18 && userInfoArray[2] <= 40) {
//         result = true;
//     } else {
//         result = false;
//     }
//     notifyUser(result);
// }

function notifyUser(user) {
    console.log("notify fun", user);
    
    if(user.canJoin == true) {
        alert(`Welcome to army ${user.name}`);
    } else {
        alert(`Sorry, ${user.name} you can't join the army.`);
    }
}

// function notifyUser(result) {
//     if(result == true) {
//         alert("Welcome to army");
//     } else {
//         alert("Sorry, you can't join the army.");
//     }
// }

getUserInfo();