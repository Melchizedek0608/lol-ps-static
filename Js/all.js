/*const navbar = document.querySelector('.header-mainnav');*/
const navbar = $('.header-mainnav');

/*document.addEventListener('scroll', () => {
    if(window.scrollY > 160) {					// scrollY : 현재 위치 Y값
        navbar.style.background = '#172b65';
    }else if(window.scrollY < 160) {
        navbar.style.background = 'none';
    }
})*/
$(document).scroll(function () {
	if(window.scrollY > 160) {
		navbar.css({background:'#172b65'});
	}else if(window.scrollY < 160) {
		navbar.css({background:'none'});
	}
});

/*const goTop = document.querySelector('.top-button');*/
const goTop = $('.top-button');

/*if(goTop!==null) {
	goTop.addEventListener('click', () => {
	    window.scrollTo({ top:0, behavior: 'smooth' })		// scrollTo( '여기로 스크롤해라' )
	})
}*/
if(goTop!==null) {
	goTop.click(function() {
		window.scrollTo({top:0, behavior:'smooth'});
	});
}

/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/
/*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*//*statistics*/

/*
const summaryBtn1 = document.querySelectorAll('.statistics-summary-button')[0];		// statistics-summary-button의 첫번쨰
const summaryBtn2 = document.querySelectorAll('.statistics-summary-button')[1];		// statistics-summary-button의 두번쨰
*/
const summaryBtn1 = $('.statistics-summary-button').eq(0);
const summaryBtn2 = $('.statistics-summary-button').eq(1);
/*
if(summaryBtn1!==undefined) {
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
}
*/
if(summaryBtn1!==undefined) {
	summaryBtn1.click(function() {
		summaryBtn1.removeClass('statistics-summary-button-active');
		summaryBtn2.removeClass('statistics-summary-button-active');
		//summaryBtn들의 클래스 ...active를 삭제 후
		summaryBtn1.addClass('statistics-summary-button-active');
		//summaryBtn1에 ...active클래스 추가
	});
	summaryBtn2.click(function() {
		summaryBtn1.removeClass('statistics-summary-button-active');
		summaryBtn2.removeClass('statistics-summary-button-active');
		//summaryBtn들의 클래스 ...active를 삭제 후
		summaryBtn2.addClass('statistics-summary-button-active');
		//summaryBtn2에 ...active클래스 추가
	});
	
	const whatLv0 = $('.statistics-what-level').eq(0);
	const whatLv1 = $('.statistics-what-level').eq(1);
	const whatLv2 = $('.statistics-what-level').eq(2);
	
	const skill_seq3 = $('#skill-seq3');
	const skill_seq6 = $('#skill-seq6');
	const skill_seq11 = $('#skill-seq11');
	//3레벨 클릭
	whatLv0.click(function() {
		whatLv0.removeClass('statistics-what-level-active');
		whatLv1.removeClass('statistics-what-level-active');
		whatLv2.removeClass('statistics-what-level-active');
		whatLv0.addClass('statistics-what-level-active');
		//클릭한 레벨이 표시 (3레벨)
		skill_seq3.removeClass('statistics-display-block');
		skill_seq6.removeClass('statistics-display-block');
		skill_seq11.removeClass('statistics-display-block');
		skill_seq3.addClass('statistics-display-block');
		//클릭한 레벨들의 찍은 스킬 표시(3레벨이니깐 3개표시)
	});
	//6레벨 클릭
	whatLv1.click(function() {
		whatLv0.removeClass('statistics-what-level-active');
		whatLv1.removeClass('statistics-what-level-active');
		whatLv2.removeClass('statistics-what-level-active');
		whatLv1.addClass('statistics-what-level-active');
		//클릭한 레벨이 표시 (6레벨)
		skill_seq3.removeClass('statistics-display-block');
		skill_seq6.removeClass('statistics-display-block');
		skill_seq11.removeClass('statistics-display-block');
		skill_seq6.addClass('statistics-display-block');
		//클릭한 레벨들의 찍은 스킬 표시(6레벨이니깐 6개표시)
	});
	//11레벨 클릭
	whatLv2.click(function() {
		whatLv0.removeClass('statistics-what-level-active');
		whatLv1.removeClass('statistics-what-level-active');
		whatLv2.removeClass('statistics-what-level-active');
		whatLv2.addClass('statistics-what-level-active');
		//클릭한 레벨이 표시 (11레벨)
		skill_seq3.removeClass('statistics-display-block');
		skill_seq6.removeClass('statistics-display-block');
		skill_seq11.removeClass('statistics-display-block');
		skill_seq11.addClass('statistics-display-block');
		//클릭한 레벨들의 찍은 스킬 표시(11레벨이니깐 11개표시)
	});
}

