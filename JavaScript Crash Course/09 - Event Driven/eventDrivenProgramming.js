const button = document.querySelector("button");

document.getElementById("scrollable");

const abortController = new AbortController();
/* button.addEventListener("click", onClick, {
  capture: true,
  once: true,
  passive: true,
  signal: abortController.signal,
});
 */
// document.body.addEventListener("click", onClick, true);

// abortController.abort();

// button.addEventListener("click", onClick);
// button.addEventListener("dblclick", onClick);
// button.addEventListener("mousedown", onClick);
button.addEventListener("mouseup", onClick);

function onClick(event) {
  // console.log(event);
  // console.log(event.type);
  // event.stopPropagation();
  // event.preventDefault();
  console.log(event.target);
  console.log(this);
  // button.removeEventListener("click", onClick);
  // console.log("you clicked the button");
}

window.addEventListener("keydown", (event) => {
  console.log(event.code);
});

const scrollable = document.getElementById("scrollable");

/* scrollable.addEventListener("scroll", (event) => {
  console.log(event.target.scrollTop);
}); */

/* scrollable.addEventListener("mouseenter", (event) => {
  console.log(event.pageX, event.pageY);
}); */

/* button.addEventListener("dragstart", (event) => {
  console.log(event);
});

scrollable.addEventListener("drop", (event) => {
  scrollable.prepend(button);
});

scrollable.addEventListener("dragover", (event) => {
  event.preventDefault();
});
 */
// Event Delegation

scrollable.addEventListener("click", (event) => {
  if (event.target !== this) {
    event.target.textContent = "Clicked";
  }
});
