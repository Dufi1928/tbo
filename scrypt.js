//Caroussel
function getSlidesPerView() {

    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) {
        return 2;
    }else if (screenWidth <= 768) {
        return 2;
    } else if (screenWidth <= 1024) {
        return 5;}
    else if (screenWidth <= 1800) {
        return 5;
    } else {
        return 5;
    }
}
x = getSlidesPerView()

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: x,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    window.addEventListener('resize', function() {
        swiper.params.slidesPerView = getSlidesPerView();
        swiper.update();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector('.burger');
    var mobileMenu = document.getElementById('mobile-menu');
    var closeButton = document.querySelector('.close-menu');

    burger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    closeButton.addEventListener('click', function() {
        mobileMenu.classList.add('closing'); // Ajoute la classe pour l'animation de fermeture

        // Attendre que l'animation se termine avant de retirer les classes 'active' et 'closing'
        mobileMenu.addEventListener('animationend', function() {
            mobileMenu.classList.remove('active', 'closing');
            document.body.classList.remove('no-scroll');
        }, { once: true });
    });
});
