$(document).ready(function() {

	$('.bar').on('click', function() {
		$('.sideMenuContainer').toggleClass('showSideMenu')
	})

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