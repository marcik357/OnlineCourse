// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//====================================================================================================


window.addEventListener('scroll', headerChange);

function headerChange(e) {
    let header = document.querySelector('#header')
    if (window.scrollY > 10) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
};


//====================================================================================================


let tabsNav = document.querySelector('.tabs__nav');

tabsNav.addEventListener('click', activateTab);

function activateTab(e) {
    let tabs = document.querySelectorAll('.tabs__title')
    let tabsContent = document.querySelectorAll('.tabs__item')
    
    if (e.target.closest('.tabs__nav')) {
        document.querySelector('.tabs__title--active').classList.remove('tabs__title--active');
        e.target.classList.add('tabs__title--active');
    }
    tabs.forEach((tab, index) => {
        if (tab.classList.contains('tabs__title--active')) {
            tabsContent.forEach(tab => tab.classList.remove('benefit-tab--active'));
            tabsContent[index].classList.add('benefit-tab--active');
        }
    });
};