define([
    'jquery',
    'slick'
], function ($) {
    return function (config, element) {
        $(element).slick(config);
    };
});
