// Join the army app:

// logic: man > 18 & < 40; woman > 20 & < 35;

// write a function getUserInfo that propmpt the user for (name, age, gender)
// Store the user input in array
// write another function canJoin that to check if the user can join the army or not
// wirte a third function notifyUser to notify the user if they can join the army or not

let userInfoObj = {};
function getUserInfo() {
    alert("Welcome to the Army! We will need a few Informations before we start.")

    const name = prompt("Enter your Name:");
    const age = parseInt(prompt("Enter your age:"));
    const gender = prompt("Enter your gender (male/female):");

    if (name && !isNaN(age) && gender) {
        console.log("we got here")

        userInfoObj.name = name;
        userInfoObj.age = age;
        userInfoObj.gender = gender;

        console.log(JSON.stringify(userInfoObj));
    }
    else {
        console.log("Mission failed")
        console.log(JSON.stringify(userInfoObj));

    }
    alert("Welcome to the army program " + userInfoObj.name + "!");

    return userInfoObj;
}



function canJoin(obj) {
    alert("We will now check if you are eligable to join");


    if (obj.gender == "male") {
        if (obj.age > 18 && obj.age < 40) {
            var check = true;
            return check;
        }
        else {
            let check = false;
            return check;
        }
    }


    else if (obj.gender == "female") {
        if (obj.age > 20 && obj.age < 35) {
            let check = true;
            return check;
        }
        else {
            let check = false;
            return check;

        }

    }
    else {
        alert("We cant handle your case yet, have patients")
    }
}


function notifyUser(bool) {
    bool ? alert("welcome the the Army, you pass!") : alert("Nope, you dont fit, get out!")
}

let userObj = getUserInfo();

let validation = canJoin(userObj);

notifyUser(validation);