//// FAQ Interaction

$('.drawer').click(function() {
	$(this).next().toggleClass('open');
});

$('.featured-faq-toggle').click(function() {
	$(this).addClass('not-displayed');
	$('.not-featured-faq').toggleClass('not-displayed');
});