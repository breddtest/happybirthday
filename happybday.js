const container = document.querySelector('.container');

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * container.clientWidth}px`;
    firework.style.top = `${Math.random() * container.clientWidth}px`;
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