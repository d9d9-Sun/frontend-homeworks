let links = document.querySelectorAll('ul a[href^="http"]');
console.log(links);

links.forEach(function(el) {
	el.style.borderBottom = '1px dashed #000';
});