let clicks = 0;

function sayHello() {
    clicks++;
    if (clicks === 1) {
        alert("WHY DID YOU CLICK IT");
    } else if (clicks === 2) {
        alert("STOP CLICKING");
    } else {
        alert("OK FINE, CLICK ALL YOU WANT");
    }
}   
