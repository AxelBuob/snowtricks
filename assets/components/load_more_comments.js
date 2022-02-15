
$(function() {
    var commentsContainer = $('#commentsContainer');
    var loadMorebutton = $('#loadMoreButton');
    
    var slug = $(commentsContainer).data(slug);    
    var paginator = $(commentsContainer).data(paginator);

    var numResults = paginator.paginator.numResults;
    var pageSize = paginator.paginator.pageSize;
    var currentPage = paginator.paginator.currentPage;

    maxPage = numResults / pageSize;
    var page = currentPage;



    loadMorebutton.on("click", function (e) {
        e.preventDefault();
        page++;
        if(page >= maxPage)
        {
            $(loadMorebutton).hide();
        }
        $.ajax({
            method: "GET",
            url: "/figure/" + slug.slug + "/page/" + page,
            success(response) {
                console.log(response);
                $(commentsContainer).append(response);
            }
        });
    });
});