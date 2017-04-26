import {Shape} from "./shape";

class Rectangle extends Shape {
    private _X1: number;
    private _Y1: number;
    private _X2: number;
    private _Y2: number;

    constructor() {
        super();
        this.X1 = 50;
        this.Y1 = 50;
        this.X2 = 100;
        this.Y2 = 100;
    }
    public calculateArea(): number {
        return Math.abs((this._X2 - this._X1) * (this._Y2 - this._Y1));
    }
    public calculatePerimeter(): number {
        return 2 * (Math.abs(this._X2 - this._X1) + Math.abs(this._Y2 - this._Y1));
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = 2;
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.fillRect(this._X1, this._Y1, this._X2 - this._X1, this._Y2 - this._Y1);
        ctx.strokeRect(this._X1, this._Y1, this._X2 - this._X1, this._Y2 - this._Y1);
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
}

export {Rectangle};
