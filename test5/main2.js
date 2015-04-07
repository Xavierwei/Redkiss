(function($){
	$('.footer_link a').on('click', function(){
		var index = $(this).data('link');
		$('.popup_content').fadeIn().find('#ft_content_' + index).show();
	});
	$('.close_btn').on('click', function(){
		$('.popup_content').fadeOut(function(){
			$(this).find('.content_box').hide();
		});
	});
}(jQuery));