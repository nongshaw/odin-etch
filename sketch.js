console.log("hi");

let color = "black";


// Create 16x16 grid
function createPad(size){
    let pad = document.querySelector(".pad");
    let squares = pad.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        pad.insertAdjacentElement("beforeend", square);
    }
}

createPad(16);

// Enable user to change size of sketchpad
function changeSize(input) {
    if(input >=2 && input <=100) {
        createPad(input);
    } else {
        console.log("invalid input");
    }
}

function colorSquare() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(selection) {
    color = selection;
}

function resetPad() {
    let pad = document.querySelector(".pad");
    let squares = pad.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white"); 
}