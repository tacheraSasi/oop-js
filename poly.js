class Shape{
  area(){
    console.log("This should be implemented in the subclasses")
  }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius
    }
    area(){
        return Math.PI * this.radius * this.radius
    }
}

class Ractangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }

    area(){
        return this.width * this.height
    }
}
const shapes = [new Circle(2), new Ractangle(3,5)]
shapes.forEach(shape=> console.log(shape.area()))