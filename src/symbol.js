let user = {
    username: 'Name',
    [Symbol('password')]: '1234',
    [Symbol.for('password2')]: '4321'
}

console.log(Object.keys(user))
//вытащить символ, созданный с помощью метода for, из свойств объекта
console.log(user[Symbol.for('password2')])
//Просмотреть все символы у объекта
console.log(Object.getOwnPropertySymbols(user))


let object = {
    iterator: 0,
    [Symbol.iterator](){}
}