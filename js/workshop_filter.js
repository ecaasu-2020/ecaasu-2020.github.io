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
	
	updateBlockDescription();
	updateWorkshopListDOM();
// 	}
});

$("#workshops-search-filters .filter-tag").click(function(e) {
	
	let value = $(this).text();
	selectedBlock = value;

	// if($(this).hasClass("block-tag")) {
	// 	if(selectedBlocks.indexOf(value) > -1) {
	// 		selectedBlocks.splice(selectedBlocks.indexOf(value), 1);
	// 	} else {
	// 		selectedBlocks.push(value);
	// 	}
	// }
	// } else {
	// 	if(selectedTracks.indexOf(value) > -1) {
	// 		selectedTracks.splice(selectedTracks.indexOf(value), 1);
	// 	} else {
	// 		selectedTracks.push(value);
	// 	}
	// }

	// $(this).toggleClass('unselected');

	$("#workshops-search-filters .filter-tag").each(function() {
		$(this).addClass('unselected');
	});
	$(this).removeClass('unselected');

	updateWorkshopListDOM();
	updateBlockDescription();
});

// $("#workshops-deselect-all").click(function(e) {
// 	selectedBlocks = [];
// 	selectedTracks = [];

// 	$(".filter-tag").each(function() {
// 		$(this).addClass("unselected");
// 	});

// 	updateWorkshopListDOM();
// });