// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);


// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

// For loop to treverse the properties of the object
var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

// For loop to treverse the properties of the array
var names2 = ["Yaakov", "John", "Joe"];

for (var name in names2) {
  console.log("Property: " + name);
  console.log("Hello " + names2[name]);
}

console.log("Add greeting property");
names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Property: " + name);
  console.log("Hello " + names2[name]);
}





































