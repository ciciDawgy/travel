const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const wrappers = document.querySelectorAll('.wrapper');


window.addEventListener('scroll', checkWrappers)

checkWrappers()

function checkWrappers() {
    const triggerBottom = window.innerHeight / 5 * 1.5;

    wrappers.forEach(wrapper => {
        const wrapperTop = wrapper.getBoundingClientRect().top;
       
        if(wrapperTop < triggerBottom) {
            wrapper.classList.add('show')
        } else {
            wrapper.classList.remove('show')
        }
    })
}
