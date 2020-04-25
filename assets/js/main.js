(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".product-list") .masonry()

        $(".homepage-slides").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            autoplay:true,
        });

        $(".product-promotions").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
            autoplay:false,
        });


        $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu, .canvas-overlay").addClass("active");

            return false;
        });

        $(".canvas-close, .canvas-overlay").on("click", function(){
            $(".off-canvas-menu, .canvas-overlay").removeClass("active");
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	