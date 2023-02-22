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
var workProjects = ["Finish todo list project", "Complete chapter 24"];
var groceries = [];

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




//this list WORKS
app.get("/daily-tasks", function(req, res){
  res.render("daily-tasks",  {listTitle: "Daily Tasks", newListItems: workItems})
})


app.post("/daily-tasks", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/daily-tasks");
});



//work projects
app.get("/work-projects", function(req, res){
  res.render("work-projects", {listIdWork: "Work Projects", newListItems: workProjects})
})

app.post("/work-projects", function(req, res) {
  let item = req.body.newItem;
  workProjects.push(item);
  res.redirect("/work-projects");
});


//groceries
app.get("/groceries", function(req, res){
  res.render("groceries", {listIdGroceries: "Groceries", newListItems: groceries})
})

app.post("/groceries", function(req, res) {
  let item = req.body.newItem;
  groceries.push(item);
  res.redirect("/groceries");
});



//about
app.get("/about", function(req, res){
  res.render("about")
})



//styles
app.use(express.static(__dirname + '/public'));
//localHost
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
