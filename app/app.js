// Declare app level module which depends on views, and components
(function () {
    "use strict";
    var app = angular.module("smartHome",
                             ["common.services",
                              "ui.router",
                              "ui.mask",
                              "ui.bootstrap",
                              "ngMessages",
                              "satellizer"]);

    app.config(function ($provide){
        $provide.decorator("$exceptionHandler",
        ["$delegate",
        function ($delegate){
            return function (exception, cause){
                exception.message = "An error occurred :" + exception.message;
                $delegate(exception, cause);
                alert(exception.message);
            };
        }]);
    });

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider){
                    $urlRouterProvider.otherwise("/");

                    $stateProvider
                        //welcome
                        .state("home", {
                            url: "/",
                            templateUrl: "app/welcomeView.html"
                        })
                        //control devices
                        .state("deviceController", {
                            url: "/controlDevices",
                            templateUrl: "app/components/devices/deviceControllerView.html",
                            controller: "DeviceControllerCtrl as vm"
                        })
                        //devices
                        .state("deviceList", {
                            url: "/devices",
                            templateUrl: "app/components/devices/deviceListView.html",
                            controller: "DeviceListCtrl as vm"
                        })
                        //device edit
                        .state("deviceDetail", {
                            url: "/devices/:deviceId",
                            templateUrl: "app/components/devices/deviceDetailView.html",
                            controller: "DeviceDetailCtrl as vm",
                            resolve: {
                                deviceFactory: "deviceFactory",

                                device: function (deviceFactory,$stateParams){
                                    var deviceId = $stateParams.deviceId;
                                    return deviceFactory.get({deviceId: deviceId}).$promise;
                                }
                            }
                        })
                        .state("deviceEdit", {
                            abstract: true,
                            url: "/devices/edit/:deviceId",
                            templateUrl: "app/components/devices/deviceEditView.html",
                            controller: "DeviceEditCtrl as vm",
                            resolve: {
                                deviceFactory: "deviceFactory",

                                device: function (deviceFactory, $stateParams){
                                    var deviceId = $stateParams.deviceId;
                                    return deviceFactory.get({deviceId: deviceId}).$promise;
                                }
                            }
                        })
                        .state("deviceEdit.info", {
                            url: "/info",
                            templateUrl: "app/components/devices/deviceEditInfoView.html"
                        })
                    }]
    );
} ());
