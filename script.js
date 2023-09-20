const inputBox = document.getElementById("input");
const list = document.getElementById("list");
const bt = document.getElementById("bt");
bt.addEventListener("click", function() {
    if(inputBox.value === '')
    {
        alert("Please write something!");
     }
     else
     {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
     }
     inputBox.value='';
     saveData();
  });

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("tasks",list.innerHTML);
}
function show(){
    list.innerHTML = localStorage.getItem("tasks");
}
show();