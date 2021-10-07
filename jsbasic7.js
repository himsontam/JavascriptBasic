module.exports = class person {
    age = 25
    get location()
    {
        return "canada"
    }

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        return this.firstName + " " + this.lastName
    }
}