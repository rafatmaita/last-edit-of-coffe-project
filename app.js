let userGender;
function GetUserGender(){
while (true) {
  userGender = prompt("Please enter your gender (male or female):").toLowerCase();

  if (userGender === "male") {
    alert("Welcome, Mr. " + userName);
    break; 
  } else if (userGender === "female") {
    alert("Welcome, Ms. " + userName);
    break; 
  } else {
    alert("Invalid input. Please enter 'male' or 'female'.");
  }
}
}
let answers = []; 

let userName = prompt("Please enter your name:");
answers.push(userName); 

let userTitle = GetUserGender();
answers.push(userGender); 

let drinkType = prompt("Would you like a hot or cold drink?");
answers.push(drinkType); 

let drinkName = prompt("Please enter the name of the drink you want:");
answers.push(drinkName); 

alert("Your " + drinkType + " " + drinkName + " is getting prepared.");

let confirmMessage = "Hello, " + userName + "! You ordered a " + drinkType + " " + drinkName + ".";
if (confirm(confirmMessage)) {
  console.log(confirmMessage);
} else {
  console.log("User canceled the order.");
}


for (let i = 0; i < answers.length; i++) {
  console.log("Answer " + (i + 1) + ": " + answers[i]);
}