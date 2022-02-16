$(function(){
    
    var featuredImagesButton = $('a[data-featured');

    $(featuredImagesButton).each(function(){
        if($(this).attr('data-featured') == 1 )
        {
            $(this).addClass('btn-success');
        }
        else
        {
            $(this).addClass('btn-outline-success');
        }
    });

    function toggleFeatured() {
        $(featuredImagesButton).each(function () {
            if ($(this).attr('data-featured') == 1) {
                $(this).attr('data-featured', '').removeClass('btn-success').addClass('btn-outline-success');
            }
        })
    }
    
    $(featuredImagesButton).on('click', function(e)
    {
        e.preventDefault();
        toggleFeatured();
        $(this).attr('data-featured', 1).removeClass('btn-outline-success').addClass('btn-success');

        $.ajax({
            method: "GET",
            url: "/featured_image/" + $(this).data('id'),
            success(response) {
                console.log(response);
            },
            error(response){
                console.log(response);
            }
        });

    });
                

});