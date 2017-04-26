import {Shape} from "./shape";

class Triangle extends Shape {
    private posX1: number;
    private posY1: number;
    private posX2: number;
    private posY2: number;
    private posX3: number;
    private posY3: number;

    constructor() {
        super();
        this.posX1 = 50;
        this.posY1 = 50;
        this.posX2 = 100;
        this.posY2 = 50;
        this.posX3 = 75;
        this.posY3 = 100;
    }
    public calculateArea(): number {
        return Math.sqrt(this.calculatePerimeter() / 2 * 
           (this.calculatePerimeter() / 2 - calculateDistance(this.posX1, this.posY1, this.posX2, this.posY2)) *
           (this.calculatePerimeter() / 2 - calculateDistance(this.posX1, this.posY1, this.posX3, this.posY3)) *
           (this.calculatePerimeter() / 2 - calculateDistance(this.posX2, this.posY2, this.posX3, this.posY3)));
    }
    public calculatePerimeter(): number {
        return calculateDistance(this.posX1, this.posY1, this.posX2, this.posY2) +
           calculateDistance(this.posX1, this.posY1, this.posX3, this.posY3) +
           calculateDistance(this.posX2, this.posY2, this.posX3, this.posY3);
    }
	private calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = 2;
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.beginPath();
        ctx.moveTo(this.posX1, this.posY1);
        ctx.lineTo(this.posX2, this.posY2);
        ctx.lineTo(this.posX3, this.posY3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

export {Triangle};