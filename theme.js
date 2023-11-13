function setTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    switch (theme) {
        case 'Dark':
            themeLink.href = 'dark.css';
            break;
        case 'Neon':
            themeLink.href = 'neon.css';
            break;
        case 'Hack':
            themeLink.href = 'hack.css';
            break;
        default:
            themeLink.href = 'light.css';
    }
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}
function setActiveLink() {
    const links = document.querySelectorAll('#navbar ul li a');
    const currentFileName = window.location.pathname.split('/').pop(); // Get the last part of the path

    links.forEach(link => {
        const linkFileName = link.getAttribute('href').split('/').pop(); // Get the last part of the link's path
        if (currentFileName === linkFileName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);
    setActiveLink();
})();

const theme = localStorage.getItem('theme');

if (theme === 'Hack') {
    const script = document.createElement('script');
    script.src = 'hack.js';
    document.body.appendChild(script);
}
