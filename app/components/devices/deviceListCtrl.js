/**
 * Created by j.moran on 2/19/2015.
 */
(function () {
    "use strict";
    angular
        .module("smartHome")
        .controller("DeviceListCtrl",
                    ["deviceFactory",
                      DeviceListCtrl]);

    function  DeviceListCtrl(deviceFactory) {
        var vm = this;

        deviceFactory.query(function(data){
            vm.devices = data;
        });

        vm.showImage = false;
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };
    }
}());
