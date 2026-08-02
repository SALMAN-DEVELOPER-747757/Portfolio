function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // Rewind to start
    audio.play();

    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);
}

// 1. Keyboard event listener (Desktop)
window.addEventListener('keydown', function (e) {
    playSound(e.keyCode);
});

// 2. Click & Touch event listeners (Mobile & Mouse clicks)
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function () {
        const keyCode = this.getAttribute('data-key');
        playSound(keyCode);
    });
});
