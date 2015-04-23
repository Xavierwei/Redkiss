!function(n) {
	n(function() {
		n(".footer_link a").on("click", function(e)
		{
			if( ! n(this).hasClass('inner')){
				return true;
			};

			e.preventDefault();
			var t = n(this).data("link");

			n(".popup_content").fadeOut(function() {
				n(this).find(".content_box").hide();
				n(".popup_content").fadeIn().find("#ft_content_" + t).show();
			})

			return false;
		}), n(".close_btn").on("click", function() {
			n(".popup_content").fadeOut(function() {
				n(this).find(".content_box").hide()
			})
		})
	}), n(function() {
		return
	}), n(function() {
		function t() {
			switch (window.orientation) {
				case -90:
				case 90:
					return 1;
				default:
					return 2
			}
		}
		var i = {versions: function() {
				{
					var n = navigator.userAgent;
					navigator.appVersion
				}
				return {trident: n.indexOf("Trident") > -1,presto: n.indexOf("Presto") > -1,webKit: n.indexOf("AppleWebKit") > -1,gecko: n.indexOf("Gecko") > -1 && -1 == n.indexOf("KHTML"),mobile: !!n.match(/AppleWebKit.*Mobile.*/),ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,iPhone: n.indexOf("iPhone") > -1,iPad: n.indexOf("iPad") > -1,webApp: -1 == n.indexOf("Safari")}
			}(),language: (navigator.browserLanguage || navigator.language).toLowerCase()};
		n("#video").attr(i.versions.mobile ? {width: 720,height: 400} : {width: screen.width,height: screen.height}), function(i) {
			if (n(i).size() && n(i).attr("src").match(/(https?:)?\/\/www\.youtube\.com/)) {
				var e = n(i).attr("width"), o = n(i).attr("height"), a = o / e * 100;
				if (1 == t())
					var a = e / o * 100;
				a = a.toFixed(2), n(i).css("position", "absolute"), n(i).css("top", "0"), n(i).css("left", "0"), n(i).css("width", "100%"), n(i).css("height", "100%"), n(i).css("max-width", e + "px"), n(i).css("max-height", o + "px"), n(i).wrap('<div style="max-width:' + e + 'px;margin:0 auto; padding:0px;" />'), n(i).wrap('<div style="position: relative;padding-bottom: ' + a + '%; height: 0; overflow: hidden;" />')
			}
		}(n("#video")), n(window).resize(function() {
			var t = n("#video").attr("height") * (n(window).width() / n("#video").attr("width")), i = (n(window).height() - t) / 2;
			n(".video-con").css({"padding-top": i}), n(".youtube-con").height(n(window).height())
		}).trigger("resize")
	}), n(function() {
		function t(t) {
			var i = n(".youtube-con");
			n("#jplayer_background").jPlayer("pause"), i.find("iframe")[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args":""}', "*"), i.css({opacity: 0}).show().stop(!0, !1).animate({opacity: 1}, 500, function() {
				t()
			})
		}
		function i(t) {
			var i = n(".youtube-con");
			n("#jplayer_background").jPlayer("play"), i.find("iframe")[0].contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args":""}', "*"), i.stop(!0, !1).animate({opacity: 0}, 500, function() {
				i.hide(), t()
			})
		}
		n("#file_popup").click(function() {
			var e = n(this), o = n(".youtube-con");
			o.parent().hasClass("mm-page") && o.prependTo("body"), e.data("shown") ? i(function() {
				e.data("shown", !1)
			}) : t(function() {
				e.data("shown", !0)
			})
		}), n(".youtube-con .close_btn").click(function() {
			i(function() {
				n("#file_popup").data("shown", !1)
			})
		}), n(document).keyup(function(t) {
			27 == t.keyCode && i(function() {
				n("#file_popup").data("shown", !1)
			})
		})
	})
}(jQuery);
