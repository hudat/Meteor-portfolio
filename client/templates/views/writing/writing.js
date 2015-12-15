Template.writing.rendered = function() {
  $('#menu-button').removeClass('hide');
  $('#mobile-menu').removeClass('hide');
  $('.topnav').removeClass('hide');

  // Avatar image
  // Avatar image
  if (window.location.href == "http://localhost:3000/writing") {
    document.getElementById('writing-avatar').removeAttribute("class");
  };
}
