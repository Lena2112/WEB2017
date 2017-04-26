import {Shape} from "./shape";

class Triangle extends Shape {
    private _posX1: number;
    private _posY1: number;
    private _posX2: number;
    private _posY2: number;
    private _posX3: number;
    private _posY3: number;

    constructor() {
        super();
        this._posX1 = 50;
        this._posY1 = 50;
        this._posX2 = 100;
        this._posY2 = 50;
        this._posX3 = 75;
        this._posY3 = 100;
    }
    public CalculateArea(): number {
        return Math.sqrt(this.calculatePerimeter() / 2 * 
           (this.calculatePerimeter() / 2 - calculateDistance(this._posX1, this._posY1, this._posX2, this._posY2)) *
           (this.calculatePerimeter() / 2 - calculateDistance(this._posX1, this._posY1, this._posX3, this._posY3)) *
           (this.calculatePerimeter() / 2 - calculateDistance(this._posX2, this._posY2, this._posX3, this._posY3)));
    }
    public CalculatePerimeter(): number {
        return calculateDistance(this._posX1, this._posY1, this._posX2, this._posY2) +
           calculateDistance(this._posX1, this._posY1, this._posX3, this._posY3) +
           calculateDistance(this._posX2, this._posY2, this._posX3, this._posY3);
    }
	private calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = 2;
        ctx.fillStyle = this._fillColor;
        ctx.strokeStyle = this._borderColor;
        ctx.beginPath();
        ctx.moveTo(this._posX1, this._posY1);
        ctx.lineTo(this._posX2, this._posY2);
        ctx.lineTo(this._posX3, this._posY3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

export {Triangle};