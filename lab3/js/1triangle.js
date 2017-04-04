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
    return Math.sqrt(this.calculatePerimeter() / 2 * 
           (this.calculatePerimeter() / 2 - calculateDistance(this.X1, this.Y1, this.X2, this.Y2)) *
           (this.calculatePerimeter() / 2 - calculateDistance(this.X1, this.Y1, this.X3, this.Y3)) *
           (this.calculatePerimeter() / 2 - calculateDistance(this.X2, this.Y2, this.X3, this.Y3)));
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