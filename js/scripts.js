//// Mobile Navigation

$('.nav-toggle').click(function() {
	$('body').toggleClass('nav-open');
	$('#mobile-nav-screen').toggleClass('visible');
});

//// Hide Header on on scroll down
//// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


//// Workshop Search

var selectedBlocks = ["1","2","3"];
var selectedTracks = [];

function updateWorkshopListDOM() {

	var block;
	var track;

	$(".workshop").each(function() {
		block = $(this)[0].getAttribute("data-block");
		track = $(this)[0].getAttribute("data-track");
		if(selectedBlocks.includes(block) || selectedTracks.includes(track)) {
			$(this).removeClass("not-displayed");
		} else {
			$(this).addClass("not-displayed");
		}
	});
}

$( document ).ready(function() {
	if($("#workshops-header").length) {
		// read all track tags from DOM into selectedTracks
		$("#track-filter-section > .tag").each(function(index, value) {
			selectedTracks.push($(this).text());
		});

		updateWorkshopListDOM();
	}
});

$("#workshops-search-filters .filter-tag").click(function(e) {
	
	let value = $(this).text();

	if($(this).hasClass("block-tag")) {
		if(selectedBlocks.indexOf(value) > -1) {
			selectedBlocks.splice(selectedBlocks.indexOf(value), 1);
		} else {
			selectedBlocks.push(value);
		}
	} else {
		if(selectedTracks.indexOf(value) > -1) {
			selectedTracks.splice(selectedTracks.indexOf(value), 1);
		} else {
			selectedTracks.push(value);
		}
	}

	$(this).toggleClass('unselected');

	// console.log(selectedBlocks);
	// console.log(selectedTracks);

	updateWorkshopListDOM();
});

$("#workshops-deselect-all").click(function(e) {
	selectedBlocks = [];
	selectedTracks = [];

	$(".filter-tag").each(function() {
		$(this).addClass("unselected");
	});

	// console.log(selectedBlocks);
	// console.log(selectedTracks);

	updateWorkshopListDOM();
});



