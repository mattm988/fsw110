const h1 = document.createElement("H1");
const textNode = document.createTextNode("Welcome to my JS site");
h1.appendChild(textNode);
document.body.appendChild(h1)

const para = document.createElement("P");
const node = document.createTextNode("All of this was created with Javascript");

para.appendChild(node);
document.body.appendChild(para)
let data = ["Ram", "Shyam", "Sita", "Gita"];

const list = document.createElement("ol");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
  document.body.appendChild(list);
});