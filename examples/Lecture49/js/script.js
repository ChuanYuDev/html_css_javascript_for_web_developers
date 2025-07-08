// this is pointing to literalCircle1 object instead of global Window object
var literalCircle1 = {
    radius: 10,

    getArea: function() {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle1.getArea());

// Javascript "bug"
var literalCircle2 = {
    radius: 10,

    getArea: function() {
        console.log(this);

        var test = function () {
            console.log(this);
        }

        test();
    }
};

literalCircle2.getArea();

// Object literals and "this"
var literalCircle3 = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20; 
    };

    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle3.getArea());



