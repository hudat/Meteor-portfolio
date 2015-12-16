Template.about.rendered = function() {
  $('#menu-button').removeClass('hide');
  $('#mobile-menu').removeClass('hide');
  $('.topnav').removeClass('hide');

  // avatar image
  if (window.location.href == "http://localhost:3000/about") {
    document.getElementById('about-avatar').removeAttribute("class");
    document.getElementById('writing-avatar').setAttribute("class", "hide");
    document.getElementById('reading-avatar').setAttribute("class", "hide");
    document.getElementById('root-avatar').setAttribute("class", "hide");
  };
}
