let userInfoArray = [];

function getUserInfo() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let gender = prompt("Enter your gender (man/woman):");

  return [name, age, gender];
}

// 2. Store the user input in an array
userInfoArray = [userName, userAge, userGender];

//3. write another function canJoin that to check if the user can join the army or not
function canJoin(array) {
  let age = array[1];
  let gender = array[2];

  if (gender === "man" && age > 18 && age < 40) {
    return true;
  } else if (gender === "woman" && age > 20 && age < 35) {
    return true;
  } else {
    return false;
  }
}

//4. Wrte a third function notifyUser to notify the user if they can join the army or not
function notifyUser(result) {
  if (result) {
    alert("You can join!");
  } else {
    alert("you cannot join.");
  }
}
