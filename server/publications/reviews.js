Meteor.publish('reviews', function() {
  return Reviews.find();
});
