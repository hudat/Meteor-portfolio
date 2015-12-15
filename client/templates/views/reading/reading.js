Template.reading.rendered = function() {
    $('#menu-button').removeClass('hide');
    $('#mobile-menu').removeClass('hide');
    $('.topnav').removeClass('hide');

    // Avatar image
    if (window.location.href == "http://localhost:3000/reading") {
      document.getElementById('reading-avatar').removeAttribute("class");
    };
}
