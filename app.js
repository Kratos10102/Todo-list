//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//this requires the date.js**
const date = require(__dirname + "/date.js");
const todayDate = date.getDate();
const ejs = require('ejs');



const app = express()
var items = [];
var item = "";
var workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


//homepage we land on
app.get("/", function(req, res){
//this uses the date.js**
let day = date.getDate();
  //sending the server (result)
  res.render("list", {listTitle: todayDate, newListItems: items});
});
//homepage we land on



//this sends post request when submitting form
app.post("/", function(req, res){
  item = req.body.newItem;
  if (req.body.list === "Work" ){
   workItems.push(item)
   res.redirect("/work")
 } else {
   items.push(item);
   res.redirect("/");
 }

});

app.get("/work", function(req, res){

  res.render("list",  {listTitle: "Work list", newListItems: workItems})
})


app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);

});

app.get("/daily-tasks", function(req, res){
  res.render("daily-tasks")
})

app.get("/work-projects", function(req, res){
  res.render("work-projects")
})

app.get("/groceries", function(req, res){
  res.render("groceries")
})

app.get("/about", function(req, res){
  res.render("about")
})



//styles
app.use(express.static(__dirname + '/public'));
//localHost
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
