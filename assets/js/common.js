/*-----------------------------------------------------------------------------------

    Template Name: terio 

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]
     
    1. counter  
    2. accordion
    3. projectsswiper
    4. partnerswiper
    5. latestswiper
    6. projectsswiper
    7. testimonialsswiper
    8. studiesswiper
    9. herothreeswiper
    10. blogswiper
    11. herotwoswiper
    12. searchBtn
    13. mobile-nav
    14. back to top button
    15. Preloader 

-----------------------------------------------------------------------------------*/

/* 1. counter */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText;

        const increment = target/150;

        if(c< target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter();
})


/* 2. accordion */
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

/* 3. projectsswiper */ 

if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper('.projectsswiper', {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 4000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
    });

/* 4. partnerswiper */ 
var swiper = new Swiper('.partnerswiper', {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
    });

/* 5. latestswiper */ 
var swiper = new Swiper('.latestswiper', {
      slidesPerView: 4,
      slidesPerColumn: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
    });
/* 6. projectsswiper */
var swiper = new Swiper('.brandswiper', {
      slidesPerView: 5,
      slidesPerColumn: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
    });

/* 7. testimonialsswiper */
var swiper = new Swiper('.testimonialsswiper', {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
    });

/* 8. studiesswiper */
var swiper = new Swiper('.studiesswiper', {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
    });
}
/* 9. herothreeswiper */ 
if (typeof Swiper !== 'undefined') {
var swiper = new Swiper('.herothreeswiper', {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 10,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
        },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
/* 10. blogswiper */
var swiper = new Swiper('.blogswiper', {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 10,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
      },
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

/* 11. herotwoswiper */
var swiper = new Swiper('.herotwoswiper', {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 10,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
      },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}
/* 12. searchBtn */
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
  if ( ! searchBtn.classList.contains('close') ){
    document.getElementById("results-container").innerHTML = '';
  }
};

searchBtn.addEventListener("click", expand);


/* 13. mobile-nav */ 

jQuery(document).ready(function($){

jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 

        jQuery('#nav-icon4').click(function($){

            jQuery('#mobile-nav').toggleClass('open');

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });


        jQuery('.bar-menu').click(function($){

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });
  
}) ;
/* 14. back to top button */ 

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/* 15. Preloader */ 
$(window).on('load', function () {
    $("body").addClass("page-loaded");
    ("loaded")
});

( function( $ ) {
	'use strict';

  /*
    16. Social Share
  */
  $('.social-share').rrssb({
    title: $('.social-share').data('title'),
    url: $('.social-share').data('url'),
  });

  /*
		17. Validate Form
	*/
	if($('.subscribe-form').length) {
		$('.subscribe-form').validate({
			rules: {
				EMAIL: {
					required: true,
          email: true
				}
			},
			success: 'valid',
			submitHandler: function() {
				return true;
			}
		});
	}
  if($('#cform-1').length) {
		$('#cform-1').validate({
			rules: {
				name: {
					required: true
				},
        email: {
					required: true,
          email: true
				},
        message: {
          required: true
        }
			},
			success: 'valid',
			submitHandler: function() {
				return true;
			}
		});
	}
  if($('#cform-2').length) {
		$('#cform-2').validate({
			rules: {
				name: {
					required: true
				},
        email: {
					required: true,
          email: true
				},
        message: {
          required: true
        }
			},
			success: 'valid',
			submitHandler: function() {
				return true;
			}
		});
	}
  if($('#cform-3').length) {
		$('#cform-3').validate({
			rules: {
				name: {
					required: true
				},
        company: {
					required: true
				},
        email: {
					required: true,
          email: true
				},
        message: {
          required: true
        }
			},
			success: 'valid',
			submitHandler: function() {
				return true;
			}
		});
	}

  /*
		Search
	*/
	if ( $('#search-input').length ) {
		var sjs = SimpleJekyllSearch({
		  searchInput: document.getElementById('search-input'),
		  resultsContainer: document.getElementById('results-container'),
		  json: '/search.json'
		});
	}

} )( jQuery );