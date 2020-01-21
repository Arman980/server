var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");

});
app.get("/search", function(req, res){

    res.redirect('http://google.com/search?q=')
 
 });

app.get("/google", function(req, res){
    res.redirect('http://google.com')
 
 });
app.get("/name/:name/:surname", function(req, res){
    var name = req.params.name;
    var surname = req.params.surname;
    res.send("<h1>Hello " + name + ' surname is ' + surname + "</h1>");
   
 });
app.get("/*", function(req, res){
    res.send("Error 404");
 
 });


 
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
