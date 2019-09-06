// Scroll to home section


$('.home-section-link').click(function(e) {
	e.preventDefault();
	let target = $(this).prop('hash');
	$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 750);
});