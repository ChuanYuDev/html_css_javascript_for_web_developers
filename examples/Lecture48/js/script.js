// `this` is pointing to global object
function test () {
    console.log(this);
    this.myName = "Neal";
}

test();
console.log(window.myName);

// Function constructors
function Circle1 (radius) {
    console.log(this);
}

var myCircle1 = new Circle1(10);

// Add method to the object
function Circle2 (radius) {
    this.radius = radius;

    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
}

var myCircle2 = new Circle2(10);
console.log(myCircle2);
console.log(myCircle2.getArea());

// Use prototype to create method
function Circle3 (radius) {
    this.radius = radius;
}

Circle3.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle3 = new Circle3(10);
console.log(myCircle3);
console.log(myCircle3.getArea());

var myOtherCircle3 = new Circle3(20);
console.log(myOtherCircle3);