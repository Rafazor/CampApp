var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
        {
            name: "Zalau",
            image: "http://cdn.grindtv.com/uploads/2015/02/shutterstock_242371765.jpg",
            description: "bla blaaa bluuuu"
        },
        {
            name: "Hereclean",
            image: "https://s-media-cache-ak0.pinimg.com/originals/4f/b0/ab/4fb0abe3bad560a0e32d62b78dcf7f34.jpg",
            description: "dasda dasdasd dasdasda"
        },
        {
            name: "Cluj",
            image: "http://travelchannel.sndimg.com/content/dam/images/travel/fullrights/2016/01/14/national-park-camping/camping-voyageurs-national-park-tent.jpg.rend.tccom.1280.960.jpeg",
            description: "dsdas asdas dsdasda"
        }
    ];
    
function seedDb() {
    // Sterge tot din baza de date
   Campground.remove({} , function(err){
   if(err){
     console.log(err);
   } 
   console.log("Remove!");
    // adauga Campground
    data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
          if(err){
              console.log(err);
          } else {
              console.log("add campground!");
              //comentarii
              Comment.create(
                  {
                        text: "OMG OMG OMG!",
                        author: "Rafa"
                  }, function(err, comment){
                      if(err){
                          console.log(err);
                      } else{
                          campground.comments.push(comment);
                          campground.save();
                          console.log("Comentariu adaugat!");
                      }
                  });
          }
       }); 
    });
}); 
   
}

module.exports = seedDb;