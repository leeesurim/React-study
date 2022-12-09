class Human{
    constructor(){
        this.gender = "male";
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Toby';
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

// class Human{
//     constructor(){
//         gender = "male";
//     }

//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     constructor() {
//         super();
//         name = 'Toby';
//         gender = "X";
//     }

//     printMyName = () => {
//         console.log(this.name);
//     }
// }
