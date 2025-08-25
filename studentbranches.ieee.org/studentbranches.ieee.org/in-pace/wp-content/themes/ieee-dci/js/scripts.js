/* 
Author: Steve Ambielli
Notes: Main scripts
*/

jQuery.noConflict();
(function($) {
    //open search
    $('header#header #search .row.search-block button#toggle-search').on('click touchend', function(e) {
        $('header#header form.search-form').fadeIn();
        $('header#header form.search-form input').focus();
        $(document).mouseup(function(e) {
            var container = $('header#header form.search-form');
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });
    });
    $('header#header #mobile-search button.toggle-search').on('click touchend', function(e) {
        e.preventDefault();
        $('header#header #search').attr('style', 'display: block !important');
        $('header#header form.search-form input').focus();
        $(document).mouseup(function(e) {
            var container = $('header#header #search');
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });
    });
    //open mobile menu
    $('#mobile-menu button').on('click touchend', function(e) {
        e.preventDefault();
        $('#main-nav').attr('style', 'display: block !important');
    });
    //close mobile menu
    $('#main-nav button.close-menu').on('click touchend', function(e) {
        e.preventDefault();
        $('#main-nav').hide();
    });
    //init slick slider
    if ($('.slideshow .slide').length > 1) {
        $('.slideshow-container .buttons').show();
        $('.slideshow').slick({
            prevArrow: '<i class="fa fa-chevron-left prev-slide" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-chevron-right next-slide" aria-hidden="true"></i>',
            dots: true,
        });
    }
    //play/pause slideshow
    $('.slideshow-container button.pause').on('click', function() {
        $('.slideshow')
            .slick('slickPause')
            .slick('slickSetOption', 'pauseOnDotsHover', false);
        $(this).removeClass('inactive').addClass('active');
        $('.slideshow-container button.play').removeClass('active').addClass('inactive');
    });
    $('.slideshow-container button.play').on('click', function() {
        $('.slideshow')
            .slick('slickPlay')
            .slick('slickSetOption', 'pauseOnDotsHover', true);
        $(this).removeClass('inactive').addClass('active');
        $('.slideshow-container button.pause').removeClass('active').addClass('inactive');
    });
    //only enable if the document has a long scroll bar
    //note the window height + offset
    if (($(window).height() + 100) < $(document).height()) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {
                top: 100
            }
        });
    }
})(jQuery);