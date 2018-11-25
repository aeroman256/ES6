'use strict';

/*
//es5

let  lang = ['JS', "PHP", 'Java']
function score ([low, mid]){
    console.log(low, mid)
}

function getValues() {
    return [3, 4, 5]
} */

var person = {
    firstname: 'John',
    lastname: 'Smit',
    social: {
        facebook: 'johnsmit',
        twitter: 'jsmit'
    }
};

var first = person.firstname,
    last = person.lastname,
    face = person.social.facebook;


function post(url, _ref) {
    var _ref$data = _ref.data,
        firstname = _ref$data.firstname,
        lastname = _ref$data.lastname,
        cache = _ref.cache;

    console.log(firstname, lastname, cache);
    /*config.data;
    config.cache*/
}

var rasult = post('api/users', { data: person, cache: false });

function getUserInfo() {
    var person = {
        firstname: 'John',
        lastname: 'Smit',
        social: {
            facebook: 'johnsmit',
            twitter: 'jsmit'
        }
    };
    return person;
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    twitter = _getUserInfo.social.twitter;

console.log(firstname, lastname, twitter);