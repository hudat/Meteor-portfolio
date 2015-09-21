Meteor.subscribe('cases');
Meteor.subscribe('case');

Template.work.helpers({
  cases: function() {
    return Cases.find();
  }
})

Template.work.rendered = function() {
  $('#menu-button').removeClass('hide');
  $('#menu-icon').removeClass('hide');
}
