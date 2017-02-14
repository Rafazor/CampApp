var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
   var campgrounds = [
       {name : "Seara pe Deal" , image: "http://www.photosforclass.com/download/4684194306"},
       {name : "Pe Meses" , image: "http://www.photosforclass.com/download/2602356334"},
       {name : "In Padure" , image: "http://www.photosforclass.com/download/2069978635"},
    ]
   res.render("campgrounds", {campgrounds: campgrounds}); 
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!")
})