Meteor.subscribe('books');

Template.book.helpers({
  books: function() {
    return Books.find();
  }
})
