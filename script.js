const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('click', function () {
    bar.classList.toggle('active')
});

document.addEventListener('click', function (e) {
    if (!bar.contains(e.target) && !sidebar.contains(e.target)) {
        bar.classList.remove('active');
    }
});