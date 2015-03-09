Template.footer.rendered = function() {
  Session.set('menuActive', false);
  Sesson.set('mobileGiveaway', false);
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

Template.footer.helpers({
  'mobileGiveaway': function(){
    return Session.get('mobileGiveaway') ? 'show' : '';
  }
});


Template['footer'].events({
  'click .gift' : function () {
    Session.set('mobileGiveaway', !Session.get('mobileGiveaway'));
  }
});
