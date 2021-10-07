let person = {
    firstName:'Tim',
    lastName:'Tam',
    age: 24,
    fullName : function () {
        return this.firstName+this.lastName
    }
}

console.log(person.lastName)
console.log(person["lastName"])
person.firstName = "Himson"
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log(person.fullName())
