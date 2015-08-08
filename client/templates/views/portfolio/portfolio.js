Meteor.subscribe('cases');

Template.portfolio.helpers({
  cases: function() {
    return Cases.find();
  }
})