/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/
/*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*//*sign*/

const signInForm = $('[name=signInForm]');
const submitBtn = $('#summit-button');

if(signInForm!==null) {
	const emailInput = $('input[name=email]');
	const passwordInput = $('input[name=password]');
	const passwordConfirmInput = $('input[name=password-confirm]')

	const emailPattern = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
	const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)

	const emailPtag = $('#email-p');
	const passwordPtag = $('#password-p');
	const passwordConfirmPtag = $('#password-confirm-p');
	
	function validationTest(pattern, input) {	// pattern : RegExp(객체)의 파라미터, input : eamilInput, passwordInput, passwodrdConfirmInput
	    if(pattern.test(input.value)) {		// test : RegExp가 제공하는 메소드
	        return true;
	    }else {
	        return false;
	    }
	}

	emailInput.change(function() {
	    if(validationTest(emailPattern, emailInput)) {
	        emailPtag.html("");
	    }else{
	        emailPtag.html('올바른 이메일 형식을 입력하세요!!')
	        emailInput.focus();
	        return;
	    }
	});

	passwordInput.change(function() {
	    if(validationTest(passwordPattern, passwordInput)) {
	        passwordPtag.html("");
	    }else{
	        passwordPtag.html('숫자, 알파벳, 특수문자를 포함하셔야 합니다!!');
	        passwordInput.focus();
	        return;
	    }
	});

	passwordConfirmInput.change(function() {
	    if(passwordInput.val() === passwordConfirmInput.val()) {
	        passwordConfirmPtag.html("");
	    }else {
	        passwordConfirmPtag.html("비밀번호와 일치하지 않습니다!!");
	    }
	});

	submitBtn.click(function() {
	    if(validationTest(emailPattern, emailInput) && validationTest(passwordPattern, passwordInput)) {
	    	/*
	    	  패턴 넘기면 서버에 데이터 넘기기.
	    	  ★★★★★★★★★★★★★★★★★★★★★★★★★★★폼태그로 넘길것인지, 스크립트로 넘길것인지 생각★★★★★★★★★★★★★★★★★★★★★★★★★★★
	    	*/
	    }else {
	        console.log('적절한 이메일, 비밀번호가 아닙니다.')
	    }
	});
}

/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/
/*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*//*rank*/

const position = document.querySelector('.rank-position');
const topBtn = document.querySelectorAll('.rank-position-button')[0];
const jungleBtn = document.querySelectorAll('.rank-position-button')[1];
const midBtn = document.querySelectorAll('.rank-position-button')[2];
const adBtn = document.querySelectorAll('.rank-position-button')[3];
const supBtn = document.querySelectorAll('.rank-position-button')[4];
const allBtn = document.querySelectorAll('.rank-position-button')[5];

if(position!==null) {
	position.addEventListener('click', function(e){
	    if(e.target === topBtn) {						//내가 클릭한 것이 topBtn이면 실행
	        topBtn.classList.remove('rank-active');
	        jungleBtn.classList.remove('rank-active');
	        midBtn.classList.remove('rank-active');
	        adBtn.classList.remove('rank-active');
	        supBtn.classList.remove('rank-active');
	        allBtn.classList.remove('rank-active');
	
	        topBtn.classList.add('rank-active');
	    } 
	    if(e.target === jungleBtn) {					//내가 클릭한 것이 jungleBtn이면 실행
	        topBtn.classList.remove('rank-active');
	        jungleBtn.classList.remove('rank-active');
	        midBtn.classList.remove('rank-active');
	        adBtn.classList.remove('rank-active');
	        supBtn.classList.remove('rank-active');
	        allBtn.classList.remove('rank-active');
	
	        jungleBtn.classList.add('rank-active');
	    } 
	    if(e.target === midBtn) {						//내가 클릭한 것이 midBtn이면 실행
	        topBtn.classList.remove('rank-active');
	        jungleBtn.classList.remove('rank-active');
	        midBtn.classList.remove('rank-active');
	        adBtn.classList.remove('rank-active');
	        supBtn.classList.remove('rank-active');
	        allBtn.classList.remove('rank-active');
	
	        midBtn.classList.add('rank-active');
	    }
	    if(e.target === adBtn) {						//내가 클릭한 것이 adBtn이면 실행
	        topBtn.classList.remove('rank-active');
	        jungleBtn.classList.remove('rank-active');
	        midBtn.classList.remove('rank-active');
	        adBtn.classList.remove('rank-active');
	        supBtn.classList.remove('rank-active');
	        allBtn.classList.remove('rank-active');
	
	        adBtn.classList.add('rank-active');
	    } 
	    if(e.target === supBtn) {						//내가 클릭한 것이 supBtn이면 실행
	        topBtn.classList.remove('rank-active');
	        jungleBtn.classList.remove('rank-active');
	        midBtn.classList.remove('rank-active');
	        adBtn.classList.remove('rank-active');
	        supBtn.classList.remove('rank-active');
	        allBtn.classList.remove('rank-active');
	
	        supBtn.classList.add('rank-active');
	    }
	    if(e.target === allBtn) {						//내가 클릭한 것이 allBtn이면 실행
	        topBtn.classList.remove('rank-active');
	        jungleBtn.classList.remove('rank-active');
	        midBtn.classList.remove('rank-active');
	        adBtn.classList.remove('rank-active');
	        supBtn.classList.remove('rank-active');
	        allBtn.classList.remove('rank-active');
	
	        allBtn.classList.add('rank-active');
	    }
	})
}

