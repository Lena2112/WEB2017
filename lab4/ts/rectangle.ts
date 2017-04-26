import {Shape} from "./shape";

class Rectangle extends Shape {
    private posX1: number;
    private posY1: number;
    private posX2: number;
    private posY2: number;

    constructor() {
        super();
        this.posX1 = 50;
        this.posY1 = 50;
        this.posX2 = 100;
        this.posY2 = 100;
    }
    public calculateArea(): number {
        return Math.abs((this.posX2 - this.posX1) * (this.posY2 - this.posY1));
    }
    public calculatePerimeter(): number {
        return 2 * Math.abs(((this.posX2 - this.posX1) + (this.posY2 - this.posY1)));
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = 2;
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.fillRect(this.posX1, this.posY1, this.posX2 - this.posX1, this.posY2 - this.posY1);
        ctx.strokeRect(this.posX1, this.posY1, this.posX2 - this.posX1, this.posY2 - this.posY1);
    }
}

export {Rectangle};