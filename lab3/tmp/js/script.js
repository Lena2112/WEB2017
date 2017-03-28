function Circle() {
    Shape.apply(this, arguments);
    this.radius = 30;
    this.centerX = 70;
    this.centerY = 70;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(canvas) {
    canvas.beginPath();
    canvas.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    canvas.closePath();
    canvas.fillStyle = this.fillColor;
    canvas.strokeStyle = this.borderColor;
    canvas.lineWidth = 2;
    canvas.fill(); 
    canvas.stroke();
};

Circle.prototype.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
};
var circle = new Circle();
var rectangle = new Rectangle();
var triangle = new Triangle();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function ClearParameters()
{
    document.getElementById("circle").style.display="none";
    document.getElementById("rectangle").style.display="none";
    document.getElementById("triangle").style.display="none";
}

function ShapeDraw(value)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch(value)
    {
    case "circle" :
        circle.draw(ctx);
        document.getElementById("circle").style.display="block";
        document.getElementById("perimeter").innerHTML = "Perimeter = " + circle.calculatePerimeter();
        document.getElementById("area").innerHTML = "Area = " + circle.calculatePerimeter();
        break;
    case "rectangle" :
        rectangle.draw(ctx);
        document.getElementById("rectangle").style.display="block";
        document.getElementById("perimeter").innerHTML = "Perimeter = " + rectangle.calculatePerimeter();
        document.getElementById("area").innerHTML = "Area = " + rectangle.calculatePerimeter();
        break;
    case "triangle" :
        triangle.draw(ctx);
        document.getElementById("triangle").style.display="block";
        document.getElementById("perimeter").innerHTML = "Perimeter = " + triangle.calculatePerimeter();
        document.getElementById("area").innerHTML = "Area = " + triangle.calculatePerimeter();
        break;
    }
}

var shape = document.getElementById("select");
shape.onchange = function ()
{
    ClearParameters();
    ShapeDraw(shape.value);
};

var fillColor = document.getElementById("fill_color");
fillColor.onchange = function ()
{
    circle.fillColor = fillColor.value;
    rectangle.fillColor = fillColor.value;
    triangle.fillColor = fillColor.value;
    ShapeDraw(shape.value);
};

var borderColor = document.getElementById("border_color");
borderColor.onchange = function ()
{
    circle.borderColor = borderColor.value;
    rectangle.borderColor = borderColor.value;
    triangle.borderColor = borderColor.value;
    ShapeDraw(shape.value);
};

var radius = document.getElementById("radius");
radius.onchange = function ()
{
    circle.radius = radius.value;
    ShapeDraw(shape.value);
};

var centerX = document.getElementById("centerX");
centerX.onchange = function ()
{
    circle.centerX = centerX.value;
    ShapeDraw(shape.value);
};

var centerY = document.getElementById("centerY");
centerY.onchange = function ()
{
    circle.centerY = centerY.value;
    ShapeDraw(shape.value);
};

var x1Rec = document.getElementById("x1_rectangle");
x1Rec.onchange = function ()
{
    rectangle.X1 = x1Rec.value;
    ShapeDraw(shape.value);
};

var y1Rec = document.getElementById("y1_rectangle");
y1Rec.onchange = function ()
{
    rectangle.Y1 = y1Rec.value;
    ShapeDraw(shape.value);
};

var x2Rec = document.getElementById("x2_rectangle");
x2Rec.onchange = function ()
{
    rectangle.X2 = x2Rec.value;
    ShapeDraw(shape.value);
};

var y2Rec = document.getElementById("y2_rectangle");
y2Rec.onchange = function ()
{
    rectangle.Y2 = y2Rec.value;
    ShapeDraw(shape.value);
};

var x1Tr = document.getElementById("x1_triangle");
x1Tr.onchange = function ()
{
    triangle.X1 = x1Tr.value;
    ShapeDraw(shape.value);
};

var y1Tr = document.getElementById("y1_triangle");
y1Tr.onchange = function ()
{
    triangle.Y1 = y1Tr.value;
    ShapeDraw(shape.value);
};

var x2Tr = document.getElementById("x2_triangle");
x2Tr.onchange = function ()
{
    triangle.X2 = x2Tr.value;
    ShapeDraw(shape.value);
};

var y2Tr = document.getElementById("y2_triangle");
y2Tr.onchange = function ()
{
    triangle.Y2 = y2Tr.value;
    ShapeDraw(shape.value);
};

var x3Tr = document.getElementById("x3_triangle");
x3Tr.onchange = function ()
{
    triangle.X3 = x3Tr.value;
    ShapeDraw(shape.value);
};

var y3Tr = document.getElementById("y3_triangle");
y3Tr.onchange = function ()
{
    triangle.Y3 = y3Tr.value;
    ShapeDraw(shape.value);
};
function Rectangle() {
    Shape.apply(this, arguments);
    this.X1 = 50;
    this.Y1 = 50;
    this.X2 = 100;
    this.Y2 = 100;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function(canvas) {
    canvas.lineWidth = 2;
    canvas.fillStyle = this.fillColor;
    canvas.strokeStyle = this.borderColor;
    canvas.fillRect(this.X1, this.Y1, this.X2 - this.X1, this.Y2 - this.Y1);
    canvas.strokeRect(this.X1, this.Y1, this.X2 - this.X1, this.Y2 - this.Y1);
};

Rectangle.prototype.calculateArea = function() {
    return Math.abs((this.X2 - this.X1) * (this.Y2 - this.Y1));
};

Rectangle.prototype.calculatePerimeter = function() {
    return 2 * Math.abs(((this.X2 - this.X1) + (this.Y2 - this.Y1)));
};
function Shape() {
    this.fillColor = "#000";
    this.borderColor = "#999";
}

Shape.prototype.setFillColor = function(value){
    this.fillColor = value;
};
  
Shape.prototype.getFillColor = function(){
    return this.fillColor;
};
  
Shape.prototype.setBorderColor = function(value){
    this.borderColor = value;
};
  
Shape.prototype.getBorderColor = function(){
    return this.borderColor;
};

Shape.prototype.draw = function(){};

Shape.prototype.calculateArea = function(){};

Shape.prototype.calculatePerimeter = function(){};
  
function Triangle() {
    Shape.apply(this, arguments);
    this.X1 = 50;
    this.Y1 = 50;
    this.X2 = 100;
    this.Y2 = 50;
    this.X3 = 75;
    this.Y3 = 100;
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.draw = function(canvas) {
    canvas.lineWidth = 2;
    canvas.fillStyle = this.fillColor;
    canvas.strokeStyle = this.borderColor;
    canvas.beginPath();
    canvas.moveTo(this.X1, this.Y1);
    canvas.lineTo(this.X2, this.Y2);
    canvas.lineTo(this.X3, this.Y3);
    canvas.closePath();
    canvas.fill();
    canvas.stroke();
};

Triangle.prototype.calculateArea = function() {
    return Math.sqrt(this.perimeter / 2 * 
           (this.perimeter / 2 - calculateDistance(this.X1, this.Y1, this.X2, this.Y2)) *
           (this.perimeter / 2 - calculateDistance(this.X1, this.Y1, this.X3, this.Y3)) *
           (this.perimeter / 2 - calculateDistance(this.X2, this.Y2, this.X3, this.Y3)));
};

function calculateDistance(x1, y1, x2, y2)
{
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

Triangle.prototype.calculatePerimeter = function() {
    return calculateDistance(this.X1, this.Y1, this.X2, this.Y2) +
           calculateDistance(this.X1, this.Y1, this.X3, this.Y3) +
           calculateDistance(this.X2, this.Y2, this.X3, this.Y3);
};