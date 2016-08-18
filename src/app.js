require("./css/layout/material-layout.scss");
require("./css/styles");

require("swiper");
require("swiper/dist/css/swiper.min.css");
//require("./icons/sw-icon")

console.log('1');

window.onload = function () {

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
}
