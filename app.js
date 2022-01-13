const express=require('express');
const bodyParser=require('body-parser');
const res = require('express/lib/response');
const app= express();

var item=[];

app.use(bodyParser.urlencoded({extended:'False'}));

app.set('view engine','ejs');

app.get('/', (req,res)=>{

    var today = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    var date = today.toLocaleDateString("en-US", options);

    res.render("list", {date:date ,item:item});


   
});

app.post("/", (req,res)=>{
    item.push(req.body.itm);
    res.redirect('/')
});












app.listen('3000', function(req,res){

    console.log('Server Started on 3000');



})