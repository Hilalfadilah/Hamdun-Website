const Navbar = document.querySelector('.navbar-nav');
const sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('click', function () {
    Navbar.classList.toggle('active')
});

document.addEventListener('click', function (e) {
    if (!Navbar.contains(e.target) && !sidebar.contains(e.target)) {
        bar.classList.remove('active');
    }
});