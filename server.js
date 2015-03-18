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
var bodyParser = require('body-parser');
/*var multer = require('multer');*/


//Opt into services
/*app.use(express.urlencoded());
app.use(express.cookieParser());*/


app.use(bodyParser.json()); // for parsing application/json
/*app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.session({secret: "test"}));
app.use(flash());*/

/*app.use(multer());*/   // for parsing multipart/form-data


//Set the public static resource folder
app.use(express.static(__dirname));


//Use Authentication
var auth = require("./auth");
auth.init(app);


// Manage routes
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


app.get ("/api/users", function(req,res){
    res.set("Content-Type", "application/json");
    res.send({title:"test", message:"Hi"});
});


app.post('/api/test', function(req, res) {
/*    var username = req.body.username;*/
    var username = 'test';
    console.log("post received: %s", username);
    console.log(req.body);
});


app.post("/api/devices:deviceId", function (req, res){

    var deviceName = req.params.deviceName;

/*    var deviceToInsert = {
        "deviceId":5,
        "deviceName": "Device5",
        "deviceHouseCodeId":"B",
        "deviceCodeId": "2",
        "deviceLocation":"Kitchen",
        "deviceState": "OFF",
        "deviceImagePath":"app/images/house.jpg"
    };*/

    var deviceToInsert = {
        "deviceId":req.body.deviceId,
        "deviceName": req.body.deviceName,
        "deviceHouseCodeId":req.body.deviceHouseCodeId,
        "deviceCodeId": req.body.deviceCodeId,
        "deviceLocation": req.body.deviceLocation,
        "deviceState": req.body.deviceState,
        "deviceImagePath": req.body.deviceImagePath
    };

/*    data.addDevice(deviceName, deviceToInsert, function (err){
        if(err) {
            res.send(400, "Failed to Add device to db");
        } else {*/

    //Tue, 17 Mar 2015 20:08:01 GMT express deprecated res.send(status, body): Use res.status(status).send(body) instead at server.js:128:17
            res.set("Content-Type", "application/json");
            res.send(201, deviceToInsert);
/*        }
    });*/
});


/*app.engine(".html", require)*/




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



var server = http.createServer(app);
server.listen(3000);
