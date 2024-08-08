let hsEl = document.getElementById("hs-el");
let gsEl = document.getElementById("gs-el");
// let res = document.getElementById("restart-el");

let num1h = 0
let num2h = 0
let num3h = 0
let num1g = 0
let num2g = 0
let num3g = 0

let numTotal = 0

function addOneHome() {
    num1h += 1
    numTotal = num1h + num2h + num3h
    hsEl.textContent = numTotal
}

function addTwoHome() {
    num2h += 2
    numTotal = num1h + num2h + num3h
    hsEl.textContent = numTotal
}

function addThreeHome() {
    num3h += 3
    numTotal = num1h + num2h + num3h
    hsEl.textContent = numTotal
}

function addOneGuest() {
    num1g += 1
    numTotal = num1g + num2g + num3g
    gsEl.textContent = numTotal
}

function addTwoGuest() {
    num2g += 2
    numTotal = num1g + num2g + num3g
    gsEl.textContent = numTotal
}

function addThreeGuest() {
    num3g += 3
    numTotal = num1g + num2g + num3g
    gsEl.textContent = numTotal
}

function restart() {
    numTotal = 0
    hsEl.textContent = numTotal
    gsEl.textContent = numTotal
}