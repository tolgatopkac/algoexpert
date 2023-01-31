const website = {
  name: "Tolga",
  rating: 5,
  lesson: ["A", "B"],
};

console.log(website);

// traverse object (Dot Notation)
console.log(website.name);
// traverse object (Dot Notation)
console.log(website[name]);

// Editing Objects
website.name = "FrontendExpert";
console.log(website.name);

// Add properties
website.foo = "bar";

// Remove
delete website.foo;

// Create object
const obj = new Object();
obj.name = "Tolga";
console.log(obj);

// Contructors

function Website(name, rating, lesson) {
  this.name = name;
  this.rating = rating;
  this.lesson = lesson;
}

const frontendExpert = new Website("FrontendExpert", 5, ["Conner"]);

console.log(frontendExpert);

// ------------------------------------------

// in
console.log("name" in website);
console.log(website.hasOwnProperty("name"));
