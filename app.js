const navSlide = () => {
    const burger = document.querySelector('.navbar__container-burger');
    const nav = document.querySelector('.navbar__container-links');
    const navLinks = document.querySelectorAll('.navbar__container-links-li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Burger animation 
        burger.classList.toggle('toggle');
    });
}
navSlide();

[...document.querySelectorAll(".navbar__button")].forEach(e => {
    e.addEventListener("click", e => {
        const id = e.target.dataset.id
        const elements = document.querySelectorAll(`[data-id="${id}"]`)
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.classList.toggle("active")
            
        }
    })
})