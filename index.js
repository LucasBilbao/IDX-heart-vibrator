const starter = document.querySelector('[data-start-haptic]');
let heartInfo;

function setUpPattern(data) {
  let newHeartBeatPattern = [];
  data.forEach((heart) => {
    const systole = heart.rr / 3;
    const diastole = (heart.rr * 2) / 3;
    newHeartBeatPattern = [...newHeartBeatPattern, systole, diastole];
  });

  return newHeartBeatPattern;
}

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => (heartInfo = data))
  .catch(() => console.log('Something went wrong!!!'));

const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
let isVibrating = false;
let isOver = false;

const INCREMENT_INDEX = 5;
let prevIndex = 0;
let nextIndex = INCREMENT_INDEX;

starter.addEventListener('click', () => {
  if (isVibrating) {
    return;
  }
  isVibrating = true;

  let prevTotalTime = 0;
  let heartBeatPattern;

  while (!isOver) {
    heartBeatPattern = setUpPattern(heartInfo.slice(prevIndex, nextIndex));

    if (nextIndex >= heartInfo.length) {
      isOver = true;
    }

    setTimeout(() => {
      navigator.vibrate(heartBeatPattern);
    }, prevTotalTime);
    prevTotalTime += heartBeatPattern.reduce((prev, curr) => prev + curr);

    prevIndex += INCREMENT_INDEX;
    nextIndex += INCREMENT_INDEX;
  }
});
