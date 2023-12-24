class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
            this.subject = subject;
        }
    }