const app = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.header__navlist')
    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}
app()