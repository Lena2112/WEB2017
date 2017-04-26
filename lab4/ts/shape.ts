import {IShape} from "ishape";

abstract class Shape implements IShape {
    private _fillColor: string = "#000";
    private _borderColor: string = "#999";

    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
    public abstract draw(ctx: CanvasRenderingContext2D): void;
    set fillColor(color: string) {
        this._fillColor = color;
    }
    get fillColor(): string {
        return this._fillColor;
    }
    set borderColor(color: string) {
        this._borderColor = color;
    }
    get borderColor(): string {
        return this._borderColor;
    }
}

export {Shape};
