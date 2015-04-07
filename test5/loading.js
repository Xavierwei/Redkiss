/**
 * Created by jackeychen on 4/7/15.
 */

(function ($) {
    $.fn.loadingAnimate = function (options) {
        var self = $(this),
            selector = self.selector;
        var defaultOptions = {
            beforeLoad: function () {}, // 页面加载之前执行方法
            itemPerLoad: function () {}, // 每个图片加载后执行回调
            loadFinished: function () {}, // 所有图片加载完后执行回调,
            templateSelector: '',
            percentSelector:''
        };

        options = $.extend(defaultOptions, options);
        self.options = options;

        self.percent = function (percent) {
            var percentEl = $(self.options['percentSelector']);
            if (!percentEl.size()) return;

            percentEl.html(percent);
        }

        self.background = function (cb ) {
            var maxWidth = $(window).width();
            var step = Math.round(maxWidth / self.total);

            cb(maxWidth - step * self.crtLoaded);
        };

        $(document).ready(function () {
            self.templateEl = $(options['templateSelector']);
            self.percentEl =  $(options['percentSelector'], self.templateEl);

            options.beforeLoad.apply(self, arguments);
            documentReady.apply($(selector), arguments);
        });

        // 图片没有加载完
        function documentReady() {
            var dom = $(this),
                crtLoaded = 0,
                minItem = 5;
                total = dom.size();

            var animator = false;
            if (total < minItem) {
                total = minItem;
                animator = true;
            }

            if (total < 1) return;


            dom.each(function () {
                if ($(this).prop('tagName') != 'IMG') {
                    throw ("目前仅支持IMAGE加载状态判断");
                }
            });

            var loadCb = function () {
                crtLoaded += 1;
                self.crtLoaded = crtLoaded;
                self.total = total;

                options.itemPerLoad.apply(self, [crtLoaded, total]);

                if (crtLoaded == total) {
                    options.loadFinished.apply(self, [total]);
                }
            }
            if (animator) {
                // 模拟动画
                var crtTime = 1;
                total = minItem = 20;
                function animatorFn(time) {
                    if (crtTime >= minItem) {
                        return;
                    }
                    setTimeout(function () {
                        loadCb();
                        animatorFn(time);
                        crtTime += 1;
                    }, time);
                }

                animatorFn(options.delay);
            }
            else{
                dom.each(function () {
                var img = $(this);
                img.data('src', img.attr('src')).removeAttr('src');
                img.load(function () {
                    if (options.delay) {
                        setTimeout(loadCb, options.delay);
                    }
                    else {
                        loadCb();
                    }

                });
                img.attr('src', img.data('src'));
            });
            }


        }
    }
})(jQuery);