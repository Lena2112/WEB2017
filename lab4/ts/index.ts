import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Shape} from "./shape";
import {Triangle} from "./triangle";

let circle: Circle = new Circle();
let rectangle: Rectangle = new Rectangle();
let triangle: Triangle = new Triangle();

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

function clearParameters(): void{
    <HTMLInputElement> document.getElementById("circle").style.display="none";
    <HTMLInputElement> document.getElementById("rectangle").style.display="none";
    <HTMLInputElement> document.getElementById("triangle").style.display="none";
}

function shapeDraw(value: string){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch(value)
    {
        case "circle" :
            circle.draw(ctx);
            <HTMLInputElement> document.getElementById("circle").style.display="block";
            <HTMLInputElement> document.getElementById("perimeter").innerHTML = "Perimeter = " + circle.calculatePerimeter();
            <HTMLInputElement> document.getElementById("area").innerHTML = "Area = " + circle.calculateArea();
            break;
        case "rectangle" :
            rectangle.draw(ctx);
            <HTMLInputElement> document.getElementById("rectangle").style.display="block";
            <HTMLInputElement> document.getElementById("perimeter").innerHTML = "Perimeter = " + rectangle.calculatePerimeter();
            <HTMLInputElement> document.getElementById("area").innerHTML = "Area = " + rectangle.calculateArea();
            break;
        case "triangle" :
            triangle.draw(ctx);
            <HTMLInputElement> document.getElementById("triangle").style.display="block";
            <HTMLInputElement> document.getElementById("perimeter").innerHTML = "Perimeter = " + triangle.calculatePerimeter();
            <HTMLInputElement> document.getElementById("area").innerHTML = "Area = " + triangle.calculateArea();
            break;
    }
}

let shape: string = <HTMLInputElement> document.getElementById("select").value;
shape.onchange = (): void => {
    clearParameters();
    shapeDraw(shape);
};

let fillColor: string = <HTMLInputElement> document.getElementById("fill_color").value;
fillColor.onchange = (): void => {
    circle.fillColor = fillColor;
    rectangle.fillColor = fillColor;
    triangle.fillColor = fillColor;
    shapeDraw(shape);
};

let borderColor: string = <HTMLInputElement> document.getElementById("border_color").value;
borderColor.onchange = (): void => {
    circle.borderColor = borderColor;
    rectangle.borderColor = borderColor;
    triangle.borderColor = borderColor;
    shapeDraw(shape);
};

let radius: number = <HTMLInputElement> document.getElementById("radius").value;
radius.onchange = (): void => {
    circle.radius = radius;
    shapeDraw(shape);
};

let centerX: number = <HTMLInputElement> document.getElementById("centerX").value;
centerX.onchange = (): void => {
    circle.centerX = centerX;
    ShapeDraw(shape);
};

let centerY: number = <HTMLInputElement> document.getElementById("centerY").value;
centerY.onchange = (): void => {
    circle.centerY = centerY;
    shapeDraw(shape);
};

let x1Rec: number = <HTMLInputElement> document.getElementById("x1_rectangle").value;
x1Rec.onchange = (): void => {
    rectangle.X1 = x1Rec;
    ShapeDraw(shape);
};

let y1Rec: number = <HTMLInputElement> document.getElementById("y1_rectangle").value;
y1Rec.onchange = (): void => {
    rectangle.Y1 = y1Rec;
    ShapeDraw(shape);
};

let x2Rec: number = <HTMLInputElement> document.getElementById("x2_rectangle").value;
x2Rec.onchange = (): void => {
    rectangle.X2 = x2Rec;
    ShapeDraw(shape);
};

let y2Rec: number = <HTMLInputElement> document.getElementById("y2_rectangle").value;
y2Rec.onchange = (): void => {
    rectangle.Y2 = y2Rec;
    ShapeDraw(shape);
};

let x1Tr: number = <HTMLInputElement> document.getElementById("x1_triangle").value;
x1Tr.onchange = (): void => {
    triangle.X1 = x1Tr;
    ShapeDraw(shape);
};

let y1Tr: number = <HTMLInputElement> document.getElementById("y1_triangle").value;
y1Tr.onchange = (): void => {
    triangle.Y1 = y1Tr;
    ShapeDraw(shape);
};

let x2Tr: number = <HTMLInputElement> document.getElementById("x2_triangle").value;
x2Tr.onchange = (): void => {
    triangle.X2 = x2Tr;
    ShapeDraw(shape);
};

let y2Tr: number = <HTMLInputElement> document.getElementById("y2_triangle").value;
y2Tr.onchange = (): void => {
    triangle.Y2 = y2Tr;
    ShapeDraw(shape);
};

let x3Tr: number = <HTMLInputElement> document.getElementById("x3_triangle").value;
x3Tr.onchange = (): void => {
    triangle.X3 = x3Tr;
    ShapeDraw(shape);
};

let y3Tr: number = <HTMLInputElement> document.getElementById("y3_triangle").value;
y3Tr.onchange = (): void => {
    triangle.Y3 = y3Tr;
    ShapeDraw(shape);
};