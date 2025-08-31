// toggle class active
const navbarnav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarnav.classList.toggle('active');
}

// klik diluar sidebar 
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
})

// agar inputan hilang
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName ("form")) {
        form.reset();
    }
}