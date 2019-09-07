// Scroll to home section

$('.home-section-link').click(function(e) {
	e.preventDefault();
	let page = $(this).attr('href').split('#')[0];
	if(page !== window.location) {
		window.location = page;
	}
	sessionStorage.setItem('hash', '#' + $(this).attr('href').split('#')[1]);
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 750);

	location.href.replace(hash, "");
});

var hash = sessionStorage.getItem('hash')

if(hash !== ""){
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 750);

	var hash = sessionStorage.setItem('hash', '')
}