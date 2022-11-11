/* jQuery
  =========================================== */
$(document).ready(function(){

    /* ナビゲーション */
    $('#page-link a[href*="#"]').click(function () {
        const elmHash = $(this).attr('href');
        let pos;
        if (elmHash === '#column') { // columnsセクションではpaddingを指定しているのでそのまま
            pos = $(elmHash).offset().top; 
        } else { // それ以外のセクションでは 100px 上に遷移する 
            pos = $(elmHash).offset().top - 100; 
        }
        $('html, body').animate({scrollTop: pos}, 500);
        /* navを閉じる */
        $('.hamburger').toggleClass('active');
        $('.globalMenuSp, .logo, .form').removeClass('active');
        $('html, body').css('overflow', 'visible');
    });

    /* ハンバーガーメニュー */
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp, .logo, .form').addClass('active');
            $('html, body').css('overflow', 'hidden');
        } else {
            $('.globalMenuSp, .logo, .form').removeClass('active');
            $('html, body').css('overflow', 'visible');
        }
    });

    /* Topスライド(bxSlider) */
    $('.top').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 1000,
        pager: false,
        controls: false
    });

    /* Galleryスライド(slick) */
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 4.5,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3.5
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1.3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    /* fadeIn アニメーション */
    $(window).fadeThis({"reverse": false});
    
});

/* Javascript
  =========================================== */

/* 配列をシャッフル */
const shuffle = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

/* 画像をふわふわさせるアニメーション */
const elements = document.getElementsByClassName('square');
const elementsList = Array.from(elements);
elementsList.forEach(element => {
    element.animate(
        {
            borderRadius: shuffle([
                "60% 50% 50% 70% / 50% 50% 70% 60%",
                "80% 30% 50% 50% / 50%",
                "50% 50% 50% 40% / 30% 50% 40% 80%",
                "70% 40% 80% 40% / 80% 40% 80% 50% "
            ])
        },
        {
            iterations: Infinity,
            direction: "alternate",
            duration: 9000
        }
)});