import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Shape} from "./shape";
import {Triangle} from "./triangle";

const circle: Circle = new Circle();
const rectangle: Rectangle = new Rectangle();
const triangle: Triangle = new Triangle();

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

function clearParameters(): void {
    document.getElementById("circle").style.display = "none";
    document.getElementById("rectangle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
}

function shapeDraw(value: string) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (value) {
        case "circle":
            circle.draw(ctx);
            document.getElementById("circle").style.display = "block";
            document.getElementById("perimeter").innerHTML = "Perimeter = " + circle.calculatePerimeter();
            document.getElementById("area").innerHTML = "Area = " + circle.calculateArea();
            break;
        case "rectangle":
            rectangle.draw(ctx);
            document.getElementById("rectangle").style.display = "block";
            document.getElementById("perimeter").innerHTML = "Perimeter = " + rectangle.calculatePerimeter();
            document.getElementById("area").innerHTML = "Area = " + rectangle.calculateArea();
            break;
        case "triangle":
            triangle.draw(ctx);
            document.getElementById("triangle").style.display = "block";
            document.getElementById("perimeter").innerHTML = "Perimeter = " + triangle.calculatePerimeter();
            document.getElementById("area").innerHTML = "Area = " + triangle.calculateArea();
            break;
        default:
            break;
    }
}

const shape: HTMLInputElement = document.getElementById("select") as HTMLInputElement;
shape.onchange = (): void => {
    clearParameters();
    shapeDraw(shape.value);
};

const fillColor: HTMLInputElement = document.getElementById("fill_color") as HTMLInputElement;
fillColor.onchange = (): void => {
    circle.fillColor = fillColor.value;
    rectangle.fillColor = fillColor.value;
    triangle.fillColor = fillColor.value;
    shapeDraw(shape.value);
};

const borderColor: HTMLInputElement = document.getElementById("border_color") as HTMLInputElement;
borderColor.onchange = (): void => {
    circle.borderColor = borderColor.value;
    rectangle.borderColor = borderColor.value;
    triangle.borderColor = borderColor.value;
    shapeDraw(shape.value);
};

const radius: HTMLInputElement = document.getElementById("radius") as HTMLInputElement;
radius.onchange = (): void => {
    circle.radius = parseInt(radius.value, 10);
    shapeDraw(shape.value);
};

const centerX: HTMLInputElement = document.getElementById("centerX") as HTMLInputElement;
centerX.onchange = (): void => {
    circle.centerX = parseInt(centerX.value, 10);
    shapeDraw(shape.value);
};

const centerY: HTMLInputElement = document.getElementById("centerY") as HTMLInputElement;
centerY.onchange = (): void => {
    circle.centerY = parseInt(centerY.value, 10);
    shapeDraw(shape.value);
};

const x1Rec: HTMLInputElement = document.getElementById("x1_rectangle") as HTMLInputElement;
x1Rec.onchange = (): void => {
    rectangle.X1 = parseInt(x1Rec.value, 10);
    shapeDraw(shape.value);
};

const y1Rec: HTMLInputElement = document.getElementById("y1_rectangle") as HTMLInputElement;
y1Rec.onchange = (): void => {
    rectangle.Y1 = parseInt(y1Rec.value, 10);
    shapeDraw(shape.value);
};

const x2Rec: HTMLInputElement = document.getElementById("x2_rectangle") as HTMLInputElement;
x2Rec.onchange = (): void => {
    rectangle.X2 = parseInt(x2Rec.value, 10);
    shapeDraw(shape.value);
};

const y2Rec: HTMLInputElement = document.getElementById("y2_rectangle") as HTMLInputElement;
y2Rec.onchange = (): void => {
    rectangle.Y2 = parseInt(y2Rec.value, 10);
    shapeDraw(shape.value);
};

const x1Tr: HTMLInputElement = document.getElementById("x1_triangle") as HTMLInputElement;
x1Tr.onchange = (): void => {
    triangle.X1 = parseInt(x1Tr.value, 10);
    shapeDraw(shape.value);
};

const y1Tr: HTMLInputElement = document.getElementById("y1_triangle") as HTMLInputElement;
y1Tr.onchange = (): void => {
    triangle.Y1 = parseInt(y1Tr.value, 10);
    shapeDraw(shape.value);
};

const x2Tr: HTMLInputElement = document.getElementById("x2_triangle") as HTMLInputElement;
x2Tr.onchange = (): void => {
    triangle.X2 = parseInt(x2Tr.value, 10);
    shapeDraw(shape.value);
};

const y2Tr: HTMLInputElement = document.getElementById("y2_triangle")  as HTMLInputElement;
y2Tr.onchange = (): void => {
    triangle.Y2 = parseInt(y2Tr.value, 10);
    shapeDraw(shape.value);
};

const x3Tr: HTMLInputElement = document.getElementById("x3_triangle") as HTMLInputElement;
x3Tr.onchange = (): void => {
    triangle.X3 = parseInt(x3Tr.value, 10);
    shapeDraw(shape.value);
};

const y3Tr: HTMLInputElement = document.getElementById("y3_triangle") as HTMLInputElement;
y3Tr.onchange = (): void => {
    triangle.Y3 = parseInt(y3Tr.value, 10);
    shapeDraw(shape.value);
};
