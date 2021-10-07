const Pet = require('./jsbasic9')

let pet = new Pet("Tammy", "Dog")
let petFullName = pet.fullName()
let petLocation = pet.location

console.log(petFullName + " is in " + petLocation);