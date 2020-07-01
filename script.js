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
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    $("#intro").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

const sum = (a=1, b) => {
    return b= ++a -5
}
console.log(sum())
