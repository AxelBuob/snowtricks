$(function(){
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    $('[data-url]').each(function(i,e) {

        var url = $(e).data('url');
        var match = url.match(regExp);
        
        if (match && match[2].length == 11) {
            
            var id = match[2];
            var embedlink = "https://www.youtube.com/embed/" + id;
            e.src = embedlink;

        }
    });
    
});