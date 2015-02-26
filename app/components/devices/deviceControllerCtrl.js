/**
 * Created by j.moran on 2/24/2015.
 */
(function () {
    "use strict";
    angular
        .module("smartHome")
        .controller("DeviceControllerCtrl",
                    ["deviceFactory",
                     "deviceStateChangeService",
                     DeviceControllerCtrl]);

    function  DeviceControllerCtrl(deviceFactory, deviceStateChangeService) {
        var vm = this;

        deviceFactory.query(function(data){
            vm.devices = data;
        });

        vm.showImage = false;
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };


        vm.toggleDeviceState = function(selectedDevice) {
/*            alert(selectedDevice.deviceId);*/
            if (selectedDevice.deviceState == 'OFF')
            {
                selectedDevice.deviceState = 'ON';
            }
            else
            {
                selectedDevice.deviceState = 'OFF';
            }
            deviceStateChangeService.changeDeviceState();
        };
    }
}());
