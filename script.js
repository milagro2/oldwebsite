window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// scroll to location of button press

// window.onload = function () {
//     var scrollPos = sessionStorage.getItem('scrollPos');
//     if (scrollPos) {
//         window.scrollTo(0, scrollPos);
//         sessionStorage.removeItem('scrollPos');
//     }
// };

// document.addEventListener('DOMContentLoaded', function () {
//     var themeButtons = document.querySelectorAll('button[name="theme"]');
//     themeButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             sessionStorage.setItem('scrollPos', window.scrollY);
//             history.replaceState(null, null, ' ');
//         });
//     });
// });



    document.addEventListener("DOMContentLoaded", function () {
        const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.parentNode.classList.add('active');
            }
        });
    });









// dark/light mode

// let isBlack = false;
// const body = document.body;
// const sunMoon = document.getElementById("sun-moon");
// const TextDivs = document.querySelectorAll("div[id^='texT']"); //done
// const BackColor = [];
// const TextColor = document.querySelectorAll(".todo-text, .notes-text, .done-text, .sticky-block, .sticky-block a");
// const HeadColor = document.querySelector("header");//done
// const Images = document.querySelectorAll("img[id^='texT']");//done


// const originalColors = {
//     body: body.style.backgroundColor,
//     backColor: [],
//     textColor: [],
//     headerBackground: HeadColor.style.background,
//     headColor: {
//         color: HeadColor.style.color
//     },
//     imagesBackground: []
// };

// TextDivs.forEach((div) => {
//     originalColors.backColor.push(div.style.backgroundColor);
//     BackColor.push(div);
// });

// TextColor.forEach((text) => {
//     originalColors.textColor.push(text.style.color);
// });

// Images.forEach((img) => {
//     originalColors.imagesBackground.push(img.style.backgroundColor);
// });

// function toggleBackground() {
//     if (isBlack) {
//         body.style.backgroundColor = originalColors.body;
//         body.style.color = originalColors.body;
//         sunMoon.src = "sun.png";
//         isBlack = false;
//         BackColor.forEach((div, index) => {
//             div.style.backgroundColor = originalColors.backColor[index];
//         });
//         TextColor.forEach((text, index) => {
//             text.style.color = originalColors.textColor[index];
//         });
//         Images.forEach((img, index) => {
//             img.style.backgroundColor = originalColors.imagesBackground[index];
//         });
//         HeadColor.style.background = "linear-gradient(to right, #881700, #ff6000, #881700)";
//         HeadColor.style.color = originalColors.headColor.color;
//     } else {
//         body.style.backgroundColor = "#191919";
//         body.style.color = "#ffffffba";
//         sunMoon.src = "moon1.png";
//         isBlack = true;
//         BackColor.forEach((div) => {
//             div.style.backgroundColor = "black";
//         });
//         TextColor.forEach((text) => {
//             text.style.color = "#ffffffba";
//         });
//         Images.forEach((img) => {
//             img.style.backgroundColor = "black";
//         });
//         HeadColor.style.background = "black";
//         HeadColor.style.color = "#ff4900db";
//     }
// }


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


