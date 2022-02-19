$(function(){
    var sm_w = 576;
    if($(window).width() <= sm_w)
    {
        $('#collapse-images').addClass('collapse');
        $('#collapse-videos').addClass('collapse');
    }
    if($(window).width() > sm_w)
    {
        $('#show-images').hide();
        $('#show-videos').hide();
    }
});