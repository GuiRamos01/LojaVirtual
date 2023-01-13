const ham = document.getElementById('ham');
const nav = document.getElementById('navbar-mobile');


if (ham) {
    ham.addEventListener('click', () => {
        nav.classList.add('active');
    })
}