(function($) {
	var App = window.App = {

		// variables
		wow : null,

		lastLogoState : true,

		// function
		isMenuOpened : function() {
			return $('.hamburger-menu').hasClass('animate');
		},

		initMenu : function() {
			var t=this;

			$('.menu-wrapper').click(function() {
				$('.hamburger-menu').toggleClass('animate');
				$('.overlay-menu').toggleClass('animate');

				if (!t.isMenuOpened()) {
					$('.overlay-menu-inner').css('display', 'none');

					if (t.wow) t.wow.stop();
				} else {
					$('.overlay-menu-inner').css('display', 'unset');

					var wow=t.wow = new WOW({
						boxClass: 'wow-menu',
						scrollContainer : 'wow-menu'
					});
					// workaround to animate elements above - if user scroll before init
					wow.isVisible=function() {return true;};
					wow.init();
				}

			    $(".hide").toggle();
			    t.checkLogo();
			});

			/* DROPDOWN MENU */
            $('.portfolio').click(function(e) {
			    if ($('#dots').hasClass('dot-close')){
				    $('#dots').attr('class', 'dot-open');
                    $('.dropdown-menu').toggle(200);
	                $('.portfolio-content').slideToggle(200);
                } else {
			        $('#dots').attr('class', 'dot-close');
                    $('.dropdown-menu').toggle(200);
	                $('.portfolio-content').slideToggle(200);
			    }
			});
},

		checkLogo : function() {
			var yPos = $(window).scrollTop();
			var menuOpened=this.isMenuOpened();

			$('.logo').css('color', menuOpened?'white':'black');

			/* var newState=(yPos<800 || menuOpened);
			if (newState != this.lastLogoState) {
				if (newState) {
		            $(".b-back").fadeOut();
		            $('.logo').fadeIn();
		        } else {
		            $(".b-back").fadeIn();
		            $('.logo').fadeOut();
		        }
			}
			this.lastLogoState=newState; */
		},



		init : function() {
			var t=this;

			t.initMenu();

			/* After x scroll hide LOGO show BACK */

		    $(window).scroll(function() {
		        t.checkLogo();
		    });

		    $('.b-back').click(function() {
		    	window.history.go(-1)
		    });
		}
	}

		// FOLLOW ALONG LINE DISSAPEAR

    $(window).scroll(function () {
				$('.follow-along-line').fadeOut("slow");
			});


// LEFT SIDE FADE OUT WHEN REACHED FOOTER

    $(window).scroll(function() {

    if ($(this).scrollTop()>700)
     {
        $('.title').fadeOut();
     }
    else
     {
      $('.title').fadeIn();
     }
 });


// MENU FADE OUT
 $(window).scroll(function() {

 if ($(this).scrollTop()>10)
	{
		 $('.menu').fadeOut();
	}
 else
	{
	 $('.menu').fadeIn();
	}
});

// MENU VERTICAL MOVABLE BAR
function moveMenu($t) {
	$('.menuUnderline').stop().animate({
	'width': $t.width(),
	'left' : $t.position().left
			 }, 400);
	}

	$('ul li a').hover(function() {
		moveMenu($(this));
	});

	$('ul li a.active').each(function() {
		moveMenu($(this));
	});

	$('ul li a').mouseout(function(){
		moveMenu($('ul li a.active'));
	});

// PARALLAX EFFECT 2 SCRIPTS

$(window).enllax();

$('#paralax1').paroller({
		factor: -0.2,
		type: 'foreground',
		direction: 'horizontal',
		transition: 'transform 0.0s ease-in',
});

// WAYPOINTS
var waypoints = $('#tag1').waypoint({
  handler: function(direction) {
    $('#tag1 span').css('width', '32px');
		$("#tag1 p").css('padding-left', '41px');
  }, offset: '75%'
})

var waypoints = $('#tag2').waypoint({
  handler: function(direction) {
    $('#tag2 span').css('width', '32px');
		$("#tag2 p").css('padding-left', '41px');
  }, offset: '75%'
})

var waypoints = $('#tag3').waypoint({
  handler: function(direction) {
    $('#tag3 span').css('width', '32px');
		$("#tag3 p").css('padding-left', '41px');
  }, offset: '75%'
})

var ajax = new XMLHttpRequest();
ajax.open("GET", "head.htm", false);
ajax.send();
document.body.innerHTML += ajax.responseText;





	App.init();
})(jQuery)
