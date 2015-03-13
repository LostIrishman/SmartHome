/**
 * Created by j.moran on 2/26/2015.
 */
console.log("Node Server Started");

/*var http = require("http node web server");
var server = http.createServer(function(req,res){
    res.write("<html><body><h2>test</h2></body></html>");
    res.end();
});
server.listen(3000);*/


var http = require("http");
var express = require('express');
var app = express();

app.use(express.static(__dirname));
var server = http.createServer(app);
server.listen(3000);

app.get ("/", function(req,res){

   res.render("home", {title:"", message:"Hi"});
});



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


app.get ("/api/devices", function(req,res){
    res.status(200);
    res.set("Content-Type", "application/json");
    res.send(devices);
});



/*app.post ("/api/devices:deviceId", function(req, res){
    var device = angular.fromJson(req);

    if (!device.id) {
        device.deviceId = devices[devices.length - 1].deviceId + 1;

*//*        Add Device
        devices.push(device);*//*
    }
    else {
*//*        Edit Device
        for (var i = 0; i < devices.length; i++) {
            if (devices[i].deviceId == device.deviceId) {
                devices[i]= device;
                break;
            }
        } ;*//*
    }
    return[200, device, {}];
});*/



/*var mongoose = require('mongoose');
mongoose.connect(config.db, config.MongoOptions);
*/

