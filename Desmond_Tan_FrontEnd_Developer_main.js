$(document).ready(function() {

	// Navigation funtions
	$('.bar').on('click', function() {
		$('.sideMenuContainer').css({'left':'0'})
		$('.sideMenuContainer').toggle('slide');
		// $('.sideMenuContainer').animate({width: 'toggle'})
	});

	// Explore Challenge image gallery functions
	$('.imgContainer').children().on('click', function() {
		// $('.imgContainer').children(':first').removeClass('imgStart')

		//on figure click, replace the overview img to the clicked img
		$('.imgContainer').prepend(this)

		//1 onclick append current exploreTextContainer:child to hiddenText
		$('.hiddenText').append($('.exploreTextContainer').children(':first'))

		//2 append text from hiddenText with matching className and this.id
		$('.exploreTextContainer').append(document.getElementsByClassName(this.id))	
			
	});






});