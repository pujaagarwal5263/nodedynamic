const mongoose = require("mongoose");
const validator=require("validator");

//we need a schema
const userSchema = mongoose.Schema({
  name:{
      type:String,
      required:true,
      minLength:3
  },
  email:{
      type:String,
      required:true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error("Invalid Email");
          }
      }
  },
  phone:{
    type:String,
    required:true,
    min:10,
    max:15
},
message:{
    type:String,
    required:true,
    minLength:5
},
});

//we need a collection
const User=mongoose.model("User",userSchema);

module.exports=User;