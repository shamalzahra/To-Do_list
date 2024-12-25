function addItem() {
    const inputText = document.getElementById("taskInput").value; // Updated ID
    if (inputText === "") {
        alert("List is empty");
        return; // Prevent adding empty items
    }

    const li = document.createElement("li");
    li.textContent = inputText;
    li.classList.add("litodo");

    document.getElementById("taskList").appendChild(li); 
    let chc=document.createElement("input");
    chc.type="date";
    chc.classList.add("daterem");
    li.appendChild(chc);
    let currentDate = new Date().toISOString().split("T")[0]; // Splits mein change kia hai mainai yhn

    // Use onchange event to check the selected date
    chc.onchange= function () {
        if (chc.value === currentDate) {
            alert("your task is ready!");
        }
    };
    


    
    // Clear the input field after adding the item
    document.getElementById("taskInput").value = ""; // Updated ID

    // Create and append a remove button
    const btn = document.createElement("button");
    btn.classList.add("btnrem");
    btn.textContent = "Remove";
    btn.onclick = function () {
        li.remove();
    };
    li.appendChild(btn);
}
