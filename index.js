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
				return this;
			},

			text(text) {
				if (arguments.length > 0) {
					this.each(el=>el.textContent=text);
					return this;
				}
				else {
					return els[0].textContent;
				}
			},

			val(value) {
				if (arguments.length > 0) {
					this.each(el=>el.value=value);
					return this;
				}
				else {
					return els[0].value;
				}
			},
		};
	}

	$('.js-searchForm').on('submit', (event)=>{
		event.preventDefault();
		$('body').addClass('is-showingResult');
		$('.js-keyword').text($('.js-keyword').val());
	});
})();
