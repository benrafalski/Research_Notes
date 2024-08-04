$(document).ready(function(){
    // jQuery methods go here...
    $(".list-content-body").slideUp(5)

    $(".list-content-title").click(function(){
        var list = $(this).next()
        
        if(list.attr('class') == 'list-content-body'){
            list.slideToggle()
            // list.show()
        }
        $(this).find('i').toggleClass('active');
    })

});