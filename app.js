
// function GetUserGender() {
//   let userGender;
//   while (true) {
//     userGender = prompt("Please enter your gender (male or female):").toLowerCase();

//     if (userGender === "male") {
//       alert("Welcome, Mr. " + userName);
//       break;
//     } else if (userGender === "female") {
//       alert("Welcome, Ms. " + userName);
//       break;
//     } else {
//       alert("Invalid input. Please enter 'male' or 'female'.");
//     }
//   }
//   return userGender;
// }





// let answers = [];

// let userName = prompt("Please enter your name:");
// answers.push(userName);

// let userTitle = GetUserGender();
// answers.push(userTitle);

// let Age = prompt("Please enter your Age:");
// answers.push(Age);

// let drinkType = prompt("Would you like a hot or cold drink?");
// answers.push(drinkType);

// let drinkName = prompt("Please enter the name of the drink you want:");
// answers.push(drinkName);

// alert("Your " + drinkType + " " + drinkName + " is getting prepared.");

// let confirmMessage = "Hello, " + userName + "! You ordered a " + drinkType + " " + drinkName + ".";
// if (confirm(confirmMessage)) {
//   console.log(confirmMessage);
// } else {
//   console.log("User canceled the order.");
// }


// for (let i = 0; i < answers.length; i++) {
//   console.log("Answer " + (i + 1) + ": " + answers[i]);
// }
let userName, Age, userTitle, drinkType, drinkName;
var checkboxes=document.querySelectorAll("ch");
function handleCheckboxClick(even){

  checkboxes.forEach((checkbox) => {
    if (checkbox !== even.target) {
      checkbox.checked = false;
    }
  });
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckboxClick);
});

let sub = document.getElementById("sub");
sub.onclick = function collectDrinkOrder(e) {
  e.preventDefault();
  userName = document.querySelector('#name').value;
  Age = document.querySelector('#age').value;
  // userTitle=document.getElementById("gender");
  // let gender =userTitle.options[userTitle.selectedIndex].text;
  var checkboxes=document.querySelectorAll("#ch");

  let yes;

    if (checkboxes[0].checked == true) {
      yes = "male";
    } else{
      yes = "female";
    }

  drinkType=document.getElementById("drink_type");
  let text =drinkType.options[drinkType.selectedIndex].text;
  
  drinkName = document.querySelector('#drink_name').value;

  const div = document.getElementById("divo");
  let par = document.createElement("p");
  div.appendChild(par);
  let ul = document.createElement("ul");
  div.appendChild(ul);
  let li1 = document.createElement("li");
  ul.appendChild(li1);
  let li2 = document.createElement("li");
  ul.appendChild(li2);
  let li3 = document.createElement("li");
  ul.appendChild(li3);

  par.innerHTML = userName;
  li1.innerHTML = yes;
  li2.innerHTML = Age;
  li3.innerHTML = text + " " + drinkName;
  document.body.appendChild(div);
}