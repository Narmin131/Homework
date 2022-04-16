const input = document.querySelector(".ToDoInput");
const addBtn = document.querySelector(".btn-todo");
const deleteAllBtn = document.querySelector(".deleteAll");
const deletebtn = document.querySelectorAll(".delete");
const ul = document.querySelector(".myUl");
const toDoApp = document.querySelector(".toDoApp");


// ToDoApp
const ToDoApp = () =>{
     
    if(input.value === ""){
        alert("Please add new item..");
    }
    else{
     // Create li
    const li = document.createElement("li");
    li.innerHTML = input.value;
    li.className = "todo-li";

    // Create i
    const i = document.createElement("i");
    i.classList = "fa-solid fa-trash delete";

    li.appendChild(i);
    ul.appendChild(li);

    input.value = "";
    }

}
addBtn.addEventListener("click",ToDoApp);


//Delete item
function DeleteItem(e){
  const item = e.target;
  if(item.className === "fa-solid fa-trash delete"){
      const itemParent = item.parentElement;
      itemParent.remove();
  }
  e.prevenDefault();
}

ul.addEventListener('click',DeleteItem);


// Delete all items
function DeleteAllItems(){
    ul.innerHTML = '';
}
deleteAllBtn.addEventListener("click",DeleteAllItems);



// Checked style
function ChangeStyle(a){
  const item2 = a.target;
  if(item2.className === "todo-li"){
     item2.classList.add("toggle");
  }
  else{
    item2.classList.remove("toggle");
  }
  e.prevenDefault();
}

ul.addEventListener('dblclick',ChangeStyle);


// Enter key activated
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addBtn.click();
    event.preventDefault();
    
  }
});