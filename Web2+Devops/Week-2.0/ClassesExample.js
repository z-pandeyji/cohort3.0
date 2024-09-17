// key Concept of Classes in JS
// 1. Class Declaration 
// 2. Class Constructor
// 3. Class Methods
// 4. Class Properties
// 5. Class Inheritance - Inheritance is the process of acquiring traits from a parent class.
// 6. Class Polymorphism - Polymorphism is the ability of an object to take on many forms.
// 7. Class Encapsulation - Encapsulation is the process of hiding the internal details of an object and exposing only the necessary information.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const person = new Person("John", 30);
person.sayHello();  // Hello John
console.log(person);                                




class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`Bg Reactangle color ${this.color}`);
    }
}

const Rect = new Rectangle(4, 8, "red"); // instance of the rectangle class, Object of the rectangle class.
const area = Rect.area();
const RectColor = Rect.paint();
console.log(Rect);
console.log(area);
console.log(RectColor);