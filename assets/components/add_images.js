$(document).ready(function () {

    function handleDeleteButton() {
        $('button[data-action="delete"]').click(function (e) {
            e.preventDefault();
            const target = this.dataset.target;
            $(target).remove();
        });
    }

    $('#add-image').click(function (e) {
        var list = jQuery(jQuery(this).attr('data-image-selector'));
        // Try to find the counter of the list or use the length of the list
        var counter = list.data('image-counter') || list.children().length;
        // grab the prototype template
        var newImageWidget = list.attr('data-image-prototype');
        // replace the "__name__" used in the id and name of the prototype
        // with a number that's unique to your emails
        // end name attribute looks like name="contact[emails][2]"
        newImageWidget = newImageWidget.replace(/__name__/g, counter);
        // Increase the counter
        counter++;
        // And store it, the length cannot be used if deleting widgets is allowed
        list.data('widget-counter', counter);

        // create a new list element and add it to the list
        var newImageElement = jQuery(list.attr('data-image-tags')).html(newImageWidget);
        newImageElement.appendTo(list);

        handleDeleteButton();
    });

    handleDeleteButton();

});