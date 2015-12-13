Template.lightswitch.events({

    'click #light':function() {

        var bounce = function() {
            $(this).animate({top: -40},"slow");
            $(this).animate({top: -0},"slow");
            $(this).animate({top: -70},"slow");
        }

        // var themeToggle = function() {
        //   $("body").fadeOut(30, function() {
        //    $("body").removeClass("light-theme");
        //    });
        //    $("body").fadeIn(0, function() {
        //      $("body").addClass("dark-theme");
        //    });
        //    $("#light").addClass("hide");
        //    $("#dark").removeClass("hide");
        //  }
        //
        //
        //
        //  setTimeout(function() {
        //    themeToggle();
        //  }, 1000);
        bounce();

      },

      'click #dark':function() {

          var bounce = function() {
            for (var i=1; i<=3; i++) {
              $(this).animate({top: 40},"fast");
              $(this).animate({top: 0},"fast");
            };
          }

          var themeToggle = function() {
            $("body").fadeOut(30, function() {
              $("body").removeClass("dark-theme");
            });
            $("body").fadeIn(0, function() {
              $("body").addClass("light-theme");
            });
            $("#dark").addClass("hide");
            $("#light").removeClass("hide");
          }

          bounce();

          setTimeout(function() {
            themeToggle();
          }, 250);

        }
  });
