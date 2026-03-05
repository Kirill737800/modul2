class Figure {
    #x;
    #y;
    
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    
    get x() {
        return this.#x;
    }
    
    get y() {
        return this.#y;
    }
    
    set x(x) {
        this.#x = x;
    }
    
    set y(y) {
        this.#y = y;
    }
    
    square() {
        return undefined;
    }
}

class Circle extends Figure {
    #r;
    
    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }
    
    get r() {
        return this.#r;
    }
    
    set r(val) {
        this.#r = val;
    }
    
    square() {
        return Math.PI * this.#r * this.#r;
    }
    getInfo() {
        return `Круг: центр (${this.x}, ${this.y}), радиус = ${this.r}`;
    }
}
class Rectangle extends Figure {
    #h;
    #w;
    
    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }
    
    get h() {
        return this.#h;
    }
    
    get w() {
        return this.#w;
    }
    
    set h(h) {
        this.#h = h;
    }
    
    set w(w) {
        this.#w = w;
    }
    
    square() {
        return this.#h * this.#w;
    }
    
    getInfo() {
        return `Прямоугольник: центр (${this.x}, ${this.y}), высота = ${this.h}, ширина = ${this.w}`;
    }
}
console.log("=== Демонстрация работы с классами ===\n");
console.log("1. Создание круга:");
const circle = new Circle(5, 5, 10);
console.log(circle.getInfo());
console.log(`Площадь круга: ${circle.square().toFixed(2)}`);
console.log("---");
console.log("\n2. Создание прямоугольника:");
const rectangle = new Rectangle(0, 0, 4, 6);
console.log(rectangle.getInfo());
console.log(`Площадь прямоугольника: ${rectangle.square()}`);
console.log("---");
console.log("\n3. Демонстрация работы с методами базового класса:");
console.log("Круг - координата X:", circle.x);
console.log("Круг - координата Y:", circle.y);
circle.x = 10;
circle.y = 15;
console.log("После изменения координат круга:");
console.log(circle.getInfo());
console.log("---");