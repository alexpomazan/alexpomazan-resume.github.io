$(document).ready(function () {
    const navOffset = $('#nav').offset().top;
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();

            if (scrolled > navOffset) {
                $('#wrapper').addClass('nav-fixed');

            } else if (scrolled < navOffset) {
                $('#wrapper').removeClass('nav-fixed');
            }
    });
});