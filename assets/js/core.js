$(document).ready(function(){

    // Feat On
    setTimeout(function(){ $('#feat').addClass('on'); }, 50)

    // Menu
    $('#feat span').click(function(){
        $(this).toggleClass('on')
        $('#menu').toggleClass('on')
    })
    
    // Feat button
    $('#feat sub').click(function(){
        $('html, body').animate({scrollTop: $(window).height()}, 1000);
    })

    // Faq
    $('#faq section article').click(function(){
        if($(this).find('span').is(':visible')){
            $(this).find('span').slideUp();
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            $(this).find('span').slideDown();
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        }
    })

    // Footer Button
    $('#footer sub').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    })

});