
//Nr.1
class Triangle {
    private A: number;
    private B: number;
    private C: number;

    constructor(A: number, B: number, C: number) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.validateTriangle();
    }
    //Nr.2
    public setSideA(value: number): void {
        this.A = value;
        this.validateTriangle();
    }
    
    public getSideA(): number {
        return this.A;
    }
    
    public setSideB(value: number): void {
        this.B = value;
        this.validateTriangle();
    }
    
    public getSideB(): number {
        return this.B;
    }
    
    public setSideC(value: number): void {
        this.C = value;
        this.validateTriangle();
    }
    
    public getSideC(): number {
        return this.C;
    }
//Nr.3
    private validateTriangle(): void {
      if (!(this.A + this.B > this.C && this.A + this.C > this.B && this.B + this.C > this.A)) {
          throw new Error("Su šiomis kraštinėmis trikampis negali būti sudarytas.");
        }
    }
//Nr.5
    public toString(): string {
        return `Trikampio kraštinės: ${this.A}, ${this.B}, ${this.C}`;
                
    }
//Nr.6
    public getPerimeter(): number {
        return this.A + this.B + this.C;
    }
//Nr.7
    public getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.A) * (s - this.B) * (s - this.C));
    }
// Nr.8
    public largerTriangle(t: Triangle): boolean {
        return this.getArea() >= t.getArea();
    }
}
//Nr.9
const triangles: Triangle[] = [
    new Triangle(3, 4, 5),
    new Triangle(5, 12, 13),
    new Triangle(7, 8, 10)
];

let totalArea: number = 0;
triangles.forEach(triangle => {
    totalArea += triangle.getArea();
});

console.log("Visų trikampių plotų suma:", totalArea.toFixed(2));
