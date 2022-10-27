$(function () {

	var mixer = mixitup('.popular__cards');

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 75) {
			$('.header').addClass('sticky')
		} else {
			$('.header').removeClass('sticky')
		}
	});

	$(".menu").on("click", "a", function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});


});