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
                this.nextElementSibling.style.height = height;
            });
        });
    })();

    cutLengthString('.selling-catalog__title', 70, '...');
    cutLengthString('.events-el__title', 50, '...');
    cutLengthString('.sale-catalog__title', 70, '...');
    cutLengthString('.news__title', 99, '...');

    checkedInput();
    resetInput();

});

/**
 * $(document).ready(function(){}); for JS
 * @param fn - function(){our functions}
 */
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


/**
 * crop text char length
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

/**
 * custom input[type='chekbox']
 * toggle class active to parent element input (label) after click
 */
function checkedInput() {
    let checkbox = document.documentElement.querySelectorAll('input[type="checkbox"]');

    checkbox.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.checked) {
                this.parentElement.classList.add('active');
            } else {
                this.parentElement.classList.remove('active');
            }
        })
    })
}

/**
 * reset for custom input[type='chekbox']
 */
function resetInput() {
    let resetButton = document.documentElement.querySelectorAll('input[type="reset"]'),
        checkbox = document.documentElement.querySelectorAll('input[type="checkbox"]');

    resetButton.forEach(function (item) {
        item.addEventListener('click', function () {
            checkbox.forEach(function (el) {
                setTimeout(function () {
                    if (!el.checked) {
                        el.parentElement.classList.remove('active');
                    }
                }, 100)
            })
        });
    })
}
