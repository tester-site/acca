var Common = {
	init: function() {
        Common.menu();
        Common.main();
	},
    menu: function() {
        $('.header_top .mob_btn').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            $('.header_top_nav').toggleClass('open')
		});
		
		$('.header_top .mob_close').on('click',function(e){
            e.preventDefault();
            $('.header_top_nav,.header_top .mob_btn').removeClass('open')
		});
    },
	main: function() {
        
        

            function getScrollTop() {
                       var scrOfY = 0;
                       if( typeof( window.pageYOffset ) == "number" ) {
                               scrOfY = window.pageYOffset;
                       } else if( document.body
                       && ( document.body.scrollLeft
                       || document.body.scrollTop ) ) {
                               scrOfY = document.body.scrollTop;
                       } else if( document.documentElement
                       && ( document.documentElement.scrollLeft
                        || document.documentElement.scrollTop ) ) {
                               scrOfY = document.documentElement.scrollTop;
                       }
                       return scrOfY;
            }
            $(window).scroll(function() {
                fixPaneRefresh();
                console.log('1')
            });

            function fixPaneRefresh(){
                if ($(".header").length) {
                    var top  = getScrollTop();
                    if (top < 80) {
                        $(".header").addClass('fixed');
                                  }
                    else {
                        $(".header").removeClass('fixed');
                    }
                }
            }
                
                
                
                
        $('.mob_btn_search').on('click',function(e){
            e.preventDefault();
            $('.header_search').stop().slideToggle();
		});
        
        
            $('.footer_top_head,.footer_bottom_head').on('click',function(e){
                e.preventDefault();
                if($(window).width() <= 730) {
                    $(this).toggleClass('open').next('div').stop().slideToggle();
                }
            });
        
        $('.add_btn').on('click',function(e){
            e.preventDefault();
            if($(this).hasClass('add_plus') ) {
                $(this).parents('.add').find('input').val(Number($(this).parents('.add').find('input').val()) + 1)
            } 
            if ($(this).hasClass('add_minus') && $(this).parents('.add').find('input').val() > 1 )  {
                $(this).parents('.add').find('input').val(Number($(this).parents('.add').find('input').val()) - 1)
            }
            
        })
        
        if($('.slider_goods').length) {
            $('.slider_goods.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    700:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }
        if($('.card_slider_nav').length) {
             $('.card_slider_nav.owl-carousel').owlCarousel({
                loop:false,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:2
                    },
                    500:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }
        if($('.home_slider').length) {
             $('.home_slider.owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                dots:false,
                items:1,
                center:true
            });
        }
        
        
        $('.card_slider_nav a').on('click',function(e){
            e.preventDefault();
            $('.card_slider_big a').attr('href',$(this).find('img').attr('src'))
            $('.card_slider_big img').attr('src',$(this).find('img').attr('src'))
        });
        
        $('.mob_btn_books').on('click',function(e){
            e.preventDefault();
            $('.header_bottom_nav nav').stop().slideToggle();
        });
        
        $('.mob_btn_filter').on('click',function(e){
            e.preventDefault();
            $('aside').toggleClass('open');
            $('body').toggleClass('no_scroll');
        });
         $('.aside_close').on('click',function(e){
            e.preventDefault();
            $('aside').removeClass('open');
            $('body').removeClass('no_scroll');
        });
        
        
    },
};

$(function() {
	Common.init();
});