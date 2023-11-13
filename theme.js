function setTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    const darkButton = document.getElementById('dark');
    const lightButton = document.getElementById('light');
    const neonButton = document.getElementById('neon');
    const hackButton = document.getElementById('hack');

    switch (theme) {
        case 'Dark':
            themeLink.href = 'dark.css';
            darkButton.classList.add('active');
            lightButton.classList.remove('active');
            neonButton.classList.remove('active');
            hackButton.classList.remove('active');
            break;
        case 'Neon':
            themeLink.href = 'neon.css';
            darkButton.classList.remove('active');
            neonButton.classList.add('active'); 
            lightButton.classList.remove('active');
            hackButton.classList.remove('active');
            break;
        case 'Hack':
            themeLink.href = 'hack.css';
            darkButton.classList.remove('active');
            neonButton.classList.remove('active');
            lightButton.classList.remove('active');
            hackButton.classList.add('active');
            break;
        default:
            themeLink.href = 'light.css';
            darkButton.classList.remove('active');
            neonButton.classList.remove('active');
            lightButton.classList.add('active');
            hackButton.classList.remove('active');
    }

    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);
})();

// Add this to your existing script in navbar.html

(function () {
    const theme = localStorage.getItem('theme') || 'Light';
    setTheme(theme);

    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Add the 'active' class to the corresponding nav item
    const navItems = document.querySelectorAll('#navbar .nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
})();
