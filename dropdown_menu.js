$(function(){

    $("ul.dropdown li").hover(function(){
        $(this).children().children().show();   
    }, function(){
        $(this).children().children().hide();
    });

    $('.menu-item').click(function(event) {
        event.stopPropagation();
        alert(this.id);
    });
});