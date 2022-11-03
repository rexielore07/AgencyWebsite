$(function() {
    if ( $('.slide-one-item').length > 0 ) {
            $('.slide-one-item').owlCarousel({
            items: 1,
            loop: true,
                stagePadding: 0,
            margin: 0,
            autoplay: true,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            pauseOnHover: false,
            nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
          });
      }


	
})