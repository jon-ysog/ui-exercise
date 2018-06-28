$(document).ready(function () {

    $('#sidebarToggleButton').click(function () {
        var aSide = $('#aSide');
        var sidebarToggleButton = $('#sidebarToggleButton');
        var content = $('#content');

        if (aSide.is(':visible')) {
            aSide.hide('fast', function () {
                sidebarToggleButton.removeClass('sidebar-shown');
                content.addClass('full-width');
            });
        }
        else {
            content.removeClass('full-width');
            aSide.show('fast', function () {
                sidebarToggleButton.addClass('sidebar-shown');
            });
        }
    });
});