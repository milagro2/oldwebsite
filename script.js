window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};






const text = "WELCOME!";
const container = document.getElementById('cool');

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.setProperty('--i', i + 1);
    container.appendChild(span);
}



// todo list line
const todoList = document.getElementById('todo-list');
todoList.addEventListener('change', function (event) {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
        listItem.style.textDecoration = 'line-through';
    } else {
        listItem.style.textDecoration = 'none';
    }
});


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
