const app = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.header__navlist');
    const blogsBtnPrev = document.querySelector('.blogs__btn--prev');
    const blogsBtnNext = document.querySelector('.blogs__btn--next');
    const blogsContainer = document.querySelector('.blogs__cards');
    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
    // function to handle scrolling
    const scrollElement = (element, scrollDis) => {
        element.scrollBy({left: scrollDis, behavior: "smooth"})
    }
    // handling the scrolling for the blogs container holding the cards
    blogsBtnPrev.addEventListener('click', () => {
        scrollElement(blogsContainer, -6000)
    })
    blogsBtnNext.addEventListener('click', () => {
        scrollElement(blogsContainer, 6000)
    })
}
app()