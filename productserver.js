var express=require("express");
var app=express();

var p=function(req,res)
{
	
	var product=[
	{product_id:200,product_name:"Hair Oil",Quantity:23},
	{product_id:265,product_name:"Soap",Quantity:56},
	{product_id:560,product_name:"Tooth Paste",Quantity:97},
	{product_id:658,product_name:"Saving Cream",Quantity:21},
];
	res.send(product);
};

app.get('/product',p);

var server=app.listen(8080,function()
{
   var host=server.address().address
   var port=server.address().port
   console.log("Myserver is listening at http://localhost:8080", host, port)

});
