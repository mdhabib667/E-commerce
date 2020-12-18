const express=require("express");
const bodyparser =require("body-parser");
const ejs = require("ejs");
const mongoose= require("mongoose");
//const products = require("./productdb")
const app=express();
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/productdb", {useNewUrlParser: true,useUnifiedTopology: true});
const productSchema={
    productname: String,
    catagory: String,
    discription: String,
    price:String
}
const product = mongoose.model("product", productSchema);

app.set("view engine","ejs");

app.get("/",function(req,res){
    product.find({}, function(err, products){

        res.render("home",{products:products});
        })
})
app.get("/product",function(req,res){
    product.find({}, function(err, products){

    res.render("product",{products:products});
    })
})

app.listen(5000,function(){
    console.log("port is working");
})