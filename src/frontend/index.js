import "./style.scss";

(function () {
	const animated = document.querySelectorAll('[class*="x-animate"]');

	[...animated].forEach((element) => {
		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio) {
					entry.target.classList.add("x-animate-in");

					observer.unobserve(entry.target);
				}
			});
		}, { rootMargin: "-20%", threshold: 0 } );

		observer.observe(element);
	});
})();
