'use strict';


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
if (isMobile.any()) {
    document.body.classList.add(`_touch`);
}
else {
    document.body.classList.add(`_pc`);

}

const menuArrows = document.querySelectorAll(`.menu__arrow`);

if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
        const menuArrow = menuArrows[i];
        menuArrow.addEventListener(`click`, function (e) {
            menuArrow.classList.toggle(`_active`);
            menuArrow.parentElement.classList.toggle(`_active`);
        });
    }

}

const menuIcon = document.querySelector(`.menu__icon`);
const menuBody = document.querySelector(`.menu__body`);
if (menuIcon) {
    menuIcon.addEventListener(`click`, function (e) {
        menuBody.classList.toggle(`_active`);
        document.body.classList.toggle(`_lock`);
        menuIcon.classList.toggle(`_active`);
    });
}

