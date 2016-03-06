Meteor.subscribe('author');

Template.sidebar.helpers({
  author: function() {
    return Author.find();
  }
})
