$(function(){
    // All jQuery code goes here
    $('.dropdownMenu > li').hover(function() {
        //Mouseover
        $(this).children("ul").slideDown(100);

    }, function() {
        //Mouseout
        $(this).children("ul").slideUp(00);
    })
})

$(function(){
    $('.dropdownMenu > li').hover(function() {
        //Mouseover
        $(this).children("ul").slideToggle(200);
    })
})
