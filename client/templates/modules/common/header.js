Template.header.events({
    'click #menu-button':function(e,tmpl) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#mobile-menu").offset().top
        }, 600);
     }
});
