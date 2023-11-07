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

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);
})();