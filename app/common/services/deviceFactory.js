/**
 * Created by j.moran on 2/19/2015.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("deviceFactory",
                ["$resource",
                deviceFactory]);

    function deviceFactory ($resource){
        return $resource("/api/devices/:deviceId")
    }

}());