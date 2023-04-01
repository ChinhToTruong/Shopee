const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toTop.classList.remove('hidden');
    } else {
        toTop.classList.add('hidden');
    }
})

function upTop () {
    window.scrollTo(0,0)

}

const chatBox = document.querySelector('#chat-box');

const closeButton = document.querySelector('.close-btn');

const chatIcon = document.querySelector('.chat-icon');

chatIcon.addEventListener('click', () => {
    chatBox.classList.remove('hidden')
})

closeButton.addEventListener('click', () => {
    chatBox.classList.add('hidden')
})