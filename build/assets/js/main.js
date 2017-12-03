'use strict';

ready(function () {
    //добавление стрелок к ссылкам содержацим подменю
    (function () {
        var el = document.querySelectorAll('.header-nav>ul>li ul');

        el.forEach(function (item) {
            item.parentNode.classList += ' dropdown';
        });
    })();

    //анимация выпадающих меню
    (function () {
        var el = document.querySelectorAll('.header-nav>ul>li>ul');

        el.forEach(function (item) {
            var height = 0,
                elInner = item.children;

            [].forEach.call(elInner, function (elem) {
                height += elem.offsetHeight;
            });

            item.parentElement.onmouseenter = function () {
                item.style.height = height + 'px';
            };
            item.parentElement.onmouseleave = function () {
                item.style.height = 0;
            };
        });
    })();

    cutLengthString('.selling-catalog__title', 70, '...');
    cutLengthString('.events-el__title', 50, '...');
});

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

/**
 * обрезка текста по количеству символов
 *
 * @param el string
 * @param maxLength integer
 * @param endSimbols string
 */
function cutLengthString(el) {
    var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    var endSimbols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var arr = document.querySelectorAll(el);

    arr.forEach(function (item, i) {
        //удаление переноса строк и табуляций
        var text = item.textContent.replace(/\s+/g, ' '),
            resultText = void 0;
        if (text.length > +maxLength) {
            resultText = text.slice(0, maxLength).trim() + endSimbols;
            item.textContent = resultText;
        }
    });
}