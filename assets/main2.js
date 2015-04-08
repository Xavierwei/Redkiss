(function($){
    var domain='http://redkiss.ffshtest.net';
	$('.footer_link a').on('click', function(){
		var index = $(this).data('link');
		$('.popup_content').fadeIn().find('#ft_content_' + index).show();
	});
	$('.close_btn').on('click', function(){
		$('.popup_content').fadeOut(function(){
			$(this).find('.content_box').hide();
		});
	});

    //var isShow=false;
    //$('#sns_email').click(function(){
    //    if(isShow==false){
    //        $("#sns_email_popup").fadeIn();
    //        isShow=true;
    //    }else{
    //        $("#sns_email_popup").fadeOut();
    //        isShow=false;
    //    }
    //})
    //
    //$('#sns_email_close').click(function(e){
    //    $("#sns_email_popup").fadeOut();
    //    e.stopPropagation();
    //})
    //
    //$('#sns_form_email').focus(function(){
    //    $(this).val('');
    //    $('sns_form_email_validate').hide();
    //})
    //
    //$('#sns_email_submit').click(function(){
    //    var email=$('#sns_form_email').val()
    //    var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    //    if(!regEmail.test(email)){
    //        $('#sns_form_email_validate').show();
    //        $('#sns_form_email').focus();
    //        return;
    //    }else{
    //        $('#sns_form_email_validate').hide();
    //    }
    //    var allow_rcv=$('#sns_form_rcv').val();
    //    var post_data={
    //        email:email,
    //        allow_rcv:allow_rcv
    //    }
    //    $.post(domain+'admin/user/email',post_data,function(response){
    //        //if(response.status==0){
    //        //    alert("succès!");
    //        //}else{
    //        //    response.error&&alert(response.error);
    //        //    $('#sns_form_email').focus();
    //        //}
    //        alert("succès!");
    //        $('#sns_email_popup').fadeOut();
    //    }).error(function(){
    //        alert("succès!");
    //        $('#sns_email_popup').fadeOut();
    //    })
    //})
    //
    //$('.end_frame').click(function(e){
    //    if(e.target==$(this)){
    //        $('#sns_email_popup').fadeOut();
    //        e.stopPropagation();
    //    }
    //});

    $(function () {
        var emailBtn = $('#sns_email > a')
            ,emailSct = $('#sns_email_popup')
            ,sendBtn = $("#sns_email_submit")
            ,emailCon = $('.end_list_wrap');

        var offset = emailBtn.offset();
        emailBtn.click(function () {
            // hide
            if (emailBtn.data('shown')) {
                emailBtn.data('shown', false);
                emailSct.animate({
                    opacity: 0
                }, 500);
            }
            // show
            else {
                emailBtn.data('shown', true);
                emailSct.css({'display': 'block', 'opacity': 0});
                emailSct.animate({
                    opacity: 1
                }, 500);
            }
        });

        function showSuccess() {
            var els = []
                ,con = $('.checkboxFive');
            con.children().each(function () {
                els.push($(this));
            });

            var msg = $('<span class="email-success-msg">THANK YOU!</span>');
            con.html(msg);

            setTimeout(function () {
                emailBtn.click();

                setTimeout(function () {
                    $.each(els, function (index) {
                        con.html('').append(els[index]);
                    });
                }, 600);
            }, 2000);
        }

        function showError(error){
            error || (error = "ERROR HAPPENED, PLEASE TRY LATER");
            var msg = $('<span style="opacity: 0;" class="email-error-msg">'+error+'</span>');

            $('.checkboxFive').append(msg);
            msg.animate({
                opacity: 1
            }, 200);
        }

        sendBtn.click(function () {
            setTimeout(showSuccess, 500);
        });

        $('body').click(function (event) {
            if (emailBtn.data('shown') &&
            !$(event.target).parents('.end_list_wrap').size()) {
                emailBtn.click();
            }
        });
    });

}(jQuery));