import {Shape} from "./shape";

class Circle extends Shape {
    private posX: number;
    private posY: number;
    private radius: number;

    constructor() {
        super();
        this.radius = 30;
        this.posX = 70;
        this.posY = 70;
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }
}

export {Circle};