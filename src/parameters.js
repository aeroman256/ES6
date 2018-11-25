function greet(greeting = 'Hello', name = "friend") {
    console.log(`${greeting} ${name}`)
}

/*function sum() {

    var sum = 0;
    Array.prototype.forEach.call(arguments, function(value) {
        sum += value
    })

    console.log(sum)
}*/


//forEach + arguments
function sum() {
    let sum = 0
    let array = [...arguments];
    array.forEach(function (value) {
        sum += value
    })

    return sum
}
//reduce
function sum(...values) {
    let sum = values.reduce(function(prevValue, currentVallue){
        console.log('prevValue: ', prevValue, '___', 'currentVallue: ', currentVallue)
        return prevValue + currentVallue
    })
    return sum
}

console.log(sum(5, 7, 2, 10))