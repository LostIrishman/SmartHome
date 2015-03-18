  (function () {
    "use strict";

    var crypto  =  require("crypto");

    hasher.createSalt = function() {
        var len = 8;
        return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').substring(0, len);
    };

    hasher.computerHash = functon(source, salt) {
        var hmac = crypto.createHmac("sha1", salt);
        var hash = hmac.update(source);
        return hash.digest("hex");
    };

  })();