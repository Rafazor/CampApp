var express     = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp"); // conecteaza baza de date

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create( {name : "Pe Meses" , 
//                     image: "https://i.kinja-img.com/gawker-media/image/upload/s--ELrsBT8h--/c9pd8amxevnsn36ldwd5.jpg"
    
// }, function(err, campground){
//   if(err)
//     console.log(err)
//     else
//     console.log("Capm:")
//     console.log(campground)
// });


app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
  
  Campground.find({}, function(err, allCampgrounds){
    if (err) {
        console.log(err);
    } else {
        // afiseaza toate campgrounds
        res.render("campgrounds", {campgrounds: allCampgrounds}); 
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req,res){
       var name = req.body.name;
       var image = req.body.image;
       var newCampground = {name: name, image: image};
       //Creaza un nou campground si in salveaza in DB
        Campground.create(newCampground, function(err, newlyCreated){
           if (err) {
               console.log(err);
           } else {
               //Redirect pe /campgrounds
                res.redirect("/campgrounds");
           }
        });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!")
})