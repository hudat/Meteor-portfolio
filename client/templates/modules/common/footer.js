Template.footer.helpers({
  currentYear: function() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
  },
  footer: function() {
    return Footer.find();
  }
});
