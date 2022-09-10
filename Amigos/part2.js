// Function Default Parameters

const calculatedPay = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatedPay(22000, {teamBonus: 10000, employeeBonus: 6000}))

// **************OOP

class Animal {
    constructor(name, age) {
        console.log(`${name}, is an animal and was created`);
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

}

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();

// *************** Inheritance

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed;
    }

    logBreed() {
        console.log(`${this.name} is a ${this.breed}`);
    }

    logAgeFromDog() {
        // super.log
    }


}

const mike = new Dog('Mike', 5, 'Bulldog');
mike.logBreed();