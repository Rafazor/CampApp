var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campgrounds"),
    seedDb     = require("./seeds");

seedDb();
mongoose.connect("mongodb://localhost/yelp_camp"); // conecteaza baza de date

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
  
  Campground.find({}, function(err, allCampgrounds){
    if (err) {
        console.log(err);
    } else {
        // afiseaza toate campgrounds
        res.render("index", {campgrounds: allCampgrounds}); 
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req,res){
       var name = req.body.name;
       var image = req.body.image;
       var desc = req.body.description;
       
       var newCampground = {name: name, image: image, description: desc};
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

//Show - shows more info
app.get("/campgrounds/:id", function(req, res) {
    //gaseste Campgrounds dupa id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err)
            console.log(err);
        else{
            console.log(foundCampground);
            //trimite campground care corespunde la id
            res.render("show", {campground: foundCampground}); 
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!")
})