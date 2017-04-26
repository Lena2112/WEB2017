import {Shape} from "./shape";

class Circle extends Shape {
    private _radius: number;
    private _centerX: number;
    private _centerY: number;

    constructor() {
        super();
        this._radius = 30;
        this._centerX = 70;
        this._centerY = 70;
    }
    public calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }
    public calculatePerimeter(): number {
        return 2 * Math.PI * this._radius;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this._centerX, this._centerY, this._radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }
    set radius(radius: number) {
        this._radius = radius;
    }
    set centerX(x: number) {
        this._centerX = x;
    }
    set centerY(y: number) {
        this._centerY = y;
    }
}

export {Circle};
