const addTodoList = document.getElementById("toDoList"); //variable to fetch toDoList from HTML div
const compList = document.getElementById("compList");
var i = 0;

document.getElementById("submit-btn").addEventListener("click", btnClicked);

function btnClicked() {
  var userInput = document.getElementById("userInput");
  var divText = document.createTextNode(userInput.value); //variable to create the value from user input
  var createDiv = document.createElement("li"); //variable to create <div></div>
  createDiv.classList.add(`list-${i}`);
  const delBtn = document.createElement("button"); //variable to create element for button
  const compBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  delBtn.addEventListener("click", (e) => {
    //(e)is mouse event!!!
    addTodoList.removeChild(createDiv);
  });
  compBtn.addEventListener("click", (e) => {
    compList.appendChild(createDiv);
    createDiv.removeChild(compBtn);
    delBtn.addEventListener("click", (e) => {
      //(e)is mouse event!!!
      compList.removeChild(createDiv);
    });
  });
  //edit below
  editBtn.addEventListener("click", (e) => {
    userInput.focus();
    createDiv.textContent = userInput.value;
    delBtn.innerHTML = "Delete"; //stores "Delete" into variable button
    delBtn.classList.add("delete");
    compBtn.innerHTML = "Complete";
    compBtn.classList.add("complete");
    editBtn.innerHTML = "Edit";
    createDiv.appendChild(editBtn);
    createDiv.appendChild(compBtn);
    createDiv.appendChild(delBtn);
  });
  //edit above
  delBtn.innerHTML = "Delete"; //stores "Delete" into variable button
  delBtn.classList.add("delete");
  compBtn.innerHTML = "Complete";
  compBtn.classList.add("complete");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add(`edit-${i}`);
  createDiv.appendChild(divText);
  createDiv.appendChild(editBtn);
  createDiv.appendChild(compBtn);
  createDiv.appendChild(delBtn); // deleteBtn gets added with the <li></li>
  addTodoList.appendChild(createDiv);
  i++;
  userInput.value = "";
}
