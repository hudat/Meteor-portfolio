Template.lightswitch.events({
    'click #light':function() {
        $("body").removeClass("light-theme");
        $("body").addClass("dark-theme");
        $("#light").addClass("hide");
        $("#dark").removeClass("hide");
      },
      'click #dark':function() {
          $("body").removeClass("dark-theme");
          $("body").addClass("light-theme");
          $("#dark").addClass("hide");
          $("#light").removeClass("hide");
        }
});
