// variables
const colorInput = document.querySelector('#color-input');
const spaceShip = document.querySelector('#spaceshipContainer');
const spaceLaser = document.querySelector('#spaceLaser');

// events
colorInput.addEventListener('change', function () {
    document.querySelector('body').style.backgroundColor = colorInput.value;
});

// évènement keydown pour faire bouger le vaisseau
document.addEventListener('keydown', function (event) {
    // récupère la position X du vaisseau en px
    const shipStringPosition = window.getComputedStyle(spaceShip).left;
    // enlève le px pour récupérer la valeur en nombre
    const shipPosition = parseInt(shipStringPosition.substring(shipStringPosition.length - 2, 0));

    const laserStringPosition = window.getComputedStyle(spaceLaser).left;
    const laserPosition = parseInt(
        laserStringPosition.substring(laserStringPosition.length - 2, 0)
    );

    // même principe pour la largeur du body afin d'adapter à l'écran de l'utilisateur
    const bodyStringWidth = window.getComputedStyle(document.querySelector('body')).width;
    const bodyWidth = parseInt(bodyStringWidth.substring(bodyStringWidth.length - 2, 0));

    if (event.key === 'ArrowLeft' && shipPosition >= 55) {
        spaceShip.style.left = `calc(${shipPosition}px - 10px`;
        spaceLaser.style.left = `calc(${shipPosition}px - 10px`;
    } else if (event.key === 'ArrowRight' && shipPosition <= `${bodyWidth - 55}`) {
        spaceShip.style.left = `calc(${shipPosition}px + 10px`;
        spaceLaser.style.left = `calc(${shipPosition}px + 10px`;
    } else if (event.code === 'Space') {
        console.log('coucou');
        spaceLaser.style.display = 'block';
    }
});

// enlève le laser sur keyup

document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
        spaceLaser.style.display = 'none';
    }
});
