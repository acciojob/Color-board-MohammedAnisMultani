const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = 500;

for(let i=0; i<squares; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", () => addColor(square))
    square.addEventListener("mouseout", () => removeColor(square))
container.append(square);
}

function addColor(e){
    let color = randomColor();
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(e){
    e.style.background = "#1d1d1d";
    e.style.boxShadow = '0 0 2px #000'
}


function randomColor(){
     return colors[Math.floor(Math.random()*colors.length)]
     
}
