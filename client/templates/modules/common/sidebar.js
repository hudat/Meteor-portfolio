Meteor.subscribe('author');

Template.sidebar.helpers({
  author: function() {
    return Author.find();
  }
});

Template.sidebar.rendered = function() {
  $('.sidebar').removeClass('hide');
};
