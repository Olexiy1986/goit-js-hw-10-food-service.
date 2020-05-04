'use strict';

import cards from './menu.json';
import menuFeedCardTemplate from './template/menu-card.hbs';
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    cardFeed: document.querySelector('ul.js-menu'),
    switchTheme: document.querySelector('input.js-switch-input'),
    bodyTheme: document.querySelector('body'),
}

const markup = menuFeedCardTemplate(cards);

refs.cardFeed.insertAdjacentHTML('beforeend', markup);

refs.switchTheme.addEventListener('change', changeTheme);

function changeTheme(e) {
    const isTheme = refs.switchTheme.checked;
    currentTheme(isTheme);
}

function currentTheme(isTheme) {
    if (isTheme) {
        darkTheme();
    } else {
        lightTheme();
    }
}

function darkTheme() {
    refs.bodyTheme.classList.remove('light-theme');
    refs.bodyTheme.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
}
function lightTheme() {
    refs.bodyTheme.classList.remove('dark-theme');
    refs.bodyTheme.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
}
const persistedTheme = localStorage.getItem('theme');

if (persistedTheme === Theme.DARK) {
    darkTheme();
} else {
    lightTheme();
}
