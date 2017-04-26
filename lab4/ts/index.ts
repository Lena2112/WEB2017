import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Shape} from "./shape";
import {Triangle} from "./triangle";

let circle: Circle = new Circle();
let rectangle: Rectangle = new Rectangle();
let triangle: Triangle = new Triangle();

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

function ClearParameters(): void{
    <HTMLInputElement> document.getElementById("circle").style.display="none";
    <HTMLInputElement> document.getElementById("rectangle").style.display="none";
    <HTMLInputElement> document.getElementById("triangle").style.display="none";
}

function ShapeDraw(value: string){
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

let shape: Shape: number = <HTMLInputElement> document.getElementById("select");
shape.onchange = (): void => {
    ClearParameters();
    ShapeDraw(shape.value);
};

let fillColor: string: number = <HTMLInputElement> document.getElementById("fill_color");
fillColor.onchange = (): void => {
    circle.fillColor = fillColor.value;
    rectangle.fillColor = fillColor.value;
    triangle.fillColor = fillColor.value;
    ShapeDraw(shape.value);
};

let borderColor: string: number = <HTMLInputElement> document.getElementById("border_color");
borderColor.onchange = (): void => {
    circle.borderColor = borderColor.value;
    rectangle.borderColor = borderColor.value;
    triangle.borderColor = borderColor.value;
    ShapeDraw(shape.value);
};

let radius: number = <HTMLInputElement> document.getElementById("radius");
radius.onchange = (): void => {
    circle.radius = radius.value;
    ShapeDraw(shape.value);
};

let centerX: number = <HTMLInputElement> document.getElementById("centerX");
centerX.onchange = (): void => {
    circle.centerX = centerX.value;
    ShapeDraw(shape.value);
};

let centerY: number = <HTMLInputElement> document.getElementById("centerY");
centerY.onchange = (): void => {
    circle.centerY = centerY.value;
    ShapeDraw(shape.value);
};

let x1Rec: number = <HTMLInputElement> document.getElementById("x1_rectangle");
x1Rec.onchange = (): void => {
    rectangle.X1 = x1Rec.value;
    ShapeDraw(shape.value);
};

let y1Rec: number = <HTMLInputElement> document.getElementById("y1_rectangle");
y1Rec.onchange = (): void => {
    rectangle.Y1 = y1Rec.value;
    ShapeDraw(shape.value);
};

let x2Rec: number = <HTMLInputElement> document.getElementById("x2_rectangle");
x2Rec.onchange = (): void => {
    rectangle.X2 = x2Rec.value;
    ShapeDraw(shape.value);
};

let y2Rec: number = <HTMLInputElement> document.getElementById("y2_rectangle");
y2Rec.onchange = (): void => {
    rectangle.Y2 = y2Rec.value;
    ShapeDraw(shape.value);
};

let x1Tr: number = <HTMLInputElement> document.getElementById("x1_triangle");
x1Tr.onchange = (): void => {
    triangle.X1 = x1Tr.value;
    ShapeDraw(shape.value);
};

let y1Tr: number = <HTMLInputElement> document.getElementById("y1_triangle");
y1Tr.onchange = (): void => {
    triangle.Y1 = y1Tr.value;
    ShapeDraw(shape.value);
};

let x2Tr: number = <HTMLInputElement> document.getElementById("x2_triangle");
x2Tr.onchange = (): void => {
    triangle.X2 = x2Tr.value;
    ShapeDraw(shape.value);
};

let y2Tr: number = <HTMLInputElement> document.getElementById("y2_triangle");
y2Tr.onchange = (): void => {
    triangle.Y2 = y2Tr.value;
    ShapeDraw(shape.value);
};

let x3Tr: number = <HTMLInputElement> document.getElementById("x3_triangle");
x3Tr.onchange = (): void => {
    triangle.X3 = x3Tr.value;
    ShapeDraw(shape.value);
};

let y3Tr: number = <HTMLInputElement> document.getElementById("y3_triangle");
y3Tr.onchange = (): void => {
    triangle.Y3 = y3Tr.value;
    ShapeDraw(shape.value);
};