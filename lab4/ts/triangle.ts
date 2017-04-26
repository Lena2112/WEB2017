import {Shape} from "./shape";

class Triangle extends Shape {
    private _X1: number;
    private _Y1: number;
    private _X2: number;
    private _Y2: number;
    private _X3: number;
    private _Y3: number;

    constructor() {
        super();
        this.X1 = 50;
        this.Y1 = 50;
        this.X2 = 100;
        this.Y2 = 50;
        this.X3 = 75;
        this.Y3 = 100;
    }
    public calculateArea(): number {
        return Math.sqrt(this.calculatePerimeter() / 2 *
           (this.calculatePerimeter() / 2 - this.calculateDistance(this._X1, this._Y1, this._X2, this._Y2)) *
           (this.calculatePerimeter() / 2 - this.calculateDistance(this._X1, this._Y1, this._X3, this._Y3)) *
           (this.calculatePerimeter() / 2 - this.calculateDistance(this._X2, this._Y2, this._X3, this._Y3)));
    }
    public calculatePerimeter(): number {
        return this.calculateDistance(this._X1, this._Y1, this._X2, this._Y2) +
           this.calculateDistance(this._X1, this._Y1, this._X3, this._Y3) +
           this.calculateDistance(this._X2, this._Y2, this._X3, this._Y3);
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = 2;
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.beginPath();
        ctx.moveTo(this._X1, this._Y1);
        ctx.lineTo(this._X2, this._Y2);
        ctx.lineTo(this._X3, this._Y3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    private calculateDistance(_X1: number, _Y1: number, _X2: number, _Y2: number): number {
        return Math.sqrt((_X1 - _X2) * (_X1 - _X2) + (_Y1 - _Y2) * (_Y1 - _Y2));
    }
    set X1(x: number) {
        this._X1 = x;
    }
    set Y1(y: number) {
        this._Y1 = y;
    }
    set X2(x: number) {
        this._X2 = x;
    }
    set Y2(y: number) {
        this._Y2 = y;
    }
    set X3(x: number) {
        this._X3 = x;
    }
    set Y3(y: number) {
        this._Y3 = y;
    }
}

export {Triangle};
