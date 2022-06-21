const position = document.querySelector('.rank-position');
const topBtn = document.querySelectorAll('.rank-position-button')[0];
const jungleBtn = document.querySelectorAll('.rank-position-button')[1];
const midBtn = document.querySelectorAll('.rank-position-button')[2];
const adBtn = document.querySelectorAll('.rank-position-button')[3];
const supBtn = document.querySelectorAll('.rank-position-button')[4];
const allBtn = document.querySelectorAll('.rank-position-button')[5];



position.addEventListener('click', (e) => {
    if(e.target === topBtn) {
        topBtn.classList.remove('active');
        jungleBtn.classList.remove('active');
        midBtn.classList.remove('active');
        adBtn.classList.remove('active');
        supBtn.classList.remove('active');
        allBtn.classList.remove('active')

        topBtn.classList.add('active');

    } 

    if(e.target === jungleBtn) {
        topBtn.classList.remove('active');
        jungleBtn.classList.remove('active');
        midBtn.classList.remove('active');
        adBtn.classList.remove('active');
        supBtn.classList.remove('active');
        allBtn.classList.remove('active');

        jungleBtn.classList.add('active');

    } 
    if(e.target === midBtn) {
        topBtn.classList.remove('active');
        jungleBtn.classList.remove('active');
        midBtn.classList.remove('active');
        adBtn.classList.remove('active');
        supBtn.classList.remove('active');
        allBtn.classList.remove('active');

        midBtn.classList.add('active');
    }

    if(e.target === adBtn) {

        topBtn.classList.remove('active');
        jungleBtn.classList.remove('active');
        midBtn.classList.remove('active');
        adBtn.classList.remove('active');
        supBtn.classList.remove('active');
        allBtn.classList.remove('active');

        adBtn.classList.add('active');
    } 

    if(e.target === supBtn) {
        topBtn.classList.remove('active');
        jungleBtn.classList.remove('active');
        midBtn.classList.remove('active');
        adBtn.classList.remove('active');
        supBtn.classList.remove('active');
        allBtn.classList.remove('active');

        supBtn.classList.add('active');
    }

    if(e.target === allBtn) {
        topBtn.classList.remove('active');
        jungleBtn.classList.remove('active');
        midBtn.classList.remove('active');
        adBtn.classList.remove('active');
        supBtn.classList.remove('active');
        allBtn.classList.remove('active');

        allBtn.classList.add('active');

    }
})
