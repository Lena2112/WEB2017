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