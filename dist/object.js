'use strict';

var firstname = 'Bill',
    lastname = 'Smit';
email = 'BillSmit@gmail.com';

//OLD

var person = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    sayHello: function sayHello() {
        console.log('Hello! My  name is ' + this.firstname + ' ' + this.lastname);
    }

    //OLD
    /*Object.defineProperty(person, 'fullName', {
        get: function() {
            return this.firstname + " " + this.lastname
        },
        set: function(value) {
            this.firstname = value
        }
    })*/

};console.log(person);
//ES6

/*let person = {
    firstname,
    lastname,
    email,
    sayHello() {
        console.log(`Hello! My  name is ${this.firstname} ${this.lastname}`)
    },
    get fullName() {
        return this.firstname + " " + this.lastname
    },
    set fullName(value) {
        this.firstname = value
    }
}

console.log(person)
person.sayHello()*/

/*
function createCar(property, value) {
    //
    /!*let car = {}
    car[property] = value
    return car*!/

    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property]
    }

    }
}

console.log(createCar('vin', 1))*/