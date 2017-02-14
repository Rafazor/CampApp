var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
       {name : "Seara pe Deal" , image: "https://images7.alphacoders.com/717/thumb-350-717815.jpg"},
       {name : "Pe Meses" , image: "https://i.kinja-img.com/gawker-media/image/upload/s--ELrsBT8h--/c9pd8amxevnsn36ldwd5.jpg"},
       {name : "In Padure" , image: "https://s-media-cache-ak0.pinimg.com/originals/7c/71/f6/7c71f6afd8bc66365da4a3ce2e98005a.jpg"},
       {name : "Seara pe Deal" , image: "https://images7.alphacoders.com/717/thumb-350-717815.jpg"},
       {name : "Pe Meses" , image: "https://i.kinja-img.com/gawker-media/image/upload/s--ELrsBT8h--/c9pd8amxevnsn36ldwd5.jpg"},
       {name : "In Padure" , image: "https://s-media-cache-ak0.pinimg.com/originals/7c/71/f6/7c71f6afd8bc66365da4a3ce2e98005a.jpg"},
       {name : "Seara pe Deal" , image: "https://images7.alphacoders.com/717/thumb-350-717815.jpg"},
       {name : "Pe Meses" , image: "https://i.kinja-img.com/gawker-media/image/upload/s--ELrsBT8h--/c9pd8amxevnsn36ldwd5.jpg"},
       {name : "In Padure" , image: "https://s-media-cache-ak0.pinimg.com/originals/7c/71/f6/7c71f6afd8bc66365da4a3ce2e98005a.jpg"},
       
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