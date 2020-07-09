
$(document).ready(function () {
    new WOW().init();
    $('.navbar .nav-link, #goBackBtn').click(function () {
        const target = $(this).attr('href');
        console.log(target);
        const position = $(target).offset().top;
        console.log(position);
        const navbarHeight = 56;
        $('html, body').stop().animate({
            scrollTop: position - navbarHeight
        }, 500);
    });
});