// page init
jQuery(function() {
	initServices();
});

function initServices() {
	var isAnimating = false;
	var activeClass = 'active';
	var animSpeed = 300;
	var win = jQuery(window);

	jQuery('.block-area').each(function() {
		var holder = jQuery(this);
		var items = holder.find('.unit').each(function() {
			var unit = jQuery(this);
			unit.data('slide', unit.find('.subslide').slideUp(10));
			var slide = unit.data('slide');
			var opener = unit.find('a.frame');
			var closer = unit.data('slide').find('.close');

			opener.click(function(e) {
				e.preventDefault();
				if(isAnimating) return;
				isAnimating = true;

				// close all active slide
				if(items.filter('.' + activeClass).length > 0) {
					items.filter('.' + activeClass).each(function() {
						var activeItem = jQuery(this);
						activeItem.data('slide').slideUp(animSpeed, function() {
							activeItem.data('slide').appendTo(activeItem);
							activeItem.removeClass(activeClass);
						});
					});
				}

				if(unit.hasClass(activeClass)) {
					// close this active slide
					slide.slideUp(animSpeed, function() {
						slide.appendTo(unit);
						unit.removeClass(activeClass);
						isAnimating = false;
					});
				} else {
					// open this slide
					unit.addClass(activeClass);
					slide.insertAfter(getLastIndex(items, unit)).slideDown(animSpeed, function() {
						isAnimating = false;
						
					});
				}
			});

			closer.click(function(e) {
				e.preventDefault();
				slide.slideUp(animSpeed, function() {
					slide.appendTo(unit);
					unit.removeClass(activeClass);
					isAnimating = false;
				});
			});

			win.bind('resize orientationchange', function() {
				if(unit.hasClass(activeClass)) refreshDropLayout(items, unit, slide);
			});
		});
	});

	function getLastIndex(objs, box) {
		var rowObjs = jQuery();
		objs.each(function(i) {
			if(jQuery(this).offset().top == box.offset().top) rowObjs = rowObjs.add(jQuery(this));
		});
		return rowObjs.last();
	}

	function refreshDropLayout(objs, box, drop) {
		drop.remove();
		drop.insertAfter(getLastIndex(objs, box));
	}
}