import {Shape} from "./shape";

class Circle extends Shape {
    private _posX: number;
    private _posY: number;
    private _radius: number;

    constructor() {
        super();
        this._radius = 30;
        this._posX = 70;
        this._posY = 70;
    }
    public CalculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }
    public CalculatePerimeter(): number {
        return 2 * Math.PI * this._radius;
    }
    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this._posX, this._posY, this._radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this._fillColor;
        ctx.strokeStyle = this._borderColor;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }
}

export {Circle};