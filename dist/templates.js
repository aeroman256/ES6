'use strict';

var _templateObject = _taggedTemplateLiteral(['hello ', ' ', ' ', ' ', ''], ['hello ', ' ', ' ', ' ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log('Hello ' + name);
}

greet("Bill");

function creatEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}
creatEmail('Ivan', 'Dima', 'hello', 'How you doing?');

var name = 'Bill';
console.log(upperName(_templateObject, name, name, name, name));

function upperName(literals) {
    var res = '';

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < values.length; i++) {
        res += values[i] + ', ';
    }
    return literals[0].toUpperCase() + res.toUpperCase();
}