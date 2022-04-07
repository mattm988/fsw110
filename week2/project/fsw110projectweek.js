var a = document.createElement('a');
var linkText = document.createTextNode("Google");
a.appendChild(linkText);
a.title = "Google";
a.href = "http://google.com";
document.body.appendChild(a);

var a2 = document.createElement('a');
var linkText2 = document.createTextNode("     W3Schools");
a2.appendChild(linkText2);
a2.title = "   W3Schools";
a2.href = "http://w3schools.com";
document.body.appendChild(a2);


var a3 = document.createElement('a');
var linkText3 = document.createTextNode("      Bryan University Canvas");
a3.appendChild(linkText3);
a3.title = "   Bryan University Canvas";
a3.href = "http://bryanuniversity.instructure.com";
document.body.appendChild(a3);

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
const footer = document.createElement("footer");
const t= document.createTextNode("Copyright 2022");
footer.appendChild(t);
document.body.appendChild(footer)
