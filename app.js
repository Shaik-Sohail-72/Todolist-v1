const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const date=require(__dirname+"/date.js");
app.use(express.static("public"))
const items=["Buy Milk","Buy Food","Buy Something"];
const workitems=["something"];
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")



app.get("/",function(req,res)
{
    const day=date.getDate();
    res.render("list",{listtitle:day,newlistitems:items});
});
app.post("/",function(req,res){
    const item=req.body.newitem;
    if (req.body.list==="Work")
    {
        workitems.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }
});
app.get("/work",function(req,res)
{
    res.render("list",{listtitle:"Work List",newlistitems:workitems});
});
app.get("/about",function(req,res)
{
    res.render("about");
});

app.listen(3000,function(){
    console.log("server running on port number 3000");
});