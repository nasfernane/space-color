// variables
const colorInput = document.querySelector('#color-input');
const spaceShip = document.querySelector('#spaceshipContainer');

// events
colorInput.addEventListener('change', function () {
    document.querySelector('body').style.backgroundColor = colorInput.value;
});

// évènement keydown pour faire bouger le vaisseau
document.addEventListener('keydown', function (event) {
    // récupère la position X du vaisseau en px
    let shipStringPosition = window.getComputedStyle(spaceShip).left;
    // enlève le px pour récupérer la valeur en nombre
    let shipPosition = parseInt(shipStringPosition.substring(shipStringPosition.length - 2, 0));
    // même principe pour la largeur du body afin d'adapter à l'écran de l'utilisateur
    let bodyStringWidth = window.getComputedStyle(document.querySelector('body')).width;
    let bodyWidth = parseInt(bodyStringWidth.substring(bodyStringWidth.length - 2, 0));

    if (event.key === 'ArrowLeft' && shipPosition >= 55) {
        spaceShip.style.left = `calc(${shipPosition}px - 10px`;
    } else if (event.key === 'ArrowRight' && shipPosition <= `${bodyWidth - 55}`) {
        spaceShip.style.left = `calc(${shipPosition}px + 10px`;
    }
});
