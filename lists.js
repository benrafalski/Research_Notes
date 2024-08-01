$(document).ready(function(){
    // jQuery methods go here...
    $(".list-content-body").hide()

    $(".list-content-title").click(function(){
        var list = $(this).next()
        
        if(list.attr('class') == 'list-content-body'){
            list.slideToggle()
        }
        $(this).find('i').toggleClass('active');
    })

});