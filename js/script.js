$(document).ready(function () {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        }
    };

    $(".flip-container").height($(".front").outerHeight());
    $(".back").height($(".front").outerHeight());
    $(".flipper").height($(".front").outerHeight());

    var founderHeight = 315;
    $("#founders .back-content").each(function () {
        founderHeight =
            founderHeight > $(this).height() ? founderHeight : $(this).height();
    });


    if (isMobile.any()) {
        $(".flip-container").on("click", function (e) {
            $(".flip-container")
                .not($(this))
                .removeClass("hover");
            $(this).toggleClass("hover");
        });
    } 
    else {
        $(".flip-container").on("mouseenter", function (e) {
            $(this).addClass("hover");
        });

        $(".flip-container").on("mouseleave", function (e) {
            $(this).removeClass("hover");
        });
    }

})