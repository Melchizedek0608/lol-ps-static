
$('.main-small-card-image').click((e)=> {
    console.log(e.target)
    $('.main-slide-image-small').parent().parent().css({display: 'block'})
    $('.main-swiper-wrapper').remove();
    
    let card = `<div class="main-swiper-wrapper swiper-slide">
                    <div class="main-swiper-slide">
                        <div class="main-slide-image">
                            <img class="main-small-card-image" style="border-radius: 8px 0px 0px 8px" src="/Images/champion/full/jax.jpg">
                        </div>
                            
                        <div class="main-champslide-infobox">
                            <div class="main-champ-status">
                                <h2 style="margin:0;">잭스(탑)</h2>
                            
                                <li class="main-champ-status-header">
                                    <span></span>
                                    <span class="main-before">이전패치</span>
                                    <span>현재패치</span>
                                </li>
                                <li class="main-champ-status-item">
                                    <h4>승률</h4>
                                    <span class="main-before">%</span>
                                    <span>%</span>
                                </li>
                                <li class="main-champ-status-item">
                                    <h4>픽률</h4>
                                    <span class="main-before">%</span>
                                    <span>%</span>
                                </li>
                                <li class="main-champ-status-item">
                                    <h4>벤율</h4>
                                    <span class="main-before">%</span>
                                    <span>%</span>
                                </li>
                            </div>
                            
                            <div class="main-champ-point">
                                <h4>주목해야 할 포인트</h4>
                                <p style="font-size: 12px;">최근 패치에서 의 승률이 % 변동 되었습니다. 곧 구체적인 원인을 분석하여 업데이트 될 예정입니다.</p>
                            </div>
                            
                            <div style="width:135px; padding: 10px 0px 0px 170px;">
                                <a class="main-champ-link" href="/champ/statistics?name=">챔피언 상세정보 →</a>
                            </div>
                        </div>
                    </div>
            </div>`;
            $(e.target).parent().parent().parent().before(card);
            $(e.target).parent().parent().parent().css({display: 'none'});
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    centeredSlides: true,
    autoplay:true,
    autoplay: {
        delay: 1000,
    },
});