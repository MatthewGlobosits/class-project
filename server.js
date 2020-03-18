var express = require("express");
var path = require("path");


var app = express()
var PORT = 3000;

app.listen(PORT, function(){
    console.log("heyo app is listening " + PORT);
});


var reservation = [{  
customerName: "Matthew Globosits",
phoneNumber: "1234567890",
customerEmail: "matthewglobosits@yahoo.com",
customerID: "42424231"
}];

var waitlist = [];
var cats = {
    name: "paul",
    number:123143
}

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables",function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve",function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});
 
app.get("/api/tables",function(req, res){
    res.json(reservation)
})

app.get("/beverly",function(reqest,response){
    response.json(cats)
})