// ❤️ Corazones flotando
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 5) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 11000);
}

setInterval(createHeart, 500);

// 🏃 Botón NO que huye
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

// 💖 Botón SÍ
const yesBtn = document.getElementById('yesBtn');

yesBtn.addEventListener('click', () => {
  alert('¡Gracias! 💕 Ya sabía que dirías que sí 😍');
});
