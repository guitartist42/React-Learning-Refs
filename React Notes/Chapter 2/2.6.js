class Human {
    
    gender = "male";
    
    printGender=()=>{
        console.log(this.gender);
    }
}

class Person extends Human{
        name = "Max";
        gender = "female"
    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

//works just as well now with next generational javascript