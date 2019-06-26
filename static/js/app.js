$(document).on('click','#menu-toggle', function() { 
    $('body').toggleClass('nav-opened');
});

$(document).on('click', ".menu-item-has-children > a", t => {
    $parent = $(t.target).parent();
    $(t.target).hasClass('expand-toggle') && (t.preventDefault(), $parent.hasClass("opened") ? $parent.removeClass("opened") : ($(".menu-item-has-children > a").removeClass("opened"), $parent.addClass("opened")));
});

