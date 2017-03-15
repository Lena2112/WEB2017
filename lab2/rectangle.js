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