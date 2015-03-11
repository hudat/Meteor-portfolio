Template.footer.rendered = function() {
  Session.set('menuActive', false);
}

Template.footer.helpers({
  'mobileMenu': function(){
    return Session.get('menuActive') ? 'show' : '';
  }
});


Template['footer'].events({
  'click .menu-toggle' : function () {
    Session.set('menuActive', !Session.get('menuActive'));
  }
});
