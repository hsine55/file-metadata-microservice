
var path = require('path');
var express = require('express');
var upload = require("multer")();

var app = express();

app.use(express.static("public"));

app.post("/fileanalyse/", upload.any(), function (req, res) {
    console.log(req.files[0]);
    console.log("here")
    var responseData = {"size":req.files[0].size} ;
	res.send(responseData);
});

app.listen(process.env.PORT);


