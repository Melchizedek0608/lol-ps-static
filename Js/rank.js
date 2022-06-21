const position = document.querySelector('.rank-position');
const topBtn = document.querySelectorAll('.rank-position-button')[0];
const jungleBtn = document.querySelectorAll('.rank-position-button')[1];
const midBtn = document.querySelectorAll('.rank-position-button')[2];
const adBtn = document.querySelectorAll('.rank-position-button')[3];
const supBtn = document.querySelectorAll('.rank-position-button')[4];
const allBtn = document.querySelectorAll('.rank-position-button')[5];

position.addEventListener('click', (e) => {
    if(e.target === topBtn) {
        topBtn.classList.remove('rank-active');
        jungleBtn.classList.remove('rank-active');
        midBtn.classList.remove('rank-active');
        adBtn.classList.remove('rank-active');
        supBtn.classList.remove('rank-active');
        allBtn.classList.remove('rank-active')

        topBtn.classList.add('rank-active');
    } 

    if(e.target === jungleBtn) {
        topBtn.classList.remove('rank-active');
        jungleBtn.classList.remove('rank-active');
        midBtn.classList.remove('rank-active');
        adBtn.classList.remove('rank-active');
        supBtn.classList.remove('rank-active');
        allBtn.classList.remove('rank-active');

        jungleBtn.classList.add('rank-active');

    } 
    if(e.target === midBtn) {
        topBtn.classList.remove('rank-active');
        jungleBtn.classList.remove('rank-active');
        midBtn.classList.remove('rank-active');
        adBtn.classList.remove('rank-active');
        supBtn.classList.remove('rank-active');
        allBtn.classList.remove('rank-active');

        midBtn.classList.add('rank-active');
    }

    if(e.target === adBtn) {

        topBtn.classList.remove('rank-active');
        jungleBtn.classList.remove('rank-active');
        midBtn.classList.remove('rank-active');
        adBtn.classList.remove('rank-active');
        supBtn.classList.remove('rank-active');
        allBtn.classList.remove('rank-active');

        adBtn.classList.add('rank-active');
    } 

    if(e.target === supBtn) {
        topBtn.classList.remove('rank-active');
        jungleBtn.classList.remove('rank-active');
        midBtn.classList.remove('rank-active');
        adBtn.classList.remove('rank-active');
        supBtn.classList.remove('rank-active');
        allBtn.classList.remove('rank-active');

        supBtn.classList.add('rank-active');
    }

    if(e.target === allBtn) {
        topBtn.classList.remove('rank-active');
        jungleBtn.classList.remove('rank-active');
        midBtn.classList.remove('rank-active');
        adBtn.classList.remove('rank-active');
        supBtn.classList.remove('rank-active');
        allBtn.classList.remove('rank-active');

        allBtn.classList.add('rank-active');

    }
})
