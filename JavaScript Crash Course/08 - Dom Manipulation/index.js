// -- getElementById --
const secondLi = document.getElementById("second-li");
// console.log(secondLi);

// -- QuerySelector --
const firstLi = document.querySelector("li");
const listItems = document.querySelectorAll("li");

// console.log(firstLi);
// console.log(listItems);
// console.log(listItems.length);

// forEach ❗
listItems.forEach((li) => {
  // console.log(li);
});

// map ❗
Array.from(listItems).map((li) => {
  // console.log(li);
});

// ---------------------------------------------------------
// console.log(document.getElementsByClassName("list-item"));
// console.log(document.getElementsByTagName("list-item"));

// listItems[0].style.color = "red";
// listItems[0].style.backgroundColor = "blue";
// listItems[0].textContent = "Changed!";
// listItems[0].value = 5;
// Set Attribute
// listItems[0].setAttribute("class", "big");
// listItems[0].setAttribute("value", "1");
// listItems[0].setAttribute("class", "gray big");
// remove - add - toggle
//  toggle  = add - remove
// toggle = remove - add
// listItems[0].classList.remove("big");
// listItems[0].classList.toggle("big");
// listItems[0].classList.toggle("big");
// alternative
// classname - overwrite
// listItems[0].className = "blue";

//.className overwrite
// setAttribute ve classList.add veya classList.toggle ekleme yapar.

// --------------------------------------------------------
const p = document.createElement("p");
// p.textContent = "Hello World";
const text = document.createTextNode("Hello World");
p.append(text);

// document.body.appendChild(p);
document.body.appendChild(p, "Test");

// prepend
document.body.prepend(p);

// innerHTML
document.body.innerHTML += `<p>HTML Test String</p>`;

//
const parent = document.querySelector("ol");
const fragment = document.createDocumentFragment();
const listItemsToAdd = [];

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `List item with i=${i}`;
  // listItemsToAdd.push(li);
  fragment.append(li);
}
// parent.append(...listItemsToAdd);
parent.append(fragment);

// remove
listItems[0].remove();

console.log(listItems[0].remove());

// Window
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(listItems[0].style.fontSize);
listItems[0].classList.add("big");
console.log(window.getComputedStyle(listItems[0]).fontSize);

// Scrollable
const scrollable = document.getElementById("scrollable");
console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);

console.log(scrollable.offsetTop);

console.log(scrollable.querySelectorAll("p")[5].offsetTop);

scrollable.querySelectorAll("p")[5].scrollIntoView();

scrollable.scrollTo({
  top: scrollable.querySelectorAll("p")[5].offsetTop,
  behavior: "smooth",
});
