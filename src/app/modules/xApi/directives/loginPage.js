﻿(function () {

    angular.module('quiz.xApi')
        .directive('loginPage', loginPage);

    function loginPage() {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                var $element = $(element);

                changeHeight();

                $(window).resize(function () {
                    changeHeight();
                });

                function changeHeight() {
                    var screenHeight = $(window).height(),
                        scrollHeight = $('html')[0].scrollHeight;

                    $element.css('height', screenHeight > scrollHeight ? screenHeight : scrollHeight);
                }
            }
        };
    }
}());