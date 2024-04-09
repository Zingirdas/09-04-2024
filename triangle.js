//Nr.1
var Triangle = /** @class */ (function () {
    function Triangle(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.validateTriangle();
    }
    //Nr.2
    Triangle.prototype.setSideA = function (value) {
        this.A = value;
        this.validateTriangle();
    };
    Triangle.prototype.getSideA = function () {
        return this.A;
    };
    Triangle.prototype.setSideB = function (value) {
        this.B = value;
        this.validateTriangle();
    };
    Triangle.prototype.getSideB = function () {
        return this.B;
    };
    Triangle.prototype.setSideC = function (value) {
        this.C = value;
        this.validateTriangle();
    };
    Triangle.prototype.getSideC = function () {
        return this.C;
    };
    //Nr.3
    Triangle.prototype.validateTriangle = function () {
        if (!(this.A + this.B > this.C && this.A + this.C > this.B && this.B + this.C > this.A)) {
            throw new Error("Su šiomis kraštinėmis trikampis negali būti sudarytas.");
        }
    };
    //Nr.5
    Triangle.prototype.toString = function () {
        return "Trikampio kra\u0161tin\u0117s: ".concat(this.A, ", ").concat(this.B, ", ").concat(this.C);
    };
    //Nr.6
    Triangle.prototype.getPerimeter = function () {
        return this.A + this.B + this.C;
    };
    //Nr.7
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.A) * (s - this.B) * (s - this.C));
    };
    // Nr.8
    Triangle.prototype.largerTriangle = function (t) {
        return this.getArea() >= t.getArea();
    };
    return Triangle;
}());
//Nr.9
var triangles = [
    new Triangle(3, 4, 5),
    new Triangle(5, 12, 13),
    new Triangle(7, 8, 10)
];
var totalArea = 0;
triangles.forEach(function (triangle) {
    totalArea += triangle.getArea();
});
console.log("Visų trikampių plotų suma:", totalArea.toFixed(2));
