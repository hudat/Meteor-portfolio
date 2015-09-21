Meteor.subscribe('cases');
Meteor.subscribe('case');

Template.portfolio.helpers({
  cases: function() {
    return Cases.find();
  }
})
