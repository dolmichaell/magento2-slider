define([
    'jquery',
], function ($) {
    return function (config, element) {
        setInterval(function(){
            $(element).toggleClass('toggle');
        },5000)
    };
});
