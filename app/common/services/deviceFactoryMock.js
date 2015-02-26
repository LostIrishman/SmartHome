/**
 * Created by j.moran on 2/19/2015.
 */
(function () {
    "use strict";

    var app = angular
                .module("deviceFactoryMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var devices = [
             {
                 "deviceId":1,
                 "deviceName": "Device1",
                 "deviceHouseCodeId":"A",
                 "deviceCodeId": "1",
                 "deviceLocation":"Outside",
                 "deviceState": "ON",
                 "deviceImagePath":"app/images/house.jpg"
             },
             {
                 "deviceId":2,
                 "deviceName": "Device2",
                 "deviceHouseCodeId":"A",
                 "deviceCodeId": "2",
                 "deviceLocation":"Living Room",
                 "deviceState": "OFF",
                 "deviceImagePath":"app/images/house.jpg"
             },
             {
                 "deviceId":3,
                 "deviceName": "Device3",
                 "deviceHouseCodeId":"B",
                 "deviceCodeId": "1",
                 "deviceLocation":"Outside",
                 "deviceState": "ON",
                 "deviceImagePath":"app/images/house.jpg"
             },
             {
                 "deviceId":4,
                 "deviceName": "Device4",
                 "deviceHouseCodeId":"B",
                 "deviceCodeId": "2",
                 "deviceLocation":"Kitchen",
                 "deviceState": "OFF",
                 "deviceImagePath":"app/images/house.jpg"
             }
        ];

        var deviceUrl = "/api/devices"
        $httpBackend.whenGET(deviceUrl).respond(devices);

        var editingRegexp = new RegExp(deviceUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegexp).respond(function (method, url, data) {
            var device = {"deviceId": 0};
            var parameters = url.split('/');
            var length =  parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < devices.length; i++) {
                    if (devices[i].deviceId == id) {
                        device = devices[i];
                        break;
                    }
                };
            }
            return[200, device, {}];
        });

        $httpBackend.whenPOST(deviceUrl).respond(function (method, url, data) {
            var device = angular.fromJson(data);

            if (!device.id) {
                device.deviceId = devices[devices.length - 1].deviceId + 1;
                devices.push(device);
            }
            else {
                for (var i = 0; i < devices.length; i++) {
                    if (devices[i].deviceId == device.deviceId) {
                        devices[i]= device;
                        break;
                    }
                } ;
            }
            return[200, device, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();

    })
}());
