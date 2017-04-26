import {Shape} from "./shape";

class Rectangle extends Shape {
    private _X1: number;
    private _Y1: number;
    private _X2: number;
    private _Y2: number;

    constructor() {
        super();
        this._X1 = 50;
        this._Y1 = 50;
        this._X2 = 100;
        this._Y2 = 100;
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
	set _X1(x: string) {
        this._X1 = x;
    }
	set _Y1(y: string) {
        this._Y1 = y;
    }
	set _X2(x: string) {
        this._X2 = x;
    }
	set _Y2(y: string) {
        this._Y2 = y;
    }
}

export {Rectangle};
