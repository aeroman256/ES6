/*
//es5

let  lang = ['JS', "PHP", 'Java']
function score ([low, mid]){
    console.log(low, mid)
}

function getValues() {
    return [3, 4, 5]
} */

let person = {
    firstname: 'John',
    lastname: 'Smit',
    social: {
        facebook: 'johnsmit',
        twitter: 'jsmit'
    }
}

let {firstname: first, lastname: last, social: {facebook: face}} = person

function post(url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache)
    /*config.data;
    config.cache*/
}

let rasult = post('api/users', {data: person, cache: false})

function getUserInfo() {
    let person = {
        firstname: 'John',
        lastname: 'Smit',
        social: {
            facebook: 'johnsmit',
            twitter: 'jsmit'
        }
    }
    return person
}

let{firstname, lastname, social : {twitter}} = getUserInfo();

console.log(firstname, lastname, twitter)