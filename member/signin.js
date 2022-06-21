const signInForm = $('[name=signInForm]');
const submitBtn = $('#summit-button');

const emailInput = $('input[name=email]');
const passwordInput = $('input[name=password]');
const passwordConfirmInput = $('input[name=password-confirm]')

const emailPattern = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)

const emailPtag = $('#email-p');
const passwordPtag = $('#password-p');
const passwordConfirmPtag = $('#password-confirm-p');

function validationTest(pattern, input) {
    if(pattern.test(input.value)) {
        return true;
    }else {
        return false;
    }
}

emailInput.on('change', () => {
    if(validationTest(emailPattern, emailInput)) {
        emailPtag.html("");
    }else{
        emailPtag.html('올바른 이메일 형식을 입력하세요!!')
        emailInput.focus();
        return;
    }
})

passwordInput.on('change', () => {

    if(validationTest(passwordPattern, passwordInput)) {
        passwordPtag.html("");
    }else{
        passwordPtag.html('숫자, 알파벳, 특수문자를 포함하셔야 합니다!!');
        passwordInput.focus();
        return;
    }
})

passwordConfirmInput.on('change', () => {
    if(passwordInput.val() === passwordConfirmInput.val()) {
        passwordConfirmPtag.html("");
    }else {
        passwordConfirmPtag.html("비밀번호와 일치하지 않습니다!!");
    }
})

submitBtn.on('click', () => {
    if(validationTest(emailPattern, emailInput) && validationTest(passwordPattern, passwordInput)) {




    }else {
        console.log('적절한 이메일, 비밀번호가 아닙니다.')
    }
})