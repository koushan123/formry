/* ==========================================
   Sean ❤️ Mry
   Letter System
========================================== */

const letter = document.querySelector(".letter");

const paragraphs = Array.from(
    document.querySelectorAll(".letter p")
);

const heading = document.querySelector(".letter h1");

const signature = document.querySelector(".signature");

let typed = false;


/* ==========================================
   Hide Letter Initially
========================================== */

function prepareLetter() {

    heading.style.opacity = 0;

    signature.style.opacity = 0;

    paragraphs.forEach(p => {

        p.dataset.text = p.innerHTML;

        p.innerHTML = "";

        p.style.opacity = 1;

    });

}

prepareLetter();


/* ==========================================
   Type Writer
========================================== */

async function typeText(element, text, speed = 35) {

    element.innerHTML = "";

    for (let i = 0; i < text.length; i++) {

        element.innerHTML += text[i];

        await new Promise(resolve =>
            setTimeout(resolve, speed)
        );

    }

}


/* ==========================================
   Animate Letter
========================================== */

async function playLetterAnimation() {

    if (typed) return;

    typed = true;

    heading.animate(

        [

            { opacity: 0, transform: "translateY(-20px)" },

            { opacity: 1, transform: "translateY(0)" }

        ],

        {

            duration: 1200,

            fill: "forwards"

        }

    );

    await new Promise(r => setTimeout(r, 1200));

    for (const p of paragraphs) {

        await typeText(p, p.dataset.text);

        await new Promise(r => setTimeout(r, 400));

    }

    signature.animate(

        [

            {

                opacity: 0,

                transform: "translateY(20px)"

            },

            {

                opacity: 1,

                transform: "translateY(0)"

            }

        ],

        {

            duration: 1200,

            fill: "forwards"

        }

    );

}


/* ==========================================
   Open Letter
========================================== */

const openBtn = document.getElementById("openLetter");

openBtn.addEventListener("click", () => {

    setTimeout(() => {

        playLetterAnimation();

    }, 700);

});


/* ==========================================
   Floating Hearts While Reading
========================================== */

function floatingLove() {

    if (!letterScreen.classList.contains("show"))
        return;

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.top =
        window.innerHeight + "px";

    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

    heart.style.pointerEvents = "none";

    heart.style.transition = "7s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 150}px)
             rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(floatingLove, 700);


/* ==========================================
   Music Fade In
========================================== */

function fadeMusic() {

    if (!music) return;

    music.volume = 0;

    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.4) {

            volume = 0.4;

            clearInterval(fade);

        }

        music.volume = volume;

    }, 250);

}


/* ==========================================
   Start Music With Letter
========================================== */

openBtn.addEventListener("click", () => {

    fadeMusic();

});


/* ==========================================
   Final Surprise
========================================== */

setTimeout(() => {

    const endingText = document.createElement("div");

    endingText.id = "finalWords";

    endingText.innerHTML =

        `
        Every time you miss me...
        <br><br>
        Come back to this garden.
        <br><br>
        It will always be blooming...
        <br><br>
        Just like my love for you.
        ❤️
        `;

    endingText.style.position = "fixed";

    endingText.style.inset = "0";

    endingText.style.display = "none";

    endingText.style.justifyContent = "center";

    endingText.style.alignItems = "center";

    endingText.style.flexDirection = "column";

    endingText.style.fontFamily = "Poppins";

    endingText.style.fontSize = "32px";

    endingText.style.textAlign = "center";

    endingText.style.background =
        "rgba(20,10,30,.94)";

    endingText.style.color = "white";

    endingText.style.zIndex = "9999";

    document.body.appendChild(endingText);

    signature.addEventListener("click", () => {

        endingText.style.display = "flex";

    });

},1000);