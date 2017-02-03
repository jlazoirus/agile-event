(function () {
    'use strict';

    var app = {
        init: function () {
            app.bindOnLoad();
        },
        bindOnLoad: function () {
            $(function () {
                app.setupNavMobile();
            });
        },
        setupNavMobile: function () {
            var $menuMobile = $('.menu-mobile');
            $menuMobile.find('.menu-toggle').on('click', function(e) {
                e.preventDefault();
                $(this).toggleClass("on");
                $menuMobile.toggleClass("on");
                $menuMobile.find(".navbar-mobile").toggleClass('hidden');
            });
        }
    }

    app.init();
})();