
const scenes = document.querySelectorAll(".scene");

let currentScene = 0;
let isScrolling = false;


/* ================================= */
/* SCENE 1 PARTICLES */
/* ================================= */

const particleContainer =
    document.querySelector(".ice-particles");


function createIceParticles() {

    if (!particleContainer) return;

    particleContainer.innerHTML = "";

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add(
            "ice-particle"
        );

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            20 + Math.random() * 100 + "%";

        particle.style.width =
            1 + Math.random() * 3 + "px";

        particle.style.height =
            particle.style.width;

        particle.style.animationDuration =
            8 + Math.random() * 10 + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particleContainer.appendChild(
            particle
        );
    }
}


/* ================================= */
/* SCENE 2 SNOW */
/* ================================= */

const snowContainer =
    document.querySelector(".snow");


let snowCreated = false;


function createSnow() {

    if (!snowContainer) return;

    if (snowCreated) return;

    snowCreated = true;

    for (let i = 0; i < 150; i++) {

        const snowflake =
            document.createElement("div");

        snowflake.classList.add(
            "snowflake"
        );

        snowflake.innerHTML = "❄";

        snowflake.style.left =
            Math.random() * 100 + "%";

        snowflake.style.fontSize =
            7 + Math.random() * 20 + "px";

        snowflake.style.opacity =
            .25 + Math.random() * .75;

        snowflake.style.animationDuration =
            5 + Math.random() * 8 + "s";

        snowflake.style.animationDelay =
            Math.random() * 8 + "s";

        snowContainer.appendChild(
            snowflake
        );
    }
}


function removeSnow() {

    if (!snowContainer) return;

    snowContainer.innerHTML = "";

    snowCreated = false;
}


/* ================================= */
/* SCENE 4 FALLING STARS */
/* ================================= */

const fallingStars =
    document.querySelector(".falling-stars");


function createFallingStar() {

    if (!fallingStars) return;

    const star =
        document.createElement("div");

    star.classList.add(
        "falling-star"
    );

    star.style.left =
        Math.random() * 100 + "%";

    star.style.animationDuration =
        2 + Math.random() * 3 + "s";

    const size =
        2 + Math.random() * 4;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    fallingStars.appendChild(
        star
    );


    setTimeout(() => {

        star.remove();

    }, 6000);
}


/* ================================= */
/* STAR RAIN */
/* ================================= */

setInterval(() => {

    createFallingStar();

}, 180);


/* ================================= */
/* ACTIVATE SCENE */
/* ================================= */

function activateScene(index) {

    scenes.forEach((scene, i) => {

        if (i === index) {

            scene.classList.add("active");

        } else {

            scene.classList.remove("active");

        }

    });


    if (index === 1) {

        createSnow();

    } else {

        removeSnow();

    }

    if (index === 4) {

    startBirthdayConfetti();

    } else {

    stopBirthdayConfetti();

    }

    /* SCENE 4 WORD ANIMATION */

    const scene4 =
        document.querySelector(".scene-4");


    if (scene4) {

        scene4.classList.remove(
            "words-animated"
        );


        if (index === 3) {

            setTimeout(() => {

                scene4.classList.add(
                    "words-animated"
                );

            }, 50);

        }

    }
const scene5 =
    document.querySelector(".scene-5");

if (scene5) {

    scene5.classList.remove(
        "scene-5-animated"
    );

    if (index === 4) {

        setTimeout(() => {

            scene5.classList.add(
                "scene-5-animated"
            );

        }, 50);

    }
}
}


/* ================================= */
/* CINEMATIC VISUAL ENGINE */
/* ================================= */

let ticking = false;


function updateSceneAnimation() {

    const viewportHeight =
        window.innerHeight;

    scenes.forEach(scene => {

        const rect =
            scene.getBoundingClientRect();

        const distance =
            Math.abs(rect.top);

        let progress =
            distance /
            viewportHeight;

        progress =
            Math.min(progress, 1);

        const scale =
            1 -
            progress * .08;

        const opacity =
            1 -
            progress * .55;

        const blur =
            progress * 7;

        const verticalMove =
            progress * 35;

        scene.style.transform = `
            scale(${scale})
            translate3d(0, ${verticalMove}px, 0)
        `;

        scene.style.opacity =
            opacity;

        scene.style.filter =
            `blur(${blur}px)`;

    });

    requestAnimationFrame(
        updateSceneAnimation
    );
}


function requestSceneUpdate() {

    if (ticking) return;

    ticking = true;

    requestAnimationFrame(
        updateSceneAnimation
    );
}

