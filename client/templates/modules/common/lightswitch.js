Template.lightswitch.events({
    'click #light':function() {
        $("body").fadeOut(30, function() {
              $("body").removeClass("light-theme");
        });
        $("body").fadeIn(0, function() {
          $("body").addClass("dark-theme");
        });
        $("#light").addClass("hide");
        $("#dark").removeClass("hide");
      },
      'click #dark':function() {
        $("body").fadeOut(30, function() {
          $("body").removeClass("dark-theme");
        });
        $("body").fadeIn(0, function() {
          $("body").addClass("light-theme");
        });
        $("#dark").addClass("hide");
        $("#light").removeClass("hide");
        }
});
