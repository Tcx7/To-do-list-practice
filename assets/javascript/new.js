const addTodoList = document.getElementById("toDoList"); //variable to fetch toDoList from HTML div
const compList = document.getElementById("compList");
document.getElementById("submit-btn").addEventListener("click", btnClicked);

function btnClicked() {
  var userInput = document.getElementById("userInput");
  var divText = document.createTextNode(userInput.value); //variable to create the value from user input
  const delBtn = document.createElement("button"); //variable to create element for button
  const compBtn = document.createElement("button");
  delBtn.addEventListener("click", (e) => {
    //(e)is mouse event!!!
    addTodoList.removeChild(createDiv);
  });
  compBtn.addEventListener("click", (e) => {
    console.log("eee");
    compList.appendChild(createDiv);
    createDiv.removeChild(compBtn);
    delBtn.addEventListener("click", (e) => {
      //(e)is mouse event!!!
      compList.removeChild(createDiv);
    });
  });
  var createDiv = document.createElement("li"); //variable to create <div></div>
  createDiv.appendChild(divText); // list(<li></li>) grabs listText(user input) and store it inside
  delBtn.innerHTML = "Delete"; //stores "Delete" into variable button
  compBtn.innerHTML = "Complete";
  compBtn.classList.add("complete");
  delBtn.classList.add("delete");
  createDiv.appendChild(divText);
  createDiv.appendChild(delBtn); // deleteBtn gets added with the <li></li>
  createDiv.appendChild(compBtn);
  addTodoList.appendChild(createDiv);
}
