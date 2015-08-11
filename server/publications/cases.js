Meteor.publish('cases', function() {
  return Cases.find();
});

Meteor.publish('case', function(slug){
  check(slug, String);
  var data = Cases.find({"slug": slug});
  if (data) {
    return data;
  }
  this.ready();
});
