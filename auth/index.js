  (function () {
    "use strict";

    var data = require("../data");
    var hasher = require("./hasher");

    var passport =require("passport");

/*      http://passportjs.org/guide/google/*/

    auth.init = function (app) {
/*      app.get("/register", function (req, res){
          res.render("register", )
      }); */

        app.post("/register", function (req, res) {
           var salt = hasher.createSalt();

           var user = {
               name: req.body.name,
               email: req.body.email,
               username: req.body.username,
               passwordHash: hasher.computerHash(req.body.password, salt),
               salt: salt
            };
        });
    };

  })();