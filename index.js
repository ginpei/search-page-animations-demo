(function() {
	function $(selector, parent=document) {
		const els = Array.from(parent.querySelectorAll(selector));
		return {
			each(fn) {
				els.forEach(fn);
				return this;
			},

			on(type, listener) {
				this.each((el)=>el.addEventListener(type, listener));
				return this;
			},

			addClass(namesString) {
				const names = namesString.split(' ');
				names.forEach((name)=>{
					this.each(el=>el.classList.add(name));
				});
			},
		};
	}

	$('.js-searchForm').on('submit', (event)=>{
		event.preventDefault();
		$('body').addClass('is-showingResult');
	});
})();
