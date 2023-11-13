function setTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    const darkButton = document.getElementById('dark');

    switch (theme) {
        case 'Dark':
            themeLink.href = 'dark.css';
            darkButton.classList.add('active'); 
            break;
        case 'Neon':
            themeLink.href = 'neon.css';
            darkButton.classList.remove('active');
            break;
        case 'Hack':
            themeLink.href = 'hack.css';
            darkButton.classList.remove('active');
            break;
        default:
            themeLink.href = 'light.css';
            darkButton.classList.remove('active'); 
    }

    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);
})();
