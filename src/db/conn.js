const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/webdynamic",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Database Connection Successful");
}).catch((error)=>{
    console.log(error);
})