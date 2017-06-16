(function() {
	$('.js-searchForm').on('submit', (event)=>{
		event.preventDefault();
		$('body').addClass('is-showingResult');
		$('.js-keyword').text($('.js-keyword').val());
		$('.js-loading').prop('hidden', false);
		$('.js-resultList').prop('hidden', true);

		setTimeout(()=>{
			$('.js-loading').prop('hidden', true);
			$('.js-resultList').prop('hidden', false);
		}, 3500);
	});
})();
