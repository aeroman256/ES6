'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "friend";

    console.log(greeting + ' ' + name);
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
    var sum = 0;
    var array = [].concat(Array.prototype.slice.call(arguments));
    array.forEach(function (value) {
        sum += value;
    });

    return sum;
}
//reduce
function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var sum = values.reduce(function (prevValue, currentVallue) {
        console.log('prevValue: ', prevValue, '___', 'currentVallue: ', currentVallue);
        return prevValue + currentVallue;
    });
    return sum;
}

console.log(sum(5, 7, 2, 10));