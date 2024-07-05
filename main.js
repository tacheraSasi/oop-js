class Animal{
    constructor(name){
        this.name = name
    }
    makeSound = ()=>{
        throw new Error("This method should be implemented in the sub classes")
    }
    display = ()=>{
        console.log(`${this.name} makes the sound ${this.makeSound()}`)
    }
}
let a = new Animal("a")

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    makeSound = ()=>{
        return "Woof Woof"
    }

    getName = () => {
        return this.name
    }
    setName = (name)=>{
        this.name = name
    }
}

const dog = new Dog("Railey")
dog.display()
dog.setName("john")
console.log(dog.name)
dog.display()