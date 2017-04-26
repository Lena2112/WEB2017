export interface IShape {
    calculateArea(): number;
    calculatePerimeter(): number;
    draw(ctx: CanvasRenderingContext2D): void;
}