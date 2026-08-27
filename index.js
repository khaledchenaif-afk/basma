const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const reasonsContainer = document.getElementById('reasonsContainer');
const reasonText = document.getElementById('reasonText');
const nextBtn = document.getElementById('nextBtn');

const reasons = [
  "1.youre soooo funny ",
  "2.You always know how to make me smile",
  "3.You listen even when you're busy",
  "4.Your energy is contagious",
  "5.You never judge me",
  "6.you always praise me even if we know that isn't true",
  "7.You make even ordinary moments feel special",
  "8.you are a kinnd person"
];

let currentIndex = 0;

function showReason() {
  reasonText.textContent = reasons[currentIndex];
}
function createConfetti() {
  const colors = ['#c4049a', '#ff69b4', '#ffd700', '#00ffff', '#ffffff'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}
giftBox.addEventListener('click', () => {
  giftBox.classList.add('opened');
  message.classList.add('visible');
  reasonsContainer.classList.add('visible');
  showReason();
  createConfetti();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= reasons.length) {
    currentIndex = 0;
  }
  showReason();
});
const buddy = document.getElementById('buddy');

buddy.addEventListener('click', () => {
  buddy.classList.add('pop');
  setTimeout(() => {
    buddy.classList.remove('pop');
  }, 400);
});
const starsContainer = document.getElementById('stars');
const starCount = 500;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 2 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';

  star.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
  star.style.animationDelay = Math.random() * 2 + 's';

  starsContainer.appendChild(star);
}