$(function() {
    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });
    $(".home-panel").show();


    $('.btn-basic').click(function() {

        $('html, body .table-container').animate({
            scrollTop: $("#basics-section").offset().top
        }, 500);

    });

    $('.btn-frontend').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#basic-front").offset().top - 280
        }, 500);
        $('#basic-front').animateCss('tada');
    });
    $('.btn-js-fund').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#js_fund").offset().top - 240
        }, 500);
        $('#js_fund').animateCss('jello');
    });

    $('.btn-css-tools').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#css_tools").offset().top - 240
        }, 500);
         $('#css_tools').animateCss('bounce');
    });

    $('.btn-js-frameworks').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#js_frameworks").offset().top - 280
        }, 500);
             $('#css_tools').animateCss('slideInLeft');
    });



    $('.btn-scripting').click(function() {
        console.log($("#scripting_section").offset().top);
        $('html, body .table-container').animate({
            scrollTop: $("#scripting_section").offset().top - 150
        }, 500);
          $('#scripting_section').animateCss('bounce');
    });

    $('.btn-high-performance').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#high_performance_section").offset().top - 150
        }, 500);
           $('#high_performance_section').animateCss('tada');
    });

    $('.btn-database').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#database_section").offset().top - 200
        }, 500);
         $('#database_section').animateCss('tada');
    });

    $('.btn-others').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#others_section").offset().top - 150
        }, 500);
         $('#others_section').animateCss('rubberBand');
    });

    $('.btn-platforms').click(function() {
        $('html, body .table-container').animate({
            scrollTop: $("#platforms_section").offset().top - 150
        }, 500);
         $('#platforms_section').animateCss('zoomIn');
    });



    $('.nav-masthead').on('click', 'a', function() {
        $('.nav-masthead a.active').removeClass('active');
        $(this).addClass('active');

        switch (this.id) {
            case 'home':
                $('.panel').hide();
                $(".home-panel").show();
                break;
            case 'about':
                $('.panel').hide();
                $(".about-panel").show();
                $('.progress-bar').css('width', '0%');
                $(".progressbar-html").animate({
                    width: "97%"
                }, 2000);
                $(".progressbar-css").animate({
                    width: "89%"
                }, 2000);
                $(".progressbar-js").animate({
                    width: "90%"
                }, 2000);
                $(".progressbar-mod-js").animate({
                    width: "60%"
                }, 2000);
                $(".progressbar-jQuery").animate({
                    width: "88%"
                }, 2000);

                break;
            case 'educ':
                $('.panel').hide();
                $(".educ-panel").show();
                break;
            case 'contact':
                $('.panel').hide();
                $(".contact-panel").show();
                break;
        }
    });




});