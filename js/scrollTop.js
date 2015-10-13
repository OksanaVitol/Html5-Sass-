/**
 * Created by Oksana on 13.10.15.
 */
$(document).ready(function () {
    $(function () {
        // scroll body to 0px on click
        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});