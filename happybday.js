const text = document.querySelector('.text');
const container = document.querySelector('.container');

let x = 0;
let y = 0;
let xSpeed = 2;
let ySpeed = 2;

function moveText() {
    x += xSpeed;
    y += ySpeed;

    if (x + text.clientWidth > container.clientWidth || x < 0) {
        xSpeed = -xSpeed;
    }

    if (y + text.clientHeight > container.clientHeight || y < 0) {
        ySpeed = -ySpeed;
    }

    text.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveText);
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * container.clientWidth}px`;
    container.appendChild(firework);

    // Remove the firework element after the explosion animation
    firework.addEventListener('animationend', () => {
        container.removeChild(firework);
    });
}

function launchFireworks() {
    createFirework();
    setTimeout(launchFireworks, 1000); // Launch a firework every second
}

launchFireworks();
moveText();