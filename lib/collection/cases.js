Cases = new Mongo.Collection('cases');

Cases.helpers({
  cases: function() {
      return Cases.find();
  }
});
