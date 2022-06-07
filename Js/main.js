const navbar = document.querySelector('.header-mainnav');
const realtime = document.getElementById('realtime_search');
const realWrapper = document.querySelector('.word_wrapper');

let count = 1;

const slideRealtime = setInterval(() => {
    realtime.style.transform = `translate(0%, ${count * -29}px)`;
    count++;

    if(count == 11) {
        realtime.style.transform = 'translate(0%, 0%)';
        count = 1;
    }
    
}, 4000);

realtime.addEventListener('click', () => {
    realWrapper.style.overflow = 'visible';
    clearInterval(slideRealtime);
})

document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        navbar.style.background = '#172b65';
    }else if(window.scrollY < 100) {
        navbar.style.background = 'none';
    }
})


