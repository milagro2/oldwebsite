function setTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    const themeButtons = document.querySelectorAll('.theme-button');

    themeButtons.forEach(button => {
        button.classList.remove('light-theme', 'dark-theme', 'neon-theme', 'hack-theme');
    });

    switch (theme) {
        case 'Dark':
            themeLink.href = 'dark.css';
            themeButtons.forEach(button => button.classList.add('dark-theme'));
            break;
        case 'Neon':
            themeLink.href = 'neon.css';
            themeButtons.forEach(button => button.classList.add('neon-theme'));
            break;
        case 'Hack':
            themeLink.href = 'hack.css';
            themeButtons.forEach(button => button.classList.add('hack-theme'));
            break;
        default:
            themeLink.href = 'light.css';
            themeButtons.forEach(button => button.classList.add('light-theme'));
    }

    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);
})();
