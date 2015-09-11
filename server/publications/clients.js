Meteor.publish('clients', function() {
    return Clients.find();
});
