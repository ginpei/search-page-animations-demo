(function() {
	const threshold = 100;
	let minimizedHeader = false;
	$(document).on('scroll', (event)=>{
		const top = document.documentElement.scrollTop || document.body.scrollTop;
		console.debug(top, threshold, minimizedHeader);
		if (top > threshold) {
			if (!minimizedHeader) {
				$('.js-header').addClass('is-minimized');
				minimizedHeader = true;
			}
		}
		else {
			if (minimizedHeader) {
				$('.js-header').removeClass('is-minimized');
				minimizedHeader = false;
			}
		}
	});

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
