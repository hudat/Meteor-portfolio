Template.header.events({
  'click .menu-button': function() {
    var mobileMenu = document.getElementById('#mobile-menu');
    mobileMenu.scrollIntoView();
  },
  'click .logo': function() {
      //Session.set('menuToggle', !Session.get('menuToggle'));
      $('.ui.sidebar').sidebar('toggle');
      }
});
