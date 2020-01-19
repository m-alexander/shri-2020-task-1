document.querySelector('.onoffswitch').addEventListener('click', () => {
	document.querySelector('.onoffswitch').classList.toggle('onoffswitch_checked');


	const theme = document.querySelector('.theme');
	if (theme.classList.contains('theme_color_project-default')) {
		theme.classList.remove('theme_color_project-default');
		theme.classList.add('theme_color_project-inverse');
	} else {
		theme.classList.add('theme_color_project-default');
		theme.classList.remove('theme_color_project-inverse');
	}
});

const accordion_items = document.querySelectorAll('.e-accordion');
Array.from(accordion_items).forEach(accordion_item => {
	accordion_item.querySelector('.e-accordion__short').addEventListener('click', () => {
		accordion_item.querySelector('.e-accordion__more').classList.toggle('history__hide');
	});
});