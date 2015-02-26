/**
 * Created by j.moran on 2/25/2015.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("deviceStateChangeService",
                ["$resource",
                deviceStateChangeService]);

    function deviceStateChangeService ($resource){
        function changeDeviceState(){
            alert("called webservice put");
            return $resource("/api/devices/:deviceId")
        }
        return{
            changeDeviceState:changeDeviceState
        }
    }

}());