/* ================================= */
/* SCENE 5 CONFETTI */
/* ================================= */

/* ================================= */
/* BIRTHDAY CONFETTI */
/* ================================= */

const confettiContainer =
    document.querySelector(".confetti-container");

let confettiInterval = null;


function createBirthdayConfetti() {

    if (!confettiContainer) return;

    const piece =
        document.createElement("div");

    piece.classList.add(
        "confetti-piece"
    );


    /* POSITION */

    piece.style.left =
        Math.random() * 100 + "%";


    /* SIZE */

    const width =
        5 + Math.random() * 7;

    const height =
        8 + Math.random() * 10;

    piece.style.width =
        width + "px";

    piece.style.height =
        height + "px";


    /* COLOR */

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#a855f7",
        "#ffffff"
    ];

    piece.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];


    /* MOVEMENT */

    piece.style.setProperty(
        "--confetti-x",
        (Math.random() - 0.5) * 300 + "px"
    );


    piece.style.setProperty(
        "--confetti-rotation",
        360 + Math.random() * 720 + "deg"
    );


    /* SPEED */

    piece.style.animationDuration =
        3 + Math.random() * 3 + "s";


    /* RANDOM START DELAY */

    piece.style.animationDelay =
        Math.random() * 0.5 + "s";


    confettiContainer.appendChild(
        piece
    );


    /* CLEAN UP */

    setTimeout(() => {

        piece.remove();

    }, 7000);
}


function startBirthdayConfetti() {

    if (!confettiContainer) return;

    if (confettiInterval) return;


    /* INITIAL BURST */

    for (let i = 0; i < 50; i++) {

        setTimeout(() => {

            createBirthdayConfetti();

        }, i * 30);

    }


    /* CONTINUOUS FALL */

    confettiInterval =
        setInterval(() => {

            createBirthdayConfetti();

        }, 120);
}


function stopBirthdayConfetti() {

    if (confettiInterval) {

        clearInterval(
            confettiInterval
        );

        confettiInterval = null;
    }


    if (confettiContainer) {

        confettiContainer.innerHTML = "";

    }
}


/* ================================= */
/* MOVE TO SCENE */
/* ================================= */

function moveToScene(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= scenes.length) {
        index = scenes.length - 1;
    }

    if (index === currentScene) {
        return;
    }

    currentScene = index;

    activateScene(currentScene);

    const target =
        scenes[currentScene].offsetTop;

    const start =
        window.scrollY;

    const distance =
        target - start;

    const duration = 900;

    const startTime =
        performance.now();


    function animateScroll(currentTime) {

        const elapsed =
            currentTime - startTime;

        let progress =
            elapsed / duration;

        if (progress > 1) {
            progress = 1;
        }


        /* Cinematic ease */

        const eased =
            progress < 0.5
                ? 4 * progress * progress * progress
                : 1 -
                  Math.pow(
                      -2 * progress + 2,
                      3
                  ) / 2;


        window.scrollTo(
            0,
            start + distance * eased
        );


        if (progress < 1) {

            requestAnimationFrame(
                animateScroll
            );

        }

    }


    requestAnimationFrame(
        animateScroll
    );
}


/* ================================= */
/* MOUSE WHEEL */
/* ================================= */

window.addEventListener(
    "wheel",

    function(event) {

        event.preventDefault();


        if (isScrolling) {

            return;

        }


        const direction =
            event.deltaY > 0
                ? 1
                : -1;


        moveToScene(
            currentScene + direction
        );


        isScrolling = true;


        setTimeout(() => {

            isScrolling = false;

        }, 750);

    },

    {
        passive: false
    }
);


/* ================================= */
/* KEYBOARD */
/* ================================= */

window.addEventListener(
    "keydown",

    function(event) {

        let direction = 0;


        if (
            event.key === "ArrowDown" ||
            event.key === "PageDown"
        ) {

            direction = 1;

        }


        if (
            event.key === "ArrowUp" ||
            event.key === "PageUp"
        ) {

            direction = -1;

        }


        if (!direction) return;


        event.preventDefault();


        if (isScrolling) return;


        moveToScene(
            currentScene + direction
        );


        isScrolling = true;


        setTimeout(() => {

            isScrolling = false;

        }, 750);

    }
);


/* ================================= */
/* RESIZE */
/* ================================= */

window.addEventListener(
    "resize",
    requestSceneUpdate,
    {
        passive: true
    }
);


/* ================================= */
/* START */
/* ================================= */

createIceParticles();

activateScene(0);


window.scrollTo({

    top: 0,

    behavior: "instant"

});


updateSceneAnimation();

const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.35;