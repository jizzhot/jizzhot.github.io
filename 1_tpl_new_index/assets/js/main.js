$(document).ready(function () {
    /* fullpage js */
    $('#fullpage').fullpage({
        anchors: ['1', '2', '3'],
    });
    $(window).resize(function () {
        let winWidth = $(window).width();
        if (winWidth < 769) {
            $.fn.fullpage.setAllowScrolling(false);
        } else {
            $.fn.fullpage.setAllowScrolling(true);
        }
    });
    let winWidth = $(window).width();
    if (winWidth < 769) {
        $.fn.fullpage.setAllowScrolling();
    }
    $('.mobile-up').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
    $('.mobile-down').click(function () {
        $.fn.fullpage.moveSectionUp();
    });

   /* slick js */
    $("#hot-tab").click(function () {
        $('.js-slick-hot').slick('refresh');
    });
    $('.js-slick-hot').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            }
        ]
    });

    $('.pixnet-pic').hover(function () {
        $(this).attr('src','assets/images/pixnet2.png');
    }, function () {
        $(this).attr('src','assets/images/pixnet1.png');
    });
});