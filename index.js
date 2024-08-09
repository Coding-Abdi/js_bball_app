let hsEl = document.getElementById("hs-el");
let gsEl = document.getElementById("gs-el");

let homeTotal = 0
let guestTotal = 0

/**
 * 
 * @param {number} increment 
 */
function addToHome(increment) {
    homeTotal += increment;
    hsEl.textContent = homeTotal;
}


function addtoGuest(increment) {
    guestTotal += increment;
    gsEl.textContent = guestTotal;
}


function restart() {
    homeTotal = 0
    guestTotal = 0
    hsEl.textContent = homeTotal
    gsEl.textContent = guestTotal
}

