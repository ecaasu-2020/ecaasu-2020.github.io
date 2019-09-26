//// FAQ Interaction

$('.faq-question').click(function() {
	$(this).next().toggleClass('open');
});