ready(function () {
    //добавление стрелок к ссылкам содержацим подменю
    (() => {
        let el = document.querySelectorAll('.header-nav>ul>li ul');

        el.forEach(function (item) {
            item.parentNode.classList += ' dropdown';
        });
    })();

    //анимация выпадающих меню
    (() => {
        let el = document.querySelectorAll('.header-nav>ul>li>ul');

        el.forEach(function (item) {
            let height = 0,
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

    //аккордеон FAQ
    (() => {
        let el = document.querySelectorAll('.question__title');


        el.forEach(function (item) {

            item.addEventListener('click', function () {

                let height = this.nextElementSibling.scrollHeight + 'px';

                if (this.parentElement.classList.contains('active')) {
                    this.nextElementSibling.style.height = '0';
                    this.parentElement.classList.remove('active');
                    return
                }

                el.forEach(function (item) {
                    item.nextElementSibling.style.height = '0';
                    item.parentElement.classList.remove('active');
                });

                this.parentElement.classList.toggle('active');
                this.nextElementSibling.style.height = height ;
            });
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
function cutLengthString(el, maxLength = 200, endSimbols = '') {
    let arr = document.querySelectorAll(el);

    arr.forEach(function (item, i) {
        //удаление переноса строк и табуляций
        let text = item.textContent.replace(/\s+/g, ' '),
            resultText;
        if (text.length > +maxLength) {
            resultText = text.slice(0, maxLength).trim() + endSimbols;
            item.textContent = resultText;
        }
    });
}

