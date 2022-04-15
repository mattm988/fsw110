

const makeElements = (elName, times) => {
    for (let i = 0; i < times; i ++) {
        const ele = document.createElement(elName);
        ele.innerHTML = "Hello World";
        document.body.appendChild(ele);
        ele.style.fontamily = "georgia"
     }
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        makeElements('h1', 10);
       });
       
