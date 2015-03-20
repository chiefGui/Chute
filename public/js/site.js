// Yamm Dropdown Menu
$(document).ready(function() {
	$(document).on('click', '.yamm .dropdown-menu', function(e) {
		e.stopPropagation()
	});
	$('#carousel-home').carousel({
		interval: 500,
		cycle: true
	});
	$('.media-list').featherlightGallery({
		previousIcon: '«',
		nextIcon: '»',
		galleryFadeIn: 300,
		openSpeed: 300
	});
})