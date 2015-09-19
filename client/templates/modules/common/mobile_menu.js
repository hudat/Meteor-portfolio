Template.mobile_menu.events({
    'click #up-button':function(e,tmpl) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#mobile-menu").offset().top
        }, 600);
     }
});
