Template.footer.rendered = function() {
  Session.set('menuActive', false);
}

Template.footer.helpers({
  'activeClass': function(){
    return Session.get('menuActive') ? 'show-menu' : '';
  }
});


Template['footer'].events({
  'click .menu-toggle' : function () {
    Session.set('menuActive', !Session.get('menuActive'));
  }
});
