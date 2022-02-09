
$(function() {
    var postsContainer = $('#postsContainer');
    var loadMorebutton = $('#loadMoreButton');
    
    var paginator = $(loadMorebutton).data(paginator);
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
            url: "/page/" + page,
            success(response) {
                console.log(response);
                $(postsContainer).append(response);
            }
        });
    });
});