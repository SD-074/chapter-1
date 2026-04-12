let userInfoObject = {};

function getUserInfo() {
  userInfoObject.name = prompt("Welcome to the army! Please enter your name:");
  userInfoObject.age = prompt("Please enter your age:");
  userInfoObject.gender = prompt("Please enter your gender (male/female):");

  return userInfoObject;
}

function canJoinArmy(object) {
  let age = parseInt(object.age);
  let gender = object.gender.toLowerCase();

  if (gender === "male" && age > 18 && age < 40) return true;
  if (gender === "female" && age > 20 && age < 35) return true;

  return false;
}

function notifyUser(isEligible) {
  if (isEligible) {
    alert(
      `Congratulations ${userInfoObject.name}! you are eligible to join the army.`,
    );
  } else {
    alert(
      `We're sorry ${userInfoObject.name}, you are not eligible to join the army.`,
    );
  }
}

let userInfo = getUserInfo();
let eligibility = canJoinArmy(userInfo);
notifyUser(eligibility);
