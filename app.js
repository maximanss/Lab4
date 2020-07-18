const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/",function(req,res){
   res.render("index.html");
   //res.send("It works");
});

app.get("/mercury", function(req,res){
    res.render("mercury.html");
    //res.send("This will be Mercury web page!");
});

app.get("/venus", function(req,res){
    res.render("venus.html");
    //res.send("This will be Venus web page!");
    
});

app.get("/earth", function(req,res){
    res.render("earth.html");
    //res.send("This will be Earth web page!");
    
});

app.get("/mars", function(req,res){
    res.render("mars.html");
    //res.send("This will be Mars web page!");
    
});

app.listen("8080", "127.0.0.1", function() {
   console.log("express server is running");
});

//app.listen(process.env.PORT, process.env.IP, function(){
    //console.log("Running express server...");
//});