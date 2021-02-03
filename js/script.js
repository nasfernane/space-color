// variables
const colorInput = document.querySelector('#color-input');
const spaceShip = document.querySelector('#spaceshipContainer');
const spaceLaser = document.querySelector('#spaceLaser');
let transitionning = false;
const alienContainer = document.querySelector('.alienContainer');

// même principe pour la largeur du body afin d'adapter à l'écran de l'utilisateur
const bodyStringWidth = window.getComputedStyle(document.querySelector('body')).width;
const bodyWidth = parseInt(bodyStringWidth.substring(bodyStringWidth.length - 2, 0));

const bodyStringHeight = window.getComputedStyle(document.querySelector('body')).height;
const bodyHeight = parseInt(bodyStringHeight.substring(bodyStringHeight.length - 2, 0));

// events

// évènement keydown pour faire bouger le vaisseau
document.addEventListener('keydown', async function (event) {
    // récupère la position X du vaisseau en px
    const shipStringPosition = window.getComputedStyle(spaceShip).left;
    // enlève le px pour récupérer la valeur en nombre
    const shipPosition = parseInt(shipStringPosition.substring(shipStringPosition.length - 2, 0));

    const laserStringPosition = window.getComputedStyle(spaceLaser).left;
    const laserPosition = parseInt(
        laserStringPosition.substring(laserStringPosition.length - 2, 0)
    );

    if (event.key === 'ArrowLeft' && shipPosition >= 80) {
        spaceShip.style.left = `calc(${shipPosition}px - 10px`;
        spaceLaser.style.left = `calc(${shipPosition}px - 10px`;
    }

    if (event.key === 'ArrowRight' && shipPosition <= `${bodyWidth - 80}`) {
        spaceShip.style.left = `calc(${shipPosition}px + 10px`;
        spaceLaser.style.left = `calc(${shipPosition}px + 8px`;
    }

    if (event.code === 'Space' && transitionning === false) {
        transitionning = true;
        spaceLaser.style.display = 'block';
        const laserShot = new Audio('http://www.sa-matra.net/sounds/starwars/ISD-Laser3.wav');
        laserShot.play();

        window.setTimeout(function () {
            spaceLaser.style.display = 'none';
            transitionning = false;
        }, 500);
    }
});

console.log(
    window.getComputedStyle(alienContainer).width,
    window.getComputedStyle(document.querySelector('body')).width
);

let moveToRight = true;

window.setInterval(() => {
    const aliensStringPosition = window.getComputedStyle(alienContainer).left;
    const aliensPosition = parseInt(
        aliensStringPosition.substring(aliensStringPosition.length - 2, 0)
    );
    const aliensTopPosition = window.getComputedStyle(alienContainer).top;
    const aliensTop = parseInt(aliensTopPosition.substring(aliensTopPosition.length - 2, 0));
    
    const alienStringWidth = window.getComputedStyle(alienContainer).width;
    const alienWidth = parseInt(alienStringWidth.substring(alienStringWidth.length - 2, 0));

    const alienStringHeight = window.getComputedStyle(alienContainer).height;
    const alienHeight = parseInt(alienStringHeight.substring(alienStringHeight.length - 2, 0));

    console.log(aliensTop, bodyHeight, alienHeight);
    if (aliensTop >= bodyHeight - alienHeight) {
        alert(`T'a perdu t'es trop nul`)
    }

    if (aliensPosition == 0) {
        alienContainer.style.top = `calc(${aliensTopPosition} + 20px`
        moveToRight = true;
    } else if (aliensPosition >= bodyWidth - alienWidth - 5) {
        alienContainer.style.top = `calc(${aliensTopPosition} + 20px`
        moveToRight = false;
    }

    alienContainer.style.left = moveToRight === true
        ? `calc(${aliensPosition}px + 30px`
        : `calc(${aliensPosition}px - 30px`;

    // if (bodyWidth > aliensPosition + alienWidth) {
    //     alienContainer.style.left = `calc(${aliensPosition}px + 10px`;
    // } else if (bodyWidth < aliensPosition + alienWidth) {
    //     alienContainer.style.left = `calc(${aliensPosition}px - 10px`;
    // } else if (bodyWidth === aliensPosition + alienWidth) {
    //     alienContainer.style.left = `calc(${aliensPosition}px - 10px`;
    // }
}, 50);
