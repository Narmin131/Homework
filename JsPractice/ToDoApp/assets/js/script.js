const input = document.querySelector(".ToDoInput");
const addBtn = document.querySelector(".btn-todo");
const deleteAllBtn = document.querySelector(".deleteAll");
const deletebtn = document.querySelectorAll(".delete");
const ul = document.querySelector(".myUl");
const liItem = document.querySelectorAll(".todo-li");
const toDoApp = document.querySelector(".toDoApp");


// ToDoApp
const ToDoApp = () =>{
     
    if(input.value === ""){
        alert("Please add new item..");
    }
    
    const li = document.createElement("li");
    li.innerHTML = input.value;
    li.className = "todo-li";

    const i = document.createElement("i");
    i.classList = "fa-solid fa-trash delete";

    li.appendChild(i);
    ul.appendChild(li);

    input.value = "";
    
}
addBtn.addEventListener("click",ToDoApp);


// Delete item
var i;
for (i = 0; i < deletebtn.length; i++) {
  deletebtn[i].onclick = function() {
    alert("Are you sure?")
    //  this.parentElement.remove();
    // const div = this.parentElement;
    // div.style.display = "none"
  }
}

// Delete all items
function DeleteAllItems(){
    ul.innerHTML = '';
}
deleteAllBtn.addEventListener("click",DeleteAllItems);


//Line through
// var a;
// for (a = 0; a < liItem.length; a++) {
//   liItem[a].onclick = function() {
//      this.classList.toggle("toggle");
     
//   }
// }
