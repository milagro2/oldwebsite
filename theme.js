function setTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    const darkButton = document.getElementById('dark');
    const lightButton = document.getElementById('light');
    const neonButton = document.getElementById('neon');
    const hackButton = document.getElementById('hack');

    // Remove "active" class from all buttons
    darkButton.classList.remove('active');
    lightButton.classList.remove('active');
    neonButton.classList.remove('active');
    hackButton.classList.remove('active');

    switch (theme) {
        case 'Dark':
            themeLink.href = 'dark.css';
            darkButton.classList.add('active');
            break;
        case 'Neon':
            themeLink.href = 'neon.css';
            neonButton.classList.add('active');
            break;
        case 'Hack':
            themeLink.href = 'hack.css';
            hackButton.classList.add('active');
            // Load hack.js dynamically
            const script = document.createElement('script');
            script.src = 'hack.js';
            document.body.appendChild(script);
            break;
        default:
            themeLink.href = 'light.css';
            lightButton.classList.add('active');
    }

    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);
})();
