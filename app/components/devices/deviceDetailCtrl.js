/**
 * Created by j.moran on 2/20/2015.
 */
(function () {
    "use strict";

    angular
        .module("smartHome")
        .controller("DeviceDetailCtrl",
                    [ "device",
                      "deviceService",
                      DeviceDetailCtrl]);

    function  DeviceDetailCtrl(device, deviceService) {
        var vm = this;
        vm.device = device;
        vm.title = "Device Detail: " + vm.device.deviceName;

        vm.device.houseDeviceCodeId = deviceService.determineHouseDeviceCodeId(vm.device.deviceHouseCodeId, vm.device.deviceCodeId);
    }

}());