/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/
/*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*//*main*/

const realtime = $('#realtime_search');

if(realtime!==null) {
	let count = 1;
	const slideRealtime = setInterval(() => {
	    realtime.css({transform : `translate(0%, ${count * -29}px)`});
	    count++;
	
	    if(count == 11) {
	        realtime.style.transform = 'translate(0%, 0%)';
	        count = 1;
	    }
	
	}, 3000);
	
	function callFunction(obj) {
		$('#realtime_search').addClass('main-background-white');
		$('.main-realtime a').removeClass('main-realtime-color-black');
		$('.main-realtime a').addClass('main-realtime-color-black');
		$('.main-word_wrapper').removeClass('main-overflow');
		$('.main-searchbar').addClass('main-searchbar-padding-bottom');
		clearInterval(slideRealtime); 
	};
}




let card = `
        <div class="main-swiper-wrapper swiper-slide">
            <div class="main-swiper-slide">
                <div class="slide-image">
                    <h3 class="champion-name none">아트록스<small>(탑)</small></h3>
                </div>

                <div class="champslide-infobox">
                    <div class="champ-status">
                        <h2>아트록스(탑)</h2>

                        <li class="champ-status-header">
                            <span></span>
                            <span class="before">이전패치</span>
                            <span>현재패치</span>
                        </li>
                        <li class="champ-status-item">
                            <h4>승률</h4>
                            <span class="before">50.38%</span>
                            <span>49.38%</span>
                        </li>
                        <li class="champ-status-item">
                            <h4>픽률</h4>
                            <span class="before">11.23%</span>
                            <span>10.23%</span>
                        </li>
                        <li class="champ-status-item">
                            <h4>벤율</h4>
                            <span class="before">6.5%</span>
                            <span>4.2%</span>
                        </li>
                    </div>

                    <div class="champ-point">
                        <h4>주목해야 할 포인트</h4>
                        <p style="font-size: 12px;">최근 패치에서 아트록스의 승률이 -1% 하락하였습니다. 곧 구체적인 원인을 분석하여 업데이트 될 예정입니다.</p>
                    </div>

                    <div style="width:135px; padding: 10px 0px 0px 170px;">
                        <a class="champ-link" href="../statistics/statistics.html">챔피언 상세정보 →</a>
                    </div>
                </div>
            </div>
        </div>`;

$('.main-swiper-wrapper-small').eq(4).click(() => {
    $('.main-swiper-wrapper-small').eq(4).css({display : 'none'});
    $('.main-swiper-wrapper').remove();

    $('.main-swiper-wrapper-small').eq(5).css({display : 'block'});
    $('.main-swiper-wrapper-small').eq(3).after(card);
})

$('.main-swiper-wrapper-small').eq(5).click(() => {
    $('.main-swiper-wrapper-small').eq(4).css({display : 'block'});
    $('.main-swiper-wrapper').remove();

    $('.main-swiper-wrapper-small').eq(5).css({display: 'none'});
    $('.main-swiper-wrapper-small').eq(4).after(card);
})

const mainSwiper = $('.swiper');

if(mainSwiper!==null) {
	const swiper = new Swiper('.swiper', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
	    centeredSlides: true,
	    autoplay:true,
	    autoplay: { 
	        delay: 2500,
	    },
	  });
}
