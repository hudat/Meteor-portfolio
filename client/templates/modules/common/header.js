Template['header'].helpers({
  animateClass: function () {
    return Session.get('menuActive') ? 'fadeIn' : 'fadeOut';
  },
  cases: function () {
    return Cases.find();
  }
});
