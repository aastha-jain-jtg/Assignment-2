import 'styles';

(() => {
    const main = () => {
        const navbarToggler = document.querySelector(".navbar__toggler");
        const navbarIcon = document.querySelector(".navbar__icon");
        const navbarPopUp  = document.querySelector(".navbar__items");
        const navbarHeader = document.querySelector(".navbar__top");
        const openNavbar = () => {
            navbarIcon.classList.toggle("icon-menu");
            navbarIcon.classList.toggle("icon-close");
            navbarPopUp.classList.toggle("navbar__items--open");
            navbarHeader.classList.toggle("navbar__top--open");
        };
        navbarToggler.addEventListener("click", openNavbar);
    }
    document.addEventListener('DOMContentLoaded', main);
})();
