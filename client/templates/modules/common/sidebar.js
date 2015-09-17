Template.sidebar.events({
    'click .logo': function() {
        //Session.set('menuToggle', !Session.get('menuToggle'));
        $('.ui.sidebar').sidebar('toggle');
    }
});