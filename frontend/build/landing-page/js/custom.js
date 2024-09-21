// Fix header
$(function() {
    var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            header.addClass("stick");
            $('.sticky-top').addClass("fixed");
        } else {
            header.removeClass("stick");
            $('.sticky-top').removeClass("fixed");
        }
    });
});



if ($("body").hasClass("home")) {
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
	$('.counter-value').each(function() {
	  var $this = $(this),
		countTo = $this.attr('data-count');
	  $({
		countNum: $this.text()
	  }).animate({
		  countNum: countTo
		},

		{

		  duration: 2000,
		  easing: 'swing',
		  step: function() {
			$this.text(Math.floor(this.countNum));
		  },
		  complete: function() {
			$this.text(this.countNum);
			//alert('finished');
		  }

		});
	});
	a = 1;
  }

});
}
new WOW().init();