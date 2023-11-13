
function setTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');

    function setTheme(theme) {
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

    (function () {
        const theme = localStorage.getItem('theme') || 'Light';
        setTheme(theme);
    })();

    const theme = localStorage.getItem('theme');

    if (theme === 'Hack') {
        const script = document.createElement('script');
        script.src = 'hack.js';
        document.body.appendChild(script);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});

