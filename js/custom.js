$('#banner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay: true,
	autoplayTimeout: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#category').owlCarousel({
    loop:true,
    margin:10,
	dots: false,
    nav:true,
//	autoplay: true,
//	autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

jQuery(function ($) {
  $('#myFlipper').flipper('init');
  $('#modalFlipper').flipper('init');
});

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

$('#pr-sale').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
//	autoplay: true,
//	autoplayTimeout: 3000,
	center: true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('#blog-item').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
	autoplay: true,
	autoplayTimeout: 4000,
	center: true,
    responsive:{
        0:{
            items:2
        },
        700:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

new WOW().init();
