var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
       {name : "Seara pe Deal" , image: "https://www.pexels.com/photo/group-of-people-camping-on-forest-during-daytime-198979"},
       {name : "Pe Meses" , image: "https://www.pexels.com/photo/teal-and-yellow-dome-tent-on-peach-leveled-with-clouds-near-mountain-under-daytime-192518"},
       {name : "In Padure" , image: "https://www.pexels.com/photo/camping-outdoor-tent-hiking-25540"},
    ];
    
app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
  
   res.render("campgrounds", {campgrounds: campgrounds}); 
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

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