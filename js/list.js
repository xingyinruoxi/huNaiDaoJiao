$(function () {
    function listHeight() {
        var $section = $('#section');
        var $aside = $('#aside');
        var height1 = $section.outerHeight();
        var height2 = $aside.outerHeight();
        if (height1 >= height2) {
            $aside.css('height', height1)
        } else {
            $section.css('height', height2)
        }
    }

    listHeight();
});