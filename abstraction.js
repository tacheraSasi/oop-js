class Animal{
    constructor(name){
        this.name = name
    }
    makeSound = ()=>{
        return "Some sound"
    }
    display = ()=>{
        console.log(`${this.name} makes the sound ${this.makeSound()}`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    makeSound = () => {
        return "woof woof"
    }
}

const dog  = new Dog("riley")
dog.display()