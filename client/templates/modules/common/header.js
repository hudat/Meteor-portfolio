Template.header.events({
    'click #menu-button':function(e,tmpl) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#mobile-menu").offset().top
        }, 600);
     },
  'click .logo': function() {
      //Session.set('menuToggle', !Session.get('menuToggle'));
      $('.ui.sidebar').sidebar('toggle');
      }
});
