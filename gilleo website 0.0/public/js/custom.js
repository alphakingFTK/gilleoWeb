"use strict";
let darkMode = localStorage.getItem('darkMode');

console.log(darkMode);

const enableDarkMode = () => {

    document.body.classList.remove('light');
    document.body.classList.add('dark');

    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

    document.body.classList.remove('dark');
    document.body.classList.add('light');

    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

function darkModeToggle() {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode)
    }
}
