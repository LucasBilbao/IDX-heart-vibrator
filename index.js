const starter = document.querySelector('[data-start-haptic]');

const heartBeatPatterns = {
  120: [500, 50, 500, 50],
  121: [490, 50, 490, 50],
  122: [480, 50, 480, 50],
  123: [470, 50, 470, 50],
  124: [460, 50, 460, 50],
  125: [450, 50, 450, 50],
  126: [440, 50, 440, 50],
  127: [430, 50, 430, 50],
  128: [420, 50, 420, 50],
  129: [410, 50, 410, 50],
  130: [400, 50, 400, 50],
  131: [390, 50, 390, 50],
  132: [380, 50, 380, 50],
  133: [370, 50, 370, 50],
  134: [360, 50, 360, 50],
  135: [350, 50, 350, 50],
  136: [340, 50, 340, 50],
  137: [330, 50, 330, 50],
  138: [320, 50, 320, 50],
  139: [310, 50, 310, 50],
  140: [300, 50, 300, 50],
  141: [290, 50, 290, 50],
  142: [280, 50, 280, 50],
  143: [270, 50, 270, 50],
  144: [260, 50, 260, 50],
  145: [250, 50, 250, 50],
  146: [240, 50, 240, 50],
  147: [230, 50, 230, 50],
  148: [220, 50, 220, 50],
  149: [210, 50, 210, 50],
  150: [200, 50, 200, 50],
};

const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

starter.addEventListener('click', () => {
  setInterval(() => {
    const randIndex = randomNumberInRange(120, 151);
    navigator.vibrate(heartBeatPatterns[randIndex]);
  }, 1200);
});
