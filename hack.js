const theme = localStorage.getItem('theme');

// Check if the active theme is "Hack" before executing the code
if (theme === 'Hack') {
    const divid = document.getElementById('divid');

    function createRandomNumber() {
        const number = document.createElement('span');
        number.innerText = Math.floor(Math.random() * 2);
        number.style.position = 'absolute';
        number.style.color = '#00ff00';
        number.style.opacity = 0;
        number.style.left = `${Math.random() * 99}%`;
        number.style.top = `${Math.random() * 555}%`;
        divid.appendChild(number);

        const fadeIn = () => {
            number.style.transition = 'opacity 1s linear';
            number.style.opacity = 1;
            setTimeout(fadeOut, 1);
        };

        const fadeOut = () => {
            number.style.transition = 'opacity 1s linear';
            number.style.opacity = 1;
            setTimeout(() => {
                divid.removeChild(number);
                createRandomNumber();
            }, 200);
        };

        fadeIn();
    }

    for (let i = 1; i < 1000; i++) {
        createRandomNumber();
    }

    // Flipping random words --------------------------------
    const elements = document.querySelectorAll('p');

    function flipRandomWords(element) {
        const originalText = element.innerText;
        const words = originalText.split(' ');
        const numWordsToFlip = Math.floor(Math.random() * (words.length + 1));

        for (let i = 0; i < numWordsToFlip; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex];
            const flippedWord = randomWord.split('').reverse().join('');
            words[randomIndex] = flippedWord;
        }

        element.innerText = words.join(' ');

        setTimeout(() => {
            element.innerText = originalText;
            setTimeout(() => {
                flipRandomWords(element);
            }, Math.random() * 500);
        }, 500);
    }

    elements.forEach(element => {
        flipRandomWords(element);
    });


}
