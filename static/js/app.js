jQuery(document).on('click','#menu-toggle', function() { 
    jQuery('body').toggleClass('nav-opened');
});

jQuery(document).on('click', ".menu-item-has-children > a", t => {
    $parent = jQuery(t.target).parent();
    jQuery(t.target).hasClass('expand-toggle') && (t.preventDefault(), $parent.hasClass("opened") ? $parent.removeClass("opened") : (jQuery(".menu-item-has-children > a").removeClass("opened"), $parent.addClass("opened")));
});


