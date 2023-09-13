$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});


    
var typed2 = new Typed("#typing-2", {
    strings: [ "software engineering enthusiast" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
