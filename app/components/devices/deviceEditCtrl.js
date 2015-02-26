/**
 * Created by j.moran on 2/20/2015.
 */
(function () {
    "use strict";
    angular
        .module("smartHome")
        .controller("DeviceEditCtrl",
        [ "device",
          "$state",
          DeviceEditCtrl]);

    function  DeviceEditCtrl(device, $state) {
        var vm = this;
        vm.device = device;

        if(vm.device && vm.device.deviceId) {
            vm.title = "Edit:" + vm.device.deviceName;
        }
        else {
            vm.title = "New Device";
        }

        vm.submit = function () {
            vm.device.$save(function (data){
                    toastr.success("Save Successful");
                }
            );
        }

        vm.cancel = function () {
            $state.go('deviceList');
        }


        /*        vm.open = function ($event) {
         $event.preventDefault();
         $event.stopPropagation();

         vm.opened = !vm.opened;
         };*/

    }
}());
