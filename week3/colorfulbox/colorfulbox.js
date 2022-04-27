let square = document.createElement("div");
square.style.width = '100px'
square.style.height = '100px'
square.style.backgroundColor = 'white'
document.body.append(square)
window.addEventListener('load', function(){square.style.backgroundColor = 'black'})
square.addEventListener('mouseover', function(){square.style.backgroundColor = 'green'})
square.addEventListener('mousedown', function(){square.style.backgroundColor = 'yellow'})
square.addEventListener('mouseup', function(){square.style.backgroundColor = 'blue'})
square.addEventListener('dblclick', function(){square.style.backgroundColor = 'red'})
window.addEventListener('wheel', function(){square.style.backgroundColor = 'purple'})
