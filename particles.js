/* ==========================================
   Sean ❤️ Mry
   Particle Engine
========================================== */

const heartContainer = document.getElementById("heartParticles");
const sparkContainer = document.getElementById("sparkles");


/* ==========================================
   Random Number
========================================== */

function rand(min, max) {
    return Math.random() * (max - min) + min;
}


/* ==========================================
   HEART BURST
========================================== */

function createHeartBurst() {

    const rect = mainRose.getBoundingClientRect();

    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left =
            (startX + rand(-30, 30)) + "px";

        heart.style.top =
            (startY + rand(-20, 20)) + "px";

        heart.style.fontSize =
            rand(18, 34) + "px";

        heart.style.transform =
            `rotate(${rand(-30,30)}deg)`;

        heart.style.animationDuration =
            rand(3,5) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }

}


/* ==========================================
   SPARKLE BURST
========================================== */

function createSparkBurst() {

    const rect = mainRose.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 25; i++) {

        const spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left =
            (x + rand(-60,60)) + "px";

        spark.style.top =
            (y + rand(-60,60)) + "px";

        spark.style.animationDelay =
            rand(0,.4) + "s";

        sparkContainer.appendChild(spark);

        setTimeout(() => {

            spark.remove();

        }, 1200);

    }

}


/* ==========================================
   PETAL BURST
========================================== */



/* ==========================================
   CONTINUOUS PETALS
========================================== */




/* ==========================================
   MAGIC PURPLE PARTICLES
========================================== */

function createMagicGlow(){

    const glow=document.createElement("div");

    glow.style.position="fixed";

    glow.style.width="10px";
    glow.style.height="10px";

    glow.style.borderRadius="50%";

    glow.style.left=
        rand(0,window.innerWidth)+"px";

    glow.style.top=
        rand(0,window.innerHeight)+"px";

    glow.style.pointerEvents="none";

    glow.style.background=
        "rgba(186,104,200,.8)";

    glow.style.boxShadow=
        "0 0 25px rgba(186,104,200,.9)";

    glow.style.opacity=".7";

    glow.style.transition="4s";

    document.body.appendChild(glow);

    requestAnimationFrame(()=>{

        glow.style.transform=
            `translateY(-80px) scale(0)`;

        glow.style.opacity="0";

    });

    setTimeout(()=>{

        glow.remove();

    },4000);

}


/* ==========================================
   AMBIENT MAGIC
========================================== */

setInterval(()=>{

    createMagicGlow();

},1500);


/* ==========================================
   GRAND FINALE
========================================== */

function celebrationBurst(){

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            createHeartBurst();

            createSparkBurst();

            ///createPetalBurst();

        },i*250);

    }

}
