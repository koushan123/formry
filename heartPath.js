/* ==========================================
   Heart Path Generator
   Sean ❤️ Mry
========================================== */

let heartPoints = [];

/* ==========================================
   Build Heart Shape
========================================== */

function generateHeartPoints() {

    heartPoints = [];

    const total = 10;

    const centerX = window.innerWidth / 2;

    const centerY = window.innerHeight / 2 + 30;

    // Heart size adapts to screen
    const scale = Math.min(window.innerWidth, window.innerHeight) / 38;

    for (let i = 0; i < total; i++) {

        const t = (Math.PI * 2 * i) / total;

        const x =
            16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);

        heartPoints.push({

            x: centerX + x * scale,

            // minus because browser Y axis is inverted
            y: centerY - y * scale

        });

    }

}


/* ==========================================
   Shuffle Heart Points
========================================== */

/*
Instead of drawing the heart
from left to right,

we randomize the order.

This makes the heart
"appear magically"
as she keeps clicking.
*/

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
        [array[j], array[i]];

    }

}

generateHeartPoints();

///shuffle(heartPoints);


/* ==========================================
   Return Next Point
========================================== */

function getHeartPoint(index) {

    if (index >= heartPoints.length) {

        return {

            x:
            window.innerWidth / 2,

            y:
            window.innerHeight / 2

        };

    }

    return heartPoints[index - 1];

}


/* ==========================================
   Optional:
   Make Heart Pulse
========================================== */

function pulseGarden() {

    const roses =
        document.querySelectorAll(".gardenRose");

    roses.forEach((rose, i) => {

        setTimeout(() => {

            rose.animate(

                [

                    {

                        transform:
                        "scale(1)"

                    },

                    {

                        transform:
                        "scale(1.25)"

                    },

                    {

                        transform:
                        "scale(1)"

                    }

                ],

                {

                    duration:700

                }

            );

        }, i * 8);

    });

}


/* ==========================================
   Called at Ending
========================================== */

function finishHeart() {

    pulseGarden();

}
