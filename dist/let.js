'use strict';

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function () {
        console.log('Нажали кнопку: ', i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    _loop(i);
}