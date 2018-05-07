define(function () {
    $.fn.input = (parameter) => {
        let defaults = {
            name:'',
            maxHeight:'',
            minHeight:'',
        };
        var options = $.extend({},defaults,parameter);
    };
});