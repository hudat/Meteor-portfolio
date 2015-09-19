Meteor.subscribe('cases');
Meteor.subscribe('case');

Template.portfolio.helpers({
  cases: function() {
    return Cases.find();
  }
})

Template.portfolio.rendered = function() {
  $('.mobile-menu').removeClass('hide');
  $('#menu-icon').removeClass('hide');
}
