




const toggle = document.getElementsByClassName('toggle-btn')[0];
const nav = document.getElementsByClassName('nav-bar')[0];
const bar1 = document.getElementsByClassName('bar1')[0]
const bar2 = document.getElementsByClassName('bar2')[0]
const bar3 = document.getElementsByClassName('bar3')[0]




toggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');

})

