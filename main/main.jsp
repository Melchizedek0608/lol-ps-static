<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
 	<meta charset="UTF-8">
 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인페이지</title>
    <link rel="stylesheet" href="../Css/all.css">
    <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
    <script src="../Js/jquery-3.6.0.min.js"></script>
</head>
<body class="main-body">
    <header class="header-mainnav">
        <div class="header-container">
            <a href="/">
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
    <main class="main-main">
        <div class="main-search">

            <form action="/champ/statistics" method="post" id="search_form" style="z-index:11; position : relative;">
                <div class="main-searchbar">
                    <div style="width: 560px;">
                        <input type="text" name="name" placeholder="챔피언 이름을 입력하세요">
                    </div>
                    <button type="submit">
                        <img src="../Images/icon_search.webp" style="width: 20px; height: 20px;">
                    </button>
                </div>

                <div class="main-realtime">
                    <span class="main-realspan">실시간 검색어</span>
                    <img src="../Images/icon_chevron-white.png" alt="img" style="float : right;">
                    <div class="main-word_wrapper main-overflow">
                        <ul class="main-ul" id="realtime_search">
                            <li>
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>1</span>탈리야
                            	</a>
                            </li>
                            <li>
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>2</span>샤코
                            	</a>
                            </li>
                            <li>
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>3</span>이즈리얼
                            	</a>
                            </li>
                            <li>
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>4</span>탐켄치
                            	</a>
                            </li>
                            <li>
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>5</span>일라오이
                            	</a>
                            </li>
                            <li>
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>6</span>쉬바나 
                            	</a>                    
                            </li>                       
                            <li>                        
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>7</span>트위치 
                            	</a>                    
                            </li>                       
                            <li>                        
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>8</span>신지드 
                            	</a>                    
                            </li>                       
                            <li>                        
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>9</span>오리 아나
                            	</a>                    
                            </li>                       
                            <li>                        
                            	<a class="main-realtime_word main-realtime-color-white" href="javascript:void(0);" onclick="callFunction();">
                                	<span>10</span>쉔
                            	</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>

        <h3  style="color: #fff;">주목해야 할 챔피언 (KR) <small style="color: darkgray;">05-24 10:46 기준</small></h3>
        <div class="swiper">
            <div class="main-mainslide_container swiper-wrapper" style="color: #fff; z-index: 1;">
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                    <div class="main-swiper-wrapper-small swiper-slide">
                        <div class="main-swiper-slide">
                            <div class="main-slide-image-small">
                                <img class="main-small-card-image" src="/Images/champion/full/jax.jpg">
                                <h3 class="main-champion-name">잭스<small>(탑)</small></h3>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </main>

    <div style="height: 300px;"></div>


    <div class="main-community-container">
        <div class="main-community">
            <h3 class="main-title">빌드 연구소</h3>
            <ul class="main-community-list-container">
                <li class="main-community-list" style="border-top: 1px solid #dbdde1;">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list" style="border-bottom: 1px solid #dbdde1;">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>


            </ul>
        </div>

        <div class="main-community">
            <h3 class="main-title">빌드 연구소</h3>
            <ul class="main-community-list-container">
                <li class="main-community-list" style="border-top: 1px solid #dbdde1;">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
                <li class="main-community-list" style="border-bottom: 1px solid #dbdde1;">
                    <span class="main-post-name">바루스</span>
                    <a class="main-post-link" href="#">
                        <span class="main-post-title">다이아1 승률 58%  AP 바루스</span>
                        <span class="main-post-comment">[3]</span>
                    </a>
                    <span class="main-post-like">4</span>
                </li>
            </ul>
        </div>
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
<script src="../Js/main.js"></script>
</body>
</html>