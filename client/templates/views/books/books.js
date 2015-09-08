Meteor.subscribe('books');

Template.books.helpers({
  books: function() {
    return Books.find();
  }
})
