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
  