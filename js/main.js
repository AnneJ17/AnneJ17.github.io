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

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        showContent("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        showContent("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;

        showContent("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        showContent("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");

    });
}
