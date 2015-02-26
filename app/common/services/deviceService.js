/**
 * Created by j.moran on 2/24/2015.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("deviceService",
                 deviceService);

    function deviceService (){
        function determineHouseDeviceCodeId(houseCodeId, deviceCodeId){
            return houseCodeId + deviceCodeId;
        }

        return {
            determineHouseDeviceCodeId: determineHouseDeviceCodeId
        }
    }

}());