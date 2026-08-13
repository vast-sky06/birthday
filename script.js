// ===============================
// OPENING SCREEN
// ===============================

const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
}


// ===============================
// MEMORY PHOTO POPUPS
// ===============================

// MEMORY 1
const closePopup = document.getElementById("closePopup");

if (closePopup) {
    closePopup.addEventListener("click", function () {
        document.getElementById("photoPopup").classList.remove("show");
    });
}


// MEMORY 2
const closePopup2 = document.getElementById("closePopup2");

if (closePopup2) {
    closePopup2.addEventListener("click", function () {
        document.getElementById("photoPopup2").classList.remove("show");
    });
}


// MEMORY 3
const closePopup3 = document.getElementById("closePopup3");

if (closePopup3) {
    closePopup3.addEventListener("click", function () {
        document.getElementById("photoPopup3").classList.remove("show");
    });
}

// ===============================
// FUN / TEASING SECTION
// ===============================

const funItems = document.querySelectorAll(".fun-item");
const funMessage = document.getElementById("funMessage");

const funMessages = [
     "But somehow... you're pretty annoying faaah..🤦 one of my favourite ennoke parayanam nnu ind pashe evdennu ayshh😏",
    "The amount of drama you create deserves its own Netflix series(better to be an indian tv serial which lasts for years).🤯",
    "evdennu angane oru thonnal indel ath thonnal mathrm ayshh..(u knoww I'm way cooler than you in all ways buhaha😎) "
];

if (funMessage) {

    funItems.forEach(function (item, index) {

        item.addEventListener("click", function () {

            funMessage.textContent = funMessages[index];

        });

    });

}


// ===============================
// FINAL BIRTHDAY REVEAL
// ===============================

const revealButton = document.getElementById("revealButton");
const finalReveal = document.getElementById("finalReveal");

if (revealButton && finalReveal) {

    revealButton.addEventListener("click", function () {

        finalReveal.classList.add("show");

        revealButton.style.display = "none";

    });

}


// ===============================
// BOX POPUP
// ===============================

const boxButton = document.getElementById("boxButton");
const boxPopup = document.getElementById("boxPopup");
const closeBox = document.getElementById("closeBox");

if (boxButton && boxPopup) {

    boxButton.addEventListener("click", function () {

        boxPopup.classList.add("show");

    });

}

if (closeBox && boxPopup) {

    closeBox.addEventListener("click", function () {

        boxPopup.classList.remove("show");

    });

}
