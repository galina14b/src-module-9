const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');

let interval = null;
let isActive = false;

startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;
  interval = setInterval(changeBgColor, 1000)
});

stoptBtn.addEventListener('click', () => {
  clearInterval(interval);
  isActive = false;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeBgColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}