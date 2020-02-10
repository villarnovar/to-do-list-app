let submit = document.getElementById("main-button");
let input = document.getElementById("text2");
let clear = document.querySelector("#clear")
let unorderedList = document.querySelector("ul");
let taskList;



document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("keys")){
        taskList = JSON.parse(localStorage.getItem("keys"));
    }else{
        taskList = [];
    }
    taskList.forEach(eachList=>{
        let newLi = document.createElement("li");
        newLi.className = "li";
        let icon = document.createElement("i");
        icon.className = "icon";
        icon.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newLi.innerText = eachList;
        newLi.appendChild(icon);
        unorderedList.appendChild(newLi);
    })
});

submit.addEventListener("click", function(e){
    if(input.value == " "){
        alert("Type a to-do");
        
    }
        e.preventDefault();
        let newLi = document.createElement("li");
        newLi.className = "li";
        newLi.innerHTML = input.value;
        let icon = document.createElement("i");
        icon.className = "icon";
        icon.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newLi.appendChild(icon);
        unorderedList.appendChild(newLi);
        outputList(input.value);
        input.value =" ";
});

function outputList(saveList){
    if(localStorage.getItem("keys")){
        taskList = JSON.parse(localStorage.getItem("keys"));
    }else{
        taskList = [];
    }
    taskList.push(saveList);
    localStorage.setItem("keys", JSON.stringify(taskList));
};

function removesinglelist(singleList){
    if(localStorage.getItem("keys")){
        taskList = JSON.parse(localStorage.getItem("keys"));
    }else{
        taskList = [];
    }
    taskList.forEach(function(eachList, index) {
        if(singleList.textContent === eachList){
            taskList.splice(index, 1);
        }
    })
    localStorage.setItem("keys", JSON.stringify(taskList));
};

unorderedList.addEventListener("click", (icon)=>{
    if(icon.target.parentElement.classList.contains("icon")){
        icon.target.parentElement.parentElement.remove();
    }
    removesinglelist(icon.target.parentElement.parentElement);
});

clear.addEventListener("click", ()=>{
    unorderedList.innerText ="";
    localStorage.clear();
    taskList = [];
});
