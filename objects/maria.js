let user = {};

function getUserInfo() {
  user.name = prompt("Enter your name:");
  user.age = prompt("Enter your age:");
  user.gender = prompt("Enter your gender (man/woman):");
}

function canJoin() {
  if (user.gender === "man" && user.age > 18 && user.age < 40) return true;
  if (user.gender === "woman" && user.age > 20 && user.age < 35) return true;
  return false;
}

function notifyUser(result) {
  if (result) {
    alert(user.name + ", you can join the army!");
  } else {
    alert(user.name + ", you cannot join the army.");
  }
}

getUserInfo();
notifyUser(canJoin());
