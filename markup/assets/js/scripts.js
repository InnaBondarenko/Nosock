$(document).ready(function(){
		$(".opener-menu").click(function(){
				$("#open-menu").toggle();
			});
		$(".opener-menu").click(function(){
				$("#open-menu").toggle();
			});
		$('.counters').styler();

		// carousel
		$('.product-carousel').owlCarousel({
			loop:true,
			items:1,
			nav: true,
			dots: false
		});
		$(".preview").imagezoomsl({
	        zoomrange: [2, 1],
	    });
	    $(".close").click(function(){
				$(this).parents(".basket-block").addClass("delete");
			});
	});
	