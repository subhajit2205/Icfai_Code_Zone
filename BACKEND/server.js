const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

//ejs setup

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//css from public folder

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended:true}));

//data
// const user = {name : "nikita"}; 

// const posts = [

//     {title : "First Post", content : "aaaaaaa"},
//     {title : "Second post", content : "ttttttt"},
// ]; 

const user = [];

//route
app.get("/", (req,res)=>{
    res.render("index.ejs", {user});
});

app.get("/login", (req,res)=>{
    res.render("form.ejs");
});

app.post("/login", (req,res)=>{
    const {name} = req.body;
    const user = {name};
    res.render("index.ejs", {user});
});

 app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});