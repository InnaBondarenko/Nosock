var activeClsName = 'active';

function clickHead(obj) {
	var heads = document.getElementsByClassName('head-form');
	var isActive = containsClass(obj, activeClsName);
	for (var i = 0; i < heads.length; ++i) {
		removeClass(heads[i], activeClsName);
	}
	if (!isActive) {
		addClass(obj, activeClsName);
	}
}

function containsClass(el, className) {
	var result = false;
	if (el != null && el != undefined && className != null && className != undefined && typeof className === 'string') {
		var classes = el.className.split(' ');
		result = classes.indexOf(className) == -1 ? false : true;
	}
	return result;
}

function addClass(el, className) {
	if (el != null && el != undefined && className != null && className != undefined && typeof className === 'string') {
		var classes = el.className.split(' ');
		classes.push(className);
		el.className = classes.join(' ');
	}
}

function removeClass(el, className) {
	if (el != null && el != undefined && className != null && className != undefined && typeof className === 'string') {
		var classes = el.className.split(' ');
		for (var i = 0; i < classes.length; i++) {
			if (classes[i] == className) {
				classes.splice(i, 1);
				i--;
			}
		}
		el.className = classes.join(' ');
	}
}

$(".icon-search").click(function(){
	$("#search").toggle();
});