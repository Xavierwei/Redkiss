(function($){
    $(function () {
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
        return;
        var emailBtn = $('#sns_email > a')
            ,emailSct = $('#sns_email_popup')
            ,sendBtn = $("#sns_email_submit")
            ,emailInput = $("#sns_form_email")
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
                    con.html('');
                    $.each(els, function (index) {
                        con.append(els[index]);
                    });
                    emailInput.val('');

                }, 600);
            }, 1000);
        }

        function showError(error){
            error || (error = "ERROR HAPPENED, PLEASE TRY LATER");
            var msg = $('<span style="opacity: 0;" class="email-error-msg">'+error+'</span>');

            $('.checkboxFive').find('.email-error-msg').remove();
            $('.checkboxFive').append(msg);
            msg.animate({
                opacity: 1
            }, 200);
        }

        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email) ;
        }

        sendBtn.click(function () {
            if (!isEmail(emailInput.val()) || !emailInput.val().length) {
                showError("EMAIL IS INVALID");
            }
            else {
                setTimeout(showSuccess, 500);
            }
        });

        emailInput.focus(function () {
            $(this).val(' ');
        });

        $('body').click(function (event) {
            if (emailBtn.data('shown') &&
            !$(event.target).parents('.end_list_wrap').size()) {
                emailBtn.click();
            }
        });
    });

    // Youtube 视频播放 / 缩放
    $(function () {

        $("#video").attr({
            width: 1920,
            height: 1080
        });

        function doOnOrientationChange()
        {
            switch(window.orientation)
            {
                case -90:
                case 90:
                    return 1; // 横屏
                    break;
                default:
                    return 2; // 竖屏
                    break;
            }
        }

        (function (item) {
            if($(item).size() && $(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
                var w=$(item).attr('width');
                var h=$(item).attr('height');
                var ar = h/w*100;
                if (doOnOrientationChange() == 1) {
                    var ar = w/h * 100;
                }
                ar=ar.toFixed(2);
                //Style iframe
                $(item).css('position','absolute');
                $(item).css('top','0');
                $(item).css('left','0');
                $(item).css('width','100%');
                $(item).css('height','100%');
                $(item).css('max-width',w+'px');
                $(item).css('max-height', h+'px');
                $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:0px;" />');
                $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
            }
        })($("#video"));

        $(window).resize(function () {
            // 计算高度
            var height = $('#video').attr('height') * ($(window).width() / $('#video').attr('width'));
            var paddingTop = ($(window).height() - height) / 2;
            $('.video-con').css({
                'padding-top': paddingTop
            });

            $('.youtube-con').height($(window).height());
        }).trigger('resize');


    });

    $(function () {

        function showYoutube(cb) {
            var youtube = $('.youtube-con');
            $('#jplayer_background').jPlayer('pause');
            youtube.find('iframe')[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args":""}', "*");
            youtube.css({opacity: 0}).show().stop(true, false).animate({
                opacity: 1
            }, 500, function () {
                cb();
            });
        }

        function hideYoutube(cb) {
            var youtube = $('.youtube-con');
            $('#jplayer_background').jPlayer('play');
            youtube.find('iframe')[0].contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args":""}', "*");
            youtube.stop(true, false).animate({
                opacity: 0
            }, 500, function () {
                youtube.hide();
                cb();
            })
        }

        $('#file_popup').click(function () {
            var el = $(this),
                youtube = $('.youtube-con');

            if (youtube.parent().hasClass('mm-page')) {
                console.log('hello');
                youtube.prependTo('body');
            }
            // 关闭
            if (el.data('shown')) {
                hideYoutube(function () {
                    el.data('shown', false);
                });
            }
            // 开启
            else {
                showYoutube(function () {
                    el.data('shown', true);
                });
            }
        });

        $('.youtube-con .close_btn').click(function () {
            hideYoutube(function () {
                $('#file_popup').data('shown', false);
            });
        });

        $(document).keyup(function (event) {
            if (event.keyCode == 27) {
                hideYoutube(function() {
                    $('#file_popup').data('shown', false);
                });
            }
        });
    });



}(jQuery));
