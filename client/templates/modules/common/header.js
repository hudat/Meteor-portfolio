Template.header.events({
    'click #menu-button':function(e,tmpl) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#mobile-menu").offset().top
        }, 600);
     },
     'click #light-m':function() {
         $("body").fadeOut(30, function() {
         $("body").removeClass("light-theme");
         });
         $("body").fadeIn(0, function() {
           $("body").addClass("dark-theme");
         });
         $("#light-m").addClass("hide");
         $("#dark-m").removeClass("hide");
       },
       'click #dark-m':function() {
         $("body").fadeOut(30, function() {
           $("body").removeClass("dark-theme");
         });
         $("body").fadeIn(0, function() {
           $("body").addClass("light-theme");
         });
         $("#dark-m").addClass("hide");
         $("#light-m").removeClass("hide");
         }
});
