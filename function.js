let site = document.querySelector(".sidebar"); 
let icon = document.querySelector(".fa-bars"); 

function slide() {
    if (site.classList.contains("active")) { 
        site.classList.remove("active"); 
    } else {
        site.classList.add("active"); 
    }

}
document.addEventListener("click",function(event){
    if(!site.contains(event.target)&&!icon.contains(event.target)){
        site.classList.remove("active");
    }
});
//slidebar2
let site2 = document.querySelector(".slidebar2"); 
let icon2 = document.querySelector(".fa-solid.fa-user"); 

function slide2() {
    if (site2.classList.contains("active2")) { 
        site2.classList.remove("active2"); 
    } else {
        site2.classList.add("active2");
    }
}
document.addEventListener("click", function (evt) {
    if (!site2.contains(evt.target) && !icon2.contains(evt.target)) {
        site2.classList.remove("active2");
    }
});
//slidebar3
let site3 = document.querySelector(".slidebar3"); 
let icon3 = document.querySelector(".fa-solid.fa-ellipsis"); 

function slide3() {
    if (site3.classList.contains("active3")) { 
        site3.classList.remove("active3"); 
    } else {
        site3.classList.add("active3");
    }
}
document.addEventListener("click", function (evt1) {
    if (!site3.contains(evt1.target) && !icon3.contains(evt1.target)) {
        site3.classList.remove("active3");
    }
});
/* todo list now*/
let date1=document.getElementsByClassName("demo1").textContent=Date();
function addItem() {
    const inputText = document.getElementById("pol").value;
    if (inputText === "") {
        alert("list is empty");
        return; // Don't add empty items
    }

    const li = document.createElement("li");
    li.textContent = inputText;
    li.classList.add("litodo");
    document.getElementById("itemList").appendChild(li);
    const check=document.createElement("input");
    check.type="checkbox";
    check.classList.add("checkl");
    li.appendChild(check);
    //edit wala option yhn dala hai
    let edit=document.createElement("p");
    edit.textContent="edit";
    edit.onclick=function(){
        let prom=prompt("Edit your task");
        li.textContent=prom;
    li.appendChild(edit);
    check.classList.add("checkl");
    li.appendChild(check);
    btn.classList.add("todobtn");
    li.appendChild(btn);
    li.appendChild(edit);




    }
    check.onclick=function evy(){
        alert("your task is complete");
        li.classList.add("hifi");
    }
   
    // Clear the input field after adding the item
    document.getElementById("pol").value = "";
    let btn=document.createElement("button");
    btn.classList.add("todobtn");
    btn.textContent="remove";
    btn.onclick=function (){
    li.remove();
    
    }
    li.appendChild(btn);
    li.appendChild(edit);


    
}
/*now add text section*/

const textbtn = document.querySelector(".text3");
const textarea = document.querySelector(".textbtn");

// Add click event to the button
textbtn.onclick = function () {
    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.classList.add("newdivclass");
    if(textarea.value===""){
        alert("can't save empty box");
        return;
    }
    else{
    newDiv.textContent = textarea.value;}
    
    // Append the new div to the container    
    const container = document.getElementById("container");
    container.appendChild(newDiv);
    
    
    // Clear the textarea after saving
    textarea.value = "";
    let btn=document.createElement("button");
    btn.textContent="Delete";
    btn.classList.add("btntextremove");
    btn.onclick=function(){
        newDiv.remove();
    }
    
    newDiv.appendChild(btn);
}

// Add an event listener to the button with id "opt1"
let cooop=document.getElementById("volkov");
        function power() {
            cooop.classList.add("modechanger");
        }
       let bool= document.getElementsByClassName("coolp");
       bool.innerText="hio";
