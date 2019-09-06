// Scroll to home section


$('.home-section-link').click(function() {
	let target = $(this).prop('hash');
	$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 750);
});