let userInfoObject = {};

function getUserInfo() {
  userInfoObject.name = prompt(
    "Welcome to x army program. Please enter your Name.",
  );
  userInfoObject.age = prompt("Please enter your Age.");
  userInfoObject.gender = prompt("Please enter your Gender (male/female).");

  canJoin(userInfoObject);
}

function canJoin(object) {
  const gender = userInfoObject.gender;
  const age = Number(userInfoObject.age);
  let result = false;

  if (
    (gender === "male" && age >= 18 && age <= 40) ||
    (gender === "female" && age >= 20 && age <= 35)
  ) {
    result = true;
  }

  notifyUser(result);
}

function notifyUser(boolean) {
  if (boolean) {
    alert("You can join the x army program!");
  } else {
    alert("You can NOT join the x army program!");
  }
}

getUserInfo();
