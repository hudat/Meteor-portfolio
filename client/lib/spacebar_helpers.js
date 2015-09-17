Template.registerHelper('menuToggle', function () {
    return Session.get('menuToggle') ? 'toggle' : '';
});