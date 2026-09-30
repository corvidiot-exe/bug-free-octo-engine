let clicks = 0;
let adventures = 0;

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

function adventure() {
   adventures++;

    if (adventures === 1) {
        alert("GRANDMA: let me go back to sleeeeeeep");
    } else if (adventures === 2) {
        alert("GRANDMA: 5 more minutes");
    } else if (adventures === 3) {
        alert("GRANDMA: *sigh* fiiiine");
    } else if (adventures === 4) {
        alert("GRANDMA: I shall read you a story, then");
    } else if (adventures === 5) {
        alert("GRANDMA: Once upon a time, there was a little one, just like you, who...oughs- COUGH! coUGH CouGH cough COUGH COUGHCOUGH");
    } else if (adventures === 6) {
        alert("GRANDMA: don't worry dear. just a case of your Mawmaw's lung bein' bad. I'm stronger than that, right, Pappy? Hahaha-cough COUGH cough...");
    } else if (adventures === 7) {
        alert("VOICE: ...that was the last time any of us heard her laugh. That cough, the sirens.... still haunts me.");
    }  else {
        alert("She's been dead for " + adventures + " years. Move on." );
    }

}
