let submit = document.getElementById("main-button");
let input = document.getElementById("text2");
let clear = document.querySelector(".clear")
let list = document.querySelector("ul");
let content="";
let array;

if(localStorage.getItem("keys")){
    array = JSON.parse(localStorage.getItem("keys"));
}else{
    array = [];
}
localStorage.setItem("keys", JSON.stringify(array));
let data =JSON.parse(localStorage.getItem("keys"));


submit.addEventListener("click", function(e){
    e.preventDefault();
    content = input.value;
    outputList(content);
    array.push(content);
    localStorage.setItem("keys", JSON.stringify(array));
    input.value ="";
});
data.forEach(eachKeys=>{
    outputList(eachKeys);
})
 
function outputList(outputText){
    let newLi = document.createElement("li");
    list.appendChild(newLi);
    newLi.innerText = outputText;
}
clear.addEventListener("click", ()=>{
    localStorage.clear();
    list.innerText ="";
    array = [];
})
