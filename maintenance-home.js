const progress = document.querySelector(".progress");
const percentage = document.querySelector(".progress span");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(65, 99)

let per = 0;
function progressLoad() {
  if (per >= rndInt) {
    progress.style.width = `${rndInt}%`;
    percentage.innerHTML = `${rndInt}%`;
  } else {
    progress.style.width = `${per}%`;
    percentage.innerHTML = `${per}%`;
  }
  per++;
}

setInterval(progressLoad, 90);
