var username;
var password;
var role;

function login() {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role:");

  if (!username || !password || !role) {
    alert("Please provide all the required information.");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

login();

function calculateAverageAndLogMessage(num1, num2, num3, num4) {
  var average;

  average = (num1 + num2 + num3 + num4) / 4;
  average = Math.round(average);

  prompt("Hello, student, your average is " + average + ".");

  if (average <= 74) {
    prompt("The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    prompt("The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    prompt("The letter equivalent is A");
  } else if (average > 96) {
    prompt("The letter equivalent is A+");
  }
}

calculateAverageAndLogMessage(80, 90, 85, 95);
