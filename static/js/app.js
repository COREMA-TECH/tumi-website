var menuToggler = document.getElementById('menu-toggle');
var bodyTag = document.getElementById('site-body');

menuToggler.addEventListener('click', _ => {
    bodyTag.classList.toggle("nav-opened");
});
