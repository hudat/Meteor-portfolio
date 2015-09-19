Template.mobileMenu.events({
    'click #up-button':function() {
        event.preventDefault();
        $("html, body").animate({
        scrollTop:0
      },"300");
    }
});
