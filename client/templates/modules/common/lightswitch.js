Template.lightswitch.events({

    'click #light':function() {

        var themeToggle = function() {
          $("body").fadeOut(30, function() {
           $("body").removeClass("light-theme");
           });
           $("body").fadeIn(0, function() {
             $("body").addClass("dark-theme");
           });
           $("#light").addClass("hide");
           $("#dark").removeClass("hide");
         }

         setTimeout(function() {
           themeToggle();
         }, 250);

      },

      'click #dark':function() {

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


          setTimeout(function() {
            themeToggle();
          }, 250);

        }
  });
