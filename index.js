(function() {
	$('.js-searchForm').on('submit', (event)=>{
		event.preventDefault();
		$('body').addClass('is-showingResult');
		$('.js-keyword').text($('.js-keyword').val());
	});
})();
