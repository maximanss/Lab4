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
    res.send("This will be Mercury web page!");
});

app.get("/venus", function(req,res){
    res.send("This will be Venus web page!");
});

//app.listen("8080", "127.0.0.1", function() {
//    console.log("express server is running");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running express server...");
});