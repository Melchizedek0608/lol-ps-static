const navbar = document.querySelector('.header-mainnav');

document.addEventListener('scroll', () => {
    if(window.scrollY > 160) {
        navbar.style.background = '#172b65';
    }else if(window.scrollY < 160) {
        navbar.style.background = 'none';
    }
})

const goTop = document.querySelector('.top-button');

goTop.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior: 'smooth' })
})

/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/

const summaryBtn1 = document.querySelectorAll('.statistics-summary-button')[0];
const summaryBtn2 = document.querySelectorAll('.statistics-summary-button')[1];

summaryBtn1.addEventListener('click', () => {
    summaryBtn1.classList.remove('statistics-summary-button-active');
    summaryBtn2.classList.remove('statistics-summary-button-active');
    
    summaryBtn1.classList.add('statistics-summary-button-active');
})

summaryBtn2.addEventListener('click', () => {
    summaryBtn1.classList.remove('statistics-summary-button-active');
    summaryBtn2.classList.remove('statistics-summary-button-active');

    summaryBtn2.classList.add('statistics-summary-button-active');
})



const whatLv0 = document.querySelectorAll('.statistics-what-level')[0];
const whatLv1 = document.querySelectorAll('.statistics-what-level')[1];
const whatLv2 = document.querySelectorAll('.statistics-what-level')[2];

const skill_seq3 = document.querySelector('#skill-seq3');
const skill_seq6 = document.querySelector('#skill-seq6');
const skill_seq11 = document.querySelector('#skill-seq11');

whatLv0.addEventListener('click', () => {
    whatLv0.classList.remove('statistics-what-level-active');
    whatLv1.classList.remove('statistics-what-level-active');
    whatLv2.classList.remove('statistics-what-level-active');
    whatLv0.classList.add('statistics-what-level-active');
    
    skill_seq3.classList.remove('statistics-display-block');
    skill_seq6.classList.remove('statistics-display-block');
    skill_seq11.classList.remove('statistics-display-block');
    skill_seq3.classList.add('statistics-display-block');
})

whatLv1.addEventListener('click', () => {
    whatLv0.classList.remove('statistics-what-level-active');
    whatLv1.classList.remove('statistics-what-level-active');
    whatLv2.classList.remove('statistics-what-level-active');
    whatLv1.classList.add('statistics-what-level-active');
    
    skill_seq3.classList.remove('statistics-display-block');
    skill_seq6.classList.remove('statistics-display-block');
    skill_seq11.classList.remove('statistics-display-block');
    skill_seq6.classList.add('statistics-display-block');
})

whatLv2.addEventListener('click', () => {
    whatLv0.classList.remove('statistics-what-level-active');
    whatLv1.classList.remove('statistics-what-level-active');
    whatLv2.classList.remove('statistics-what-level-active');
    whatLv2.classList.add('statistics-what-level-active');
    
    skill_seq3.classList.remove('statistics-display-block');
    skill_seq6.classList.remove('statistics-display-block');
    skill_seq11.classList.remove('statistics-display-block');
    skill_seq11.classList.add('statistics-display-block');
})

/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/

const signInForm = document.querySelector('[name=signInForm]');
const submitBtn = document.querySelector('#summit-button');

const emailInput = signInForm.querySelector('input[name=email]');
const passwordInput = signInForm.querySelector('input[name=password]');
const passwordConfirmInput = signInForm.querySelector('input[name=password-confirm]')

const emailPattern = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)

const emailPtag = document.querySelector('#email-p');
const passwordPtag = document.querySelector('#password-p');
const passwordConfirmPtag = document.querySelector('#password-confirm-p');

function validationTest(pattern, input) {
    if(pattern.test(input.value)) {
        return true;
    }else {
        return false;
    }
}

emailInput.addEventListener('change', (e) => {
    if(validationTest(emailPattern, emailInput)) {
        emailPtag.innerHTML = "";
    }else{
        emailPtag.innerHTML = '올바른 이메일 형식을 입력하세요!!';
        emailInput.focus();
        return;
    }
})

passwordInput.addEventListener('change', (e) => {
    if(validationTest(passwordPattern, passwordInput)) {
        passwordPtag.innerHTML = "";
    }else{
        passwordPtag.innerHTML = '숫자, 알파벳, 특수문자를 포함하셔야 합니다!!';
        passwordInput.focus();
        return;
    }
})

passwordConfirmInput.addEventListener('change', () => {
    if(passwordInput.value === passwordConfirmInput.value) {
        passwordConfirmPtag.innerHTML = "";
    }else {
        passwordConfirmPtag.innerHTML = "비밀번호와 일치하지 않습니다!!";
    }
})



