const start = document.getElementById("start");
const stop = document.getElementById("stop");
const count = document.getElementById("count");

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);

// let IntervalTimerID;
let animationFrameID;

/* let setTimeoutID = setTimeout(() => {
  console.log("timeout");
}, 0);

clearTimeout(setTimeoutID); */

function startTime() {
  /*   IntervalTimerID = setInterval(() => {
    count.textContent++;
  }, 500); */

  count.textContent++;
  animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
  // clearInterval(IntervalTimerID);
  cancelAnimationFrame(animationFrameID);
}
