var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
       {name : "Seara pe Deal" , image: "http://www.photosforclass.com/download/4684194306"},
       {name : "Pe Meses" , image: "http://www.photosforclass.com/download/2602356334"},
       {name : "In Padure" , image: "http://www.photosforclass.com/download/2069978635"},
    ];
    
app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
  
   res.render("campgrounds", {campgrounds: campgrounds}); 
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})
app.post("/campgrounds", function(req,res){
       var name = req.body.name;
       var image = req.body.image;
       var newCampground = {name: name, image: image};
       
       campgrounds.push(newCampground);
       res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!")
})