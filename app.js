
function GetUserGender() {
  let userGender;
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
  return userGender;
}





let answers = [];

let userName = prompt("Please enter your name:");
answers.push(userName);

let userTitle = GetUserGender();
answers.push(userTitle);

let Age = prompt("Please enter your Age:");
answers.push(Age);

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
const div= document.getElementById("divo");
let par = document.createElement("p");
div.appendChild(par);
let ul= document.createElement("ul");
div.appendChild(ul);
let li1= document.createElement("li");
ul.appendChild(li1);
let li2= document.createElement("li");
ul.appendChild(li2);
let li3= document.createElement("li");
ul.appendChild(li3);

// let li4= document.createElement("li");
// ul.appendChild(li4);

par.innerHTML=userName;
li1.innerHTML=userTitle;
li2.innerHTML=Age;
li3.innerHTML=drinkType +" "+ drinkName;


document.body.appendChild(div);