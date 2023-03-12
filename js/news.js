// $(document).ready(function(){
//         $('.newsSlider').slick({
//         slidesToShow: 3,
//         dots:false,
//         arrows: true,
//         centerMode: true,
//         });
//       });
      
      // Slick version 1.5.8

//       $(document).ready(function () {
// 	$(".newsSlider").slick({
// 		slidesToShow: 7,
// 		slidesToScroll: 1,
// 		arrows: true,
// 		infinite:false,
// 		autoplay: false
// 	});
// 	$(".prev-btn").click(function () {
// 		$(".newsSlider").slick("slickPrev");
// 	});

// 	$(".next-btn").click(function () {
// 		$(".newsSlider").slick("slickNext");
// 	});
// 	$(".prev-btn").addClass("slick-disabled");
// 	$(".newsSlider").on("afterChange", function () {
// 		if ($(".slick-prev").hasClass("slick-disabled")) {
// 			$(".prev-btn").addClass("slick-disabled");
// 		} else {
// 			$(".prev-btn").removeClass("slick-disabled");
// 		}
// 		if ($(".slick-next").hasClass("slick-disabled")) {
// 			$(".next-btn").addClass("slick-disabled");
// 		} else {
// 			$(".next-btn").removeClass("slick-disabled");
// 		}
// 	});
// });
$(document).ready(function() {
        $("#news-slider").owlCarousel({
            items : 5,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[980,2],
            itemsMobile : [600,2],
            navigation:true,
            navigationText:["",""],
            pagination:true,
            autoPlay:true
        });
    });