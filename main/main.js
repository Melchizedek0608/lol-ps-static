const realtime = document.getElementById('realtime_search');

let count = 1;

const slideRealtime = setInterval(() => {
    realtime.style.transform = `translate(0%, ${count * -29}px)`;
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
	slideRealtime = setInterval(() => {
	    realtime.style.transform = 'none';
	});
};





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