$(function () {
	$('.header-navbar ul.dropped').hover(function () {
		$('.header-navbar li.dropdown a').addClass('opened').removeClass('active');
	}, function () {
		$('.header-navbar li.dropdown a').removeClass('opened').addClass('active');
	});

	$('.header-navbar nav > ul > li:not(.dropdown) > a').click(function ( e ) {
		$('.header-navbar a').removeClass('active');
		$(this).addClass('active');
	});

	$('.header-navbar a.brand-title').click(function ( e ) {
		$('.header-navbar a').removeClass('active');
	});
});
