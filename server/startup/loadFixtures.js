function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  if (Quotes.find().count() === 0) {
    loadFixture(Fixtures['quotes'], Quotes);
  }

  if (Cases.find().count() === 0) {
  loadFixture(Fixtures['cases'], Cases);
  }

  if (Posts.find().count() === 0) {
  loadFixture(Fixtures['posts'], Posts);
  }

  if (Books.find().count() === 0) {
  loadFixture(Fixtures['books'], Books);
  }

  if (Reviews.find().count() === 0) {
  loadFixture(Fixtures['reviews'], Reviews);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['clients'], Clients);
  }
});
