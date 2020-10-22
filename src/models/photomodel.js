const mongoose=require('mongoose')
const{Schema, Mongoose}=mongoose

//model of time where time stamp type string is document
const photoSchema=new mongoose.Schema({
    photo:{type:String,required:true}
})

const Photomodel=mongoose.model("Photomodel",photoSchema);


module.exports= Photomodel;