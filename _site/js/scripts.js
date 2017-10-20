$(document).ready(function(){
    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target','_top');
    
    $('.toggle').click(function(){
        $('.overview').toggleClass('open');
    });
});
