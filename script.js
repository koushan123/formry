/* ==========================================
   Sean ❤️ Mry
   Love Garden
========================================== */

const mainRose = document.getElementById("mainRose");
const garden = document.getElementById("garden");

const counter = document.getElementById("roseCount");

const messageBox = document.getElementById("messageBox");

const endingScreen = document.getElementById("endingScreen");

const letterScreen = document.getElementById("letterScreen");

const openLetter = document.getElementById("openLetter");

const music = document.getElementById("bgMusic");

let roseCount = 0;

let finished = false;


/* ==========================================
   Messages
========================================== */
const milestones = {

2: "🌹 Every flower reminds me of your beautiful smile.",

4: "💜 Two years together... and I'd still choose you every single time.",

6: "❤️ Every rose is another reason I love you.",

8: "✨ You're almost at the surprise...",

10: "💌 One last tap..."

};

/* ==========================================
   Update Counter
========================================== */

function updateCounter(){

counter.textContent = roseCount;

}


/* ==========================================
   Update Messages
========================================== */

function updateMessage(){

if(milestones[roseCount]){

messageBox.style.opacity=0;

setTimeout(()=>{

messageBox.innerHTML = milestones[roseCount];

messageBox.style.opacity=1;

},300);

}

}


/* ==========================================
   Create Rose
========================================== */

function createRose(x, y) {

    const rose = document.createElement("div");

    rose.className = "gardenRose";

    const roseImages = [
        "assets/rose1.svg",
        "assets/rose2.svg",
        "assets/rose3.svg"
    ];

    const randomRose =
        roseImages[Math.floor(Math.random() * roseImages.length)];

    rose.innerHTML = `
        <img src="${randomRose}" class="roseImage">
    `;

    rose.style.left = x + "px";
    rose.style.top = y + "px";

    garden.appendChild(rose);

}

/* ==========================================
   Click Animation
========================================== */

function animateRose(){

mainRose.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.25)"

},

{

transform:"scale(1)"

}

],

{

duration:350

});

}


/* ==========================================
   Main Click
========================================== */

mainRose.addEventListener("click",()=>{

if(finished) return;

animateRose();

roseCount++;

updateCounter();

updateMessage();

/* create particles */

createHeartBurst();

createSparkBurst();

///createPetalBurst();

/* place rose */

const point = getHeartPoint(roseCount);

createRose(point.x,point.y);

if(roseCount>=10){

showEnding();

}

});
/* ==========================================
   Ending Sequence
========================================== */

function showEnding() {

    finished = true;

    messageBox.innerHTML =
        "🌹 You filled our garden with love...";

    // Wait before showing ending
    celebrationBurst();

    setTimeout(() => {

    endingScreen.classList.add("show");
        // Try playing music
        if (music) {

            music.volume = 0.4;

            music.play().catch(() => {
                console.log("Music couldn't autoplay.");
            });

        }

    }, 2500);

}


/* ==========================================
   Letter Button
========================================== */

openLetter.addEventListener("click", () => {

    endingScreen.classList.remove("show");

    setTimeout(() => {

        letterScreen.classList.add("show");

    }, 500);

});


/* ==========================================
   Keyboard Shortcuts
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        letterScreen.classList.remove("show");

    }

});


/* ==========================================
   Initial Message
========================================== */

messageBox.innerHTML =
"Every love story begins with a single rose.";


/* ==========================================
   Create Background Stars
========================================== */

function generateStars() {

    const stars = document.getElementById("stars");

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * window.innerWidth + "px";

        star.style.top =
            Math.random() * window.innerHeight + "px";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        stars.appendChild(star);

    }

}


/* ==========================================
   Intro Animation
========================================== */

window.addEventListener("load", () => {

    generateStars();

    setTimeout(() => {

        messageBox.innerHTML =
            "Tap the rose and let's grow something beautiful together ❤️";

    }, 2500);

});


/* ==========================================
   Window Resize
========================================== */

window.addEventListener("resize", () => {

    if (typeof generateHeartPoints === "function") {

        generateHeartPoints();

    }

});


/* ==========================================
   Debug (Optional)
========================================== */

// Uncomment this if you want to instantly
// jump to the ending while testing.

// roseCount = 99;
// updateCounter();