const Person = require('./jsbasic7')

module.exports =  class Pet extends Person{
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    get location(){
        return "BlueCross"
    }


}

// let pet = new Pet("Tammy", "Tom")
// let petFullName = pet.fullName()
// let petLocation = pet.location
//
// console.log(petFullName + " is in " + petLocation);