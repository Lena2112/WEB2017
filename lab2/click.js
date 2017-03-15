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