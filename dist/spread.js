'use strict';

var staticlang = ['C', 'C++', 'Java'];
var dynamiclang = ['js', 'php', 'ruby'];
var lang = [].concat(staticlang, ['Python'], dynamiclang);

console.log(lang);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [8, 2];

add.apply(undefined, numbers);