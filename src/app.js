const express = require("express");
const path = require("path");
require("./db/conn");
const User=require("./models/usermsg");

const app=express();
const hbs= require("hbs");
const port=process.env.PORT || 3000;

//setting the templates 
const static_path=path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partials_path =path.join(__dirname,"../templates/partials");

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

//to get data in readable format
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//set the views
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.post("/contact",async(req,res)=>{
  try{
   //res.send(req.body);
   const userData=new User(req.body);
   await userData.save();
   res.status(201).render("index");
  }catch(error){
    res.status(500).send(error);
  }
})
//server creation
app.listen(port,()=>{
  console.log(`Listening to server at ${port}`)
})