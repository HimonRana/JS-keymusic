window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stops the function from running all together

  audio.currentTime = 0; // rewind to the start
  audio.play(); // plays the music
  key.classList.add("playing"); // css transition active
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip this if not a transform
  this.classList.remove("playing"); // remove the css transition avtive
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // checks when transition ends

const allKeys = document.querySelector("body");
const oneKey = allKeys.querySelector("body");
const walk = 50;

function keysMove(e) {
  // const { offsetWidth : width, offsetHeight: height } = allKeys; --IS SAME AS ABOVE BUT SHORTER--
  const width = allKeys.offsetWidth;
  const height = allKeys.offsetHeight;

  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
 
  const xWalk = (x / width * walk);
  const yWalk = (y / height * walk);

  console.log(xWalk, yWalk);

  allKeys.style.margin = `${yWalk} ${xWalk} ${yWalk}`
}

allKeys.addEventListener("mousemove", keysMove);
