Meteor.publish('readinglog', function() {
  return Readinglog.find();
});
