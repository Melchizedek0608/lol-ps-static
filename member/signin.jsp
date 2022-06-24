<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "project_java.Y_DBmanager"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../Css/all.css">
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
<script src="../Js/jquery-3.6.0.min.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body class="member-body" style="height:1200px;">
<%
	Y_DBmanager y_dbmanager = new Y_DBmanager();
	y_dbmanager.getConnection();
%>
    <!-- 위에 navbar 부분입니다 -->
    <header class="header-mainnav">
        <div class="header-container">
            <a href="../main/main.html">
                <img src="../Images/header-logo.webp" alt="LOL.PS">
            </a>
            <div class = "nav-item-container">
            	<a class="nav-items" href="../notice/notice.html">공지사항</a>
                <a class="nav-items" href="../rank/rank.html">챔피언 랭킹</a>
                <a class="nav-items" href="../community/build.html">빌드게시판</a>
                <a class="nav-items" href="../community/free.html">자유게시판</a>
            </div>
            <div class="sign-login">
                <a class="signin" href="../member/signin.html">회원가입</a>
                <a class="login" href="../member/login.html">로그인</a>
            </div>
        </div>
    </header>
	
	<div class="all-main">
	    <main class="member-main">
	        <div class = "member-side-left" style="height: 754px;">
	            <section class = "member-ad"></section>
	        </div>
	        <div class = "member-contents">
	            <div class="member-row-sign">
	                <div class = "member-col-12">
	                    <h2 class="member-page-title">회원가입</h2>
	                </div>
	                <div class = "member-row">
	                    <div class = "member-email_login_box"> 
	                        <h3 class="member-h3">이메일 회원 가입</h3>
	                        <form class="member-form" name="signInForm" onsubmit="return;">
	                            <div class = "member-form-group">
	                                <label class="member-laber">이메일 주소</label>
	                                <input type="email" name="email" class="member-form-control" placeholder="gamer@lol.ps">
	                                <p id="email-p"></p>
	                            </div>
	                            <div class = "member-form-group">
	                                <label class="member-laber">비밀번호</label>
	                                <input type="password" name="password" class="member-form-control" placeholder="비밀번호">
	                                <p id="password-p"></p>
	                            </div>
	                            <div class = "member-form-group">
	                                <label class="member-laber">비밀번호 확인</label>
	                                <input type="password" name="password-confirm" class="member-form-control" placeholder="비밀번호 확인">
	                                <p id="password-confirm-p"></p>
	                            </div>
	                            <div class = "member-form-group">
	                                <label class="member-laber">닉네임</label>
	                                <input type="text" name="nickname" class="member-form-control" id="nickname-input" placeholder="닉네임">
	                            </div>
	                            <button class="member-btn-theme member-btn-big" id="summit-button">이메일 주소로 가입</button>
	                        </form>
	                    </div>
	
	                    <div class="member-sign-sns signin">
	                        <h3 class="member-h3">소셜계정으로 가입</h3>
	                        <ul class="member-ul">
	                            <li class="member-li">
	                                <a href="#" class="member-fbook member-a">
	                                    <img class = "member-img_log" src="https://s3.lol.ps/file/lol-ps/static/img/icon_sns_fbook.png" alt="페이스북 로그인" >
	                                </a>
	                            </li>
	                            <li class="member-li">
	                                <a href="#" class="google member-a">
	                                    <img class = "member-img_log" src="https://s3.lol.ps/file/lol-ps/static/img/icon_sns_google.png" alt="구글 로그인"  >
	                                </a>
	                            </li>
	                            <li class="member-li"><a href="#" class="apple member-a">
	                                <img class = "member-img_log" src="https://s3.lol.ps/file/lol-ps/static/img/icon_sns_apple.png" alt="애플 로그인" >
	                            </a></li>
	
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	            </div>
		</main>
	</div>
<footer class="footer">

    <div class="footer-left">
        <span class="footer-left-item">공지사항</span>
        <span class="footer-left-item">버그리포팅</span>
        <span class="footer-left-item">파트너 신청</span></br>
        <div style="margin-bottom: 10px;"></div>
        <span class="footer-left-item">이용약관</span>
        <span class="footer-left-item">개인정보처리방침</span>
    </div>

    <div class="footer-right">
        <h5>PS Analytics, Inc. © 2020</h5>
        <p>
            lol.ps is hosted by PS Analytics, Inc. lol.ps isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in 
            producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. 
            League of Legends © Riot Games, Inc.
        </p>
    </div>

</footer>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script src="../Js/all.js"></script>
</body>
</html>