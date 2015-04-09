Meteor.publish('cases', function() {
  return Cases.find();
});
