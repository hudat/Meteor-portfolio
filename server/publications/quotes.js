Meteor.publish('quotes', function() {
  return Quotes.find();
});
