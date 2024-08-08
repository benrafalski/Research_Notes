$(document).ready(function(){
    // jQuery methods go here...


    // $
    // $(document).find('i.fa.fa-chevron-right').toggleClass('active');

    $(".list-content-container.inactive").find('.list-content-body').slideUp(5);
    $(".list-content-container.inactive").find('i.fa.fa-chevron-down').toggleClass('active');
    $(".list-content-title").click(function(){
        var list = $(this).next()

        console.log(list.attr('class'))
        
        if(list.attr('class') == 'list-content-body'){
            list.slideToggle()
        }
        $(this).find('i').toggleClass('active');
    })

});