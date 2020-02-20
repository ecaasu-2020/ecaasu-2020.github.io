// Scroll to home section

$('.home-section-link').click(function(e) {
	e.preventDefault();
	let page = "/" + $(this).attr('href').split('#')[0];
	let hash = '#' + $(this).attr('href').split('#')[1]
	if(page !== window.location.pathname) {
		sessionStorage.setItem('hash', hash);
		window.location = page;
	} else {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 750);
		location.href.replace(hash, "");
		$('body').removeClass('nav-open');
		$('#mobile-nav-screen').removeClass('visible');
	}
});

var hash = sessionStorage.getItem('hash')

if(hash !== null){
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 750);

	var hash = sessionStorage.setItem('hash', '')
}