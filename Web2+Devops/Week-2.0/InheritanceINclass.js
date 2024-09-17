// Inheritance in javascript allows one class to inherit the properties and methods of another class.
// Inheritance is a mechanism that allows a class to inherit the properties and methods of another class.

class Circle2 {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    area() {
        const area = this.radius * this.radius * Math.PI;
        return area;
    }
    paint() {
        console.log(`Painting with color ${this.color}`);
    }
}

// const circle2 = new Circle2(4, 'pink');
// const area = circle2.area();
// console.log(area);
// console.log(circle2);

// Let's Create the Inheritance Example for circle and rectangle Class.

class Shape {
    constructor(color) {
        this.color = color;
    }
    paint() {
        console.log(`Background Shape color is ${this.color}`)
    }

    area() {
        throw new Error('The are method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

// Rectangle Class

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color); // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}


// Circle Class

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}

let circle = new Circle(20);
console.log(circle.area());