$(document).ready(function () {

    function handleDeleteButton()
    {
        $('button[data-action="delete"]').click(function(e) {
            e.preventDefault();
            const target = this.dataset.target;
            $(target).remove();
        });
    }

    $('#add-video').click(function (e) {
        var list = jQuery(jQuery(this).attr('data-list-selector'));
        // Try to find the counter of the list or use the length of the list
        var counter = list.data('video-counter') || list.children().length;

        // grab the prototype template
        var newWidget = list.attr('data-video-prototype');
        // replace the "__name__" used in the id and name of the prototype
        // with a number that's unique to your emails
        // end name attribute looks like name="contact[emails][2]"
        newWidget = newWidget.replace(/__name__/g, counter);
        // Increase the counter
        counter++;
        // And store it, the length cannot be used if deleting widgets is allowed
        list.data('widget-counter', counter);

        // create a new list element and add it to the list
        var newElem = jQuery(list.attr('data-video-tags')).html(newWidget);
        newElem.appendTo(list);

        handleDeleteButton();
    });

    handleDeleteButton();

});