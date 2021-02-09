$(document).ready(function(){

    // Feat On
    setTimeout(function(){ $('#feat').addClass('on'); }, 100)
    setTimeout(function(){ $('body').addClass('on'); }, 500);

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

    // Consultancy
    $('#solutions section article span a').click(function(){
        $('#solutions section article').removeClass('on');
        $(this).parent().parent().parent().addClass('on');
        $('html, body').animate({scrollTop: $(this).parent().parent().parent().offset().top - 40}, 500);
        return false;
    })
        $('#solutions section article sub').click(function(){
            $(this).parent().parent().removeClass('on');
        })

    // Blocks
    $('#blocks section article sub .fa-plus').click(function(){
        $('#blocks section article').removeClass('on');
        $(this).parent().parent().parent().addClass('on');
    })
    $('#blocks section article sub .fa-minus').click(function(){
        $(this).parent().parent().parent().parent().removeClass('on');
    })

    // Footer Button
    $('#footer sub').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    })

    // Mailchimp
    $('.newsletter form').submit(function(e) {
        var $this = $(this);
        $.ajax({
            type: "GET", // GET & url for json slightly different
            url: "https://github.us14.list-manage.com/subscribe/post-json?u=eb72ce7809215f1e0d5bc17f8&amp;id=20ee699a22&c=?",
            data: $this.serialize(),
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) { alert("Could not connect to the registration server."); },
            success     : function(data) {
                if (data.result != "success") {
                    $('.newsletter small').show();
                    $('.newsletter form button').addClass('no').removeClass('ok').html('Try again');
                } else {
                    $('.newsletter form button').addClass('ok').removeClass('no').html('Subscribed');
                    $('.newsletter small').hide();
                }
            }
        });
        return false;
    });

    // Contact Form
    $("#contact form").submit(function(e) {
        $.ajax({
            type: "POST",
            url: "https://hooks.zapier.com/hooks/catch/4831344/op4grh7/",
            data: $("#contact form").serialize(),
            success: function(data) {
                if (data.status != "success") {
                    $('#contact form .bt').addClass('no').removeClass('ok').html('Error');
                } else {
                    $('#contact form .bt').addClass('ok').removeClass('no').html('Sent');
                    $('#contact form input').css('opacity', '.5').prop('readonly', true);
                    $('#contact form textarea').css('opacity', '.5').prop('readonly', true);
                    $('#contact form button').prop('readonly', true);
                }
            }
        });
        return false;
      });

    // RSS
    $("#news section").rss("https://www.theverge.com/rss/index.xml", {
        limit: 3,
        layoutTemplate: '{entries}',
        entryTemplate:'<article><figure>{teaserImage}</figure><figcaption><abbr>{date}</abbr><h4>{title}</h4><p>{shortBodyPlain}</p><span><a href="{url}" title="Read more" target="_blank">Read more</a></span></figcaption></article>'
    })

});