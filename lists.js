$(document).ready(function(){
    // jQuery methods go here...
    $(".h3-list-content > div.list-content").hide()
    $(".h4-list-content > div.list-content").hide()

    $(".h3-list-content > h3").click(function(){
        var list = $(this).next()
        if(list.prop('nodeName') == 'UL'){
            list.slideToggle()
        }
        if(list.prop('nodeName') == 'DIV'){
            list.slideToggle()
        }
        
    })

    $(".h4-list-content > h4").click(function(){
        var list = $(this).next()
        if(list.prop('nodeName') == 'UL'){
            list.slideToggle()
        }
        if(list.prop('nodeName') == 'DIV'){
            list.slideToggle()
        }
        
    })
});