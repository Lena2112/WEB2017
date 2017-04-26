import {Shape} from "./shape";

class Rectangle extends Shape {
    private _posX1: number;
    private _posY1: number;
    private _posX2: number;
    private _posY2: number;

    constructor() {
        super();
        this._posX1 = 50;
        this._posY1 = 50;
        this._posX2 = 100;
        this._posY2 = 100;
    }
    public CalculateArea(): number {
        return Math.abs((this._posX2 - this._posX1) * (this._posY2 - this._posY1));
    }
    public CalculatePerimeter(): number {
        return 2 * Math.abs(((this._posX2 - this._posX1) + (this._posY2 - this._posY1)));
    }
    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = 2;
        ctx.fillStyle = this._fillColor;
        ctx.strokeStyle = this._borderColor;
        ctx.fillRect(this._posX1, this._posY1, this._posX2 - this._posX1, this._posY2 - this._posY1);
        ctx.strokeRect(this._posX1, this._posY1, this._posX2 - this._posX1, this._posY2 - this._posY1);
    }
}

export {Rectangle};