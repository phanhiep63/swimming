// common
$(document).ready(function() {
	"use strict";
	$('#nav-icon4').click(function(){
		$('#nav-icon4').toggleClass('open');
		$('#gnavi').stop(0,1).slideToggle();
	});	
	
	
	$(".sub").hover(function() {
		var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		if( windowWidth > 750) {
		 	$(this).find(".menu_sub").slideDown();
		 }
	},function() {
		var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		if( windowWidth > 750) {
			$(this).find(".menu_sub").stop(1,0).slideUp();
		 }
	});	
	
	$('.sub').click(function(){
		var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		if( windowWidth <= 750) {
			$(this).toggleClass('sub_acti');
			$(this).find('.menu_sub').stop(0,1).slideToggle();
		}
	});
		
});

// fix menu scroll
$(window).bind('scroll',function(){
	"use strict";
	var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
		if( windowWidth > 750) {			
			 if ($(this).scrollTop() >= 200) {
				 $("#header").addClass('active');
			 } else {
				 $("#header").removeClass('active');
			 }
		}
});


