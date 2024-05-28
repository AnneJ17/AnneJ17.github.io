/**
 * Adding functionality to the toggle button
 * @type {Element}
 */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/**
 * JavaScript for the experience section tab list
 * @param tabIndex
 * @returns {HTMLCollectionOf<Element>}
 */


document.addEventListener('DOMContentLoaded', function() {
    const tabHeaders = document.querySelectorAll('.tab-header > div');
    const tabContents = document.querySelectorAll('.tab-content > div');
    const tabIndicator = document.querySelector('.tab-indicator');
    const mq = window.matchMedia("screen and (min-width: 700px)");

    tabHeaders.forEach((tabHeader, index) => {
        tabHeader.addEventListener('click', () => {
            // Remove active class from all headers and add it to the clicked one
            document.querySelector('.tab-header .active').classList.remove('active');
            tabHeader.classList.add('active');

            // Move tab indicator
            if (mq.matches) {
                tabIndicator.style.top = `calc(50px + ${index * 50}px)`;
            } else {
                tabIndicator.style.left = `calc((100% / ${tabHeaders.length}) * ${index})`;
            }

            // Remove active class from all content and add it to the corresponding content
            document.querySelector('.tab-content .active').classList.remove('active');
            tabContents[index].classList.add('active');
        });
    });
});

