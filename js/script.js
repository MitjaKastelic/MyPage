$(document).ready(function(){
    /* skrbi za prikaz slike v novem oknu*/
    $('a.grouped_elements').fancybox();
    
    $('.more').click(function(){
        console.log("klik");
        $(this).css('background-color', 'red');;    
    });
    
});

