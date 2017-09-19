$(function() {
	var carouselList = $("#carousel ul");
	setInterval(changeSlides, 3000); 
	function changeSlides() {
		carouselList.animate({'marginLeft': -700}, 1000, moveFirstSlide);
	}
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}


});

$('#indicators button').on('click', function() {
  $('button').removeClass('active');
  $(this).addClass('active');
  var index = $('button').index($(this));
  $.each($('button'), function(index, item) {
    
  });
  
});

