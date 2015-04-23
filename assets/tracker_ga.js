$(document).ready(function()
{
	var track = function(category, action, label)
	{
		ga('send', 'event', category, action, label);
		//console.log(category, action, label);
	}

	$('.track-header-click-h_experience').on('click', function(){
		track('header', 'click', 'h_experience');
	});
	$('.track-header-click-h_parfum').on('click', function(){
		track('header', 'click', 'h_parfum');
	});

	$('.track-header-click-h_film').on('click', function(){
		track('header', 'click', 'h_film');
	});

	$('.track-header-click-h_jachete').on('click', function(){
		track('header', 'click', 'h_jachete');
	});

	$('.track-header-click-h_pressroom').on('click', function(){
		track('header', 'click', 'h_pressroom');
	});

	$('.track-header-click-h_facebook').on('click', function(){
		track('header', 'click', 'h_facebook');
	});

	$('.track-header-click-h_twitter').on('click', function(){
		track('header', 'click', 'h_twitter');
	});

	$('.track-header-click-h_youtube').on('click', function(){
		track('header', 'click', 'h_youtube');
	});

	$('.track-header-click-h_instagram').on('click', function(){
		track('header', 'click', 'h_instagram');
	});

	$('.track-welcome_page-click-w_parfum').on('click', function(){
		track('welcome_page', 'click', 'w_parfum');
	});

	$('.track-welcome_page-click-w_jachete').on('click', function(){
		track('welcome_page', 'click', 'w_jachete');
	});

	$('.track-r-nav-click-nav_chapter1').on('click', function(){
		track('r-nav', 'click', 'nav_chapter1');
	});

	$('.track-r-nav-click-nav_chapter2').on('click', function(){
		track('r-nav', 'click', 'nav_chapter2');
	});

	$('.track-r-nav-click-nav_chapter3').on('click', function(){
		track('r-nav', 'click', 'nav_chapter3');
	});

	$('.track-r-nav-click-nav_endPage').on('click', function(){
		track('r-nav', 'click', 'nav_endPage');
	});

	$('.track-endPage-click-mailto').on('click', function(){
		track('endPage', 'click', 'mailto');
	});

	$('.track-endPage-click-facebook_share').on('click', function(){
		track('endPage', 'click', 'facebook_share');
	});

	$('.track-endPage-click-twitter_share').on('click', function(){
		track('endPage', 'click', 'twitter_share');
	});

	$('.track-endPage-click-download_music').on('click', function(){
		track('endPage', 'click', 'download_music');
	});

	$('.track-endPage-click-end_jachete').on('click', function(){
		track('endPage', 'click', 'end_jachete');
	});

	$('.track-parfum-click-parfum_jachete').on('click', function(){
		track('parfum', 'click', 'parfum_jachete');
	});

	$('.track-parfum-click-parfum_ensavoirplus').on('click', function(){
		track('parfum', 'click', 'parfum_ensavoirplus');
	});

	$('.track-footer-click-footer_loverdose').on('click', function(){
		track('footer', 'click', 'footer_loverdose');
	});

	$('.track-footer-click-footer_ml').on('click', function(e){
		e.preventDefault();
		track('footer', 'click', 'footer_ml');
		return false;
	});

	$('.track-footer-click-footer_cookies').on('click', function(e){
		e.preventDefault();
		track('footer', 'click', 'footer_cookies');
		return false;
	});

	$('.track-footer-click-footer_donnees').on('click', function(e){
		e.preventDefault();
		track('footer', 'click', 'footer_donnees');
		return false;
	});

	$('.track-footer-click-footer_contact').on('click', function(e){
		e.preventDefault();
		track('footer', 'click', 'footer_contact');
		return false;
	});










	$('.track-m_menu-click-h_experience').on('click', function(){
		track('m_menu', 'click', 'h_experience');
	});

	$('.track-m_menu-click-h_film').on('click', function(){
		track('m_menu', 'click', 'h_film');
	});

	$('.track-m_menu-click-h_jachete').on('click', function(){
		track('m_menu', 'click', 'h_jachete');
	});

	$('.track-m_menu-click-h_pressroom').on('click', function(){
		track('m_menu', 'click', 'h_pressroom');
	});





	$('.track-m_welcome_page-click-m_w_jachete').on('click', function(){
		track('m_welcome_page', 'click', 'm_w_jachete');
	});

	$('.track-m_welcome_page-click-m_w_menu').on('click', function(){
		track('m_welcome_page', 'click', 'm_w_menu');
	});

	$('.track-m_endPage-click-m_facebook_share').on('click', function(){
		track('m_endPage', 'click', 'm_facebook_share');
	});

	$('.track-m_endPage-click-m_twitter_share').on('click', function(){
		track('m_endPage', 'click', 'm_twitter_share');
	});

	$('.track-m_endPage-click-m_soundcloud').on('click', function(){
		track('m_endPage', 'click', 'm_soundcloud');
	});

	$('.track-m_endPage-click-m_end_jachete').on('click', function(){
		track('m_endPage', 'click', 'm_end_jachete');
	});
});