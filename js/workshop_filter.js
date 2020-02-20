//// Workshop Search

var selectedBlock = "Steel"
// var selectedTracks = [];

function updateWorkshopListDOM() {

	var block;
	// var track;

	$(".workshop").each(function() {
		block = $(this)[0].getAttribute("data-block");
		// track = $(this)[0].getAttribute("data-track");
		if(block === selectedBlock) {
		// if(selectedBlocks.includes(block) && selectedTracks.includes(track)) {
			$(this).removeClass("not-displayed");
		} else {
			$(this).addClass("not-displayed");
		}
	});
}

function updateBlockDescription() {
	$(".block-description").each(function() {
		block = $(this)[0].getAttribute("data-block");
		// track = $(this)[0].getAttribute("data-track");
		if(block === selectedBlock) {
		// if(selectedBlocks.includes(block) && selectedTracks.includes(track)) {
			$(this).removeClass("not-displayed");
		} else {
			$(this).addClass("not-displayed");
		}
	});
}

$( document ).ready(function() {

// 	if($("#workshops-header").length) {
// 		// read all track tags from DOM into selectedTracks
// 		$("#track-filter-section > .tag").each(function(index, value) {
// 			selectedTracks.push($(this).text());
// 		});

	$("#workshops-search-filters .filter-tag").first().removeClass("unselected");
	
	updateBlockDescription();
	updateWorkshopListDOM();
// 	}
});

$("#workshops-search-filters .filter-tag").click(function(e) {
	
	let value = $(this).text().substring(3); // skip "1: "
	selectedBlock = value;

	$("#workshops-search-filters .filter-tag").each(function() {
		$(this).addClass('unselected');
	});
	$(this).removeClass('unselected');

	updateWorkshopListDOM();
	updateBlockDescription();
});
