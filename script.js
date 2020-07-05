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
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
document.addEventListener('DOMContentLoaded', function() {
    let modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('#overlay-modal'),
        closeButtons = document.querySelector('.js-modal-close');


    modalButtons.forEach(function(item){

        item.addEventListener('click', function(e) {

            e.preventDefault();
            let modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click
    }); // end foreach
}); // end ready
