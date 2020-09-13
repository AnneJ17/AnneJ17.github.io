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

function showContent(tabIndex){
    return document.getElementsByClassName(tabIndex);
}

let tabPanes = showContent("tab-header")[0].getElementsByTagName("div");
let mq = window.matchMedia("screen and (min-width: 700px)");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        showContent("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        if (mq.matches) {
            showContent("tab-indicator")[0].style.top = `calc(50px + ${i*50}px)`;
        } else {
            showContent("tab-indicator")[0].style.left = `calc(calc(100% / 3) * ${i})`;
        }

        showContent("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        showContent("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");

    });
}
