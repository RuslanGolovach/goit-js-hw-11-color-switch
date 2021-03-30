const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartChangeBgColor);
refs.stopBtn.addEventListener('click', onStopChangeBgColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

function getColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  return colors[colorIndex];
}

function onStartChangeBgColor() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getColor();
  }, 1000);
  refs.startBtn.disabled = true;
}

function onStopChangeBgColor() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
