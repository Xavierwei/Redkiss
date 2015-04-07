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

    $('#sns_email').click(function(){
        $("#sns_email_popup").fadeIn();
    })

    $('#sns_email_close').click(function(e){
        $("#sns_email_popup").fadeOut();
        e.stopPropagation();
    })

    $('#sns_form_email').focus(function(){
        $(this).val('');
        $('sns_form_email_validate').hide();
    })

    $('#sns_email_submit').click(function(){
        var email=$('#sns_form_email').val()
        var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if(!regEmail.test(email)){
            $('#sns_form_email_validate').show();
            return;
        }
        var allow_rcv=$('#sns_form_rcv').val();
        var post_data={
            email:email,
            allow_rcv:allow_rcv
        }
        $.post('/user/email',post_data,function(response){
            if(response.status==0){
                alert("success!");
            }else{
                response.error&&alert(response.error);
                $('#sns_form_email').focus();
            }
        })
    })

}(jQuery));