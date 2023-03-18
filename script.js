const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('click', function () {
    bar.classList.toggle('active')
});