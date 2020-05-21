

function makeGrid(rows, cols) {
    let squares = document.querySelector('#squares');
    for (let i = 0; i < cols; i ++) {
        const col = document.createElement("div")
        col.classList.add("col")
        squares.appendChild(col)
        for (j = 0; j < rows; j ++) {
            const box = document.createElement("div")
            box.classList.add("box")
            box.style.height = Math.floor(960/16)
            col.appendChild(box)
        }
    }
    let elems = document.getElementsByClassName('box');
    let squaresDim = parseInt(getComputedStyle(document.getElementById('squares')).width)
    for(let i = 0; i < elems.length; i++) {       
        elems[i].style.width = `${Math.floor(squaresDim/cols)}px`;
        elems[i].style.height = elems[i].style.width;
    }
}

makeGrid(15, 30)

function lowGrid (e) {   


    const squares = document.getElementById("squares");
    squares.textContent = '';

    makeGrid(15, 30)

    let elems = Array.from(document.getElementsByClassName("box"));
        elems.forEach(elem =>  elem.addEventListener('mouseover', changeColour))

}

function midGrid (e) {   


    const squares = document.getElementById("squares");
    squares.textContent = '';

    makeGrid(30, 60)

    let elems = Array.from(document.getElementsByClassName("box"));
        elems.forEach(elem =>  elem.addEventListener('mouseover', changeColour))

}

function hiGrid (e) {   


    const squares = document.getElementById("squares");
    squares.textContent = '';

    makeGrid(60, 120)

    let elems = Array.from(document.getElementsByClassName("box"));
        elems.forEach(elem =>  elem.addEventListener('mouseover', changeColour))

}

function clearGrid (e) {
    let boxes = Array.from(document.getElementsByClassName("box"))
    boxes.forEach(box => {
        box.style.backgroundColor = ""
    })
    }

function changeColour () {
    this.style.backgroundColor = "rgb(46, 46, 46)";
}

function changeColourRGB () {
    let ran1 = Math.round(Math.random() * 255);
    let ran2 = Math.round(Math.random() * 255);
    let ran3 = Math.round(Math.random() * 255);
    this.style.backgroundColor = `rgb(${ran1}, ${ran2}, ${ran3})`;
}

function chooseGrey () {
    let elems = Array.from(document.getElementsByClassName("box"));
    elems.forEach(elem =>  elem.removeEventListener('mouseover', changeColourRGB))
    elems.forEach(elem =>  elem.addEventListener('mouseover', changeColour))
}

function chooseRGB () {
    let elems = Array.from(document.getElementsByClassName("box"));
    elems.forEach(elem =>  elem.removeEventListener('mouseover', changeColour))
    elems.forEach(elem =>  elem.addEventListener('mouseover', changeColourRGB))
}


chooseGrey()

let clearButton = document.getElementById("clear")
clearButton.addEventListener('click', clearGrid)

let greyButton = document.getElementById("grey-button")
greyButton.addEventListener('click', chooseGrey)

let colourButton = document.getElementById("colour-button")
colourButton.addEventListener('click', chooseRGB)

let lowButton = document.getElementById("low-button")
lowButton.addEventListener('click', lowGrid)

let midButton = document.getElementById("mid-button")
midButton.addEventListener('click', midGrid)

let hiButton = document.getElementById("hi-button")
hiButton.addEventListener('click', hiGrid)