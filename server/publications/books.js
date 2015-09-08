Meteor.publish('books', function() {
  return Books.find();
});
