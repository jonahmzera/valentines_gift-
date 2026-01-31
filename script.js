const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");
const overlay = document.getElementById("overlay");

let attempts = 0;

const messages = [
  "Hey… relax 😭",
  "You don’t mean that",
  "Be serious now",
  "Stop playing 😐"
];

function moveNo() {
  attempts++;

  const card = document.querySelector(".card");
  const bounds = card.getBoundingClientRect();

  const x = Math.random() * (bounds.width - 120);
  const y = Math.random() * (bounds.height - 120);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";

  hint.textContent = messages[Math.min(attempts - 1, messages.length - 1)];

  noBtn.style.scale = Math.max(0.7, 1 - attempts * 0.1);
  yesBtn.style.scale = 1 + attempts * 0.1;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});
