function toggleNavbar(selector) {
    document.querySelector(selector).classList.toggle('active');
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,  
        merge: true,
        responsiveClass: true,
        video: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items:1,
                nav: false
            },
            1000:{
                items:2,
                nav: true,
                loop: true
            }
        }
    });
});
  