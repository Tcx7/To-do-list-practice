var toDoList = [];
var compList = [];

document.getElementById("submit-btn").addEventListener("click", btnClicked);

function btnClicked() {
  let userInput = document.getElementById("userInput"); //variable for user input
  let list = document.createElement("li"); //variable to create <li></li>
  let listText = document.createTextNode(userInput.value); //variable to create the value from user input
  let addTodoList = document.getElementById("toDoList"); //variable to fetch toDoList from HTML div
  let delBtn = document.createElement("button"); //variable to create element for button

  list.appendChild(listText); // list(<li></li>) grabs listText(user input) and store it inside
  //asign a class id into a li
  console.log(list); //testing if user input into list works
  delBtn.innerHTML = "Delete"; //stores "Delete" into variable button
  delBtn.addEventListener("click", deleteItem); //adds event listener for the button on click
  list.appendChild(delBtn); // deleteBtn gets added with the <li></li>
  addTodoList.appendChild(list); //stores user input + delete btn into the to do list
  toDoList.push(document.getElementById("userInput").value); //this stores every user input into the array
  console.log(document.getElementById("userInput").value);
  console.log(toDoList);
}
function deleteItem() {
  const x = document.getElementById("toDoList");
  x.removeChild(toDoList.firstElementChild);
}

// function deleteItem() {}
// delBtn.setAttribute("id", "deleteCurrent");
//console.log(delBtn);
// let list = document.createElement("li");
// let listText = document.createTextNode(`${userInput}`);
// let addTodoList = document.getElementById("toDoList");
// list.appendChild(listText);
// console.log(list);
// addTodoList.appendChild(list);
/*
for (let i = 0; i < toDoList.length; i++) {
   document.getElementById(
    "toDoList"
  ).innerHTML += `<ul><li>${toDoList[i]}</li></ul>`;
}

 for (let i = 0; i < toDoList.length; i++) {
    document.getElementById(
      "toDoList"
    ).innerHTML += `<ul><li>${toDoList[i]}</li></ul>`;
  }

document.getElementById("add_to_me").innerHTML += 

arr.push("Hola");


function create() {
        var h1 = document.createElement('h1');
        h1.textContent = "New Heading!!!";
        h1.setAttribute('class', 'note');
        document.body.appendChild(h1);
      }
*/
