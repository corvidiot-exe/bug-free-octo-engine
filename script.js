let clicks = 0;

function sayHello() {
    clicks++;

    if (clicks === 1) {
        alert("WHY DID YOU CLICK IT");
    } else if (clicks === 2) {
        alert("STOP CLICKING");
    } else if (clicks === 3) {
        alert("I'M SERIOUS");
    } else if (clicks === 4) {
        alert("THIS IS YOUR FOURTH WARNING");
    } else if (clicks === 5) {
        alert("you have been warned.");
    } else {
        alert("OK FINE, CLICK ALL YOU WANT");
    }
}
