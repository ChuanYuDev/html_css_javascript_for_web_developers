// should be undefined
var x;
console.log(x);

if (x == undefined) {
  console.log("x is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined");
}

// Is it immutable?
var y = 6;
console.log(y);

y = 7;
console.log(y);
