let form = document.getElementById("form");
let toDoList = document.getElementById("toDo");
let i1 = form.elements["title"];
let i2 = form.elements["description"];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let clearButton = document.createElement("button");
    let list = document.createElement("li");
    let title = document.createElement("h2");
    let description = document.createElement("p");
    title.textContent = i1.value;
    description.textContent = i2.value;
    clearButton.setAttribute("id", "clearButton");
    clearButton.textContent = "Remove"
    toDoList.appendChild(list);
    list.appendChild(title);
    list.appendChild(description);
    list.appendChild(clearButton);
    i1.value = "";
    i2.value = "";
    clearButton.addEventListener("click", function() {
        clearButton.parentNode.remove();
    })
});
