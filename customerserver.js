var express=require('express');
var app=express();

var c=function(req,res)
{
	
	var customer=[
	{customer_id:1000,customer_name:"Nirbhay",Address:"Pune",Mobile_No:"5372845759"},
	{customer_id:1001,customer_name:"Adil",Address:"Allahabad",Mobile_No:"5352645759"},
	{customer_id:1002,customer_name:"Deepali",Address:"U.S.A",Mobile_No:"5372898559"},
	{customer_id:1003,customer_name:"Nilima",Address:"Kolhapur",Mobile_No:"5625845759"},
	{customer_id:1004,customer_name:"Prashant",Address:"Bhadohi",Mobile_No:"5372823559"},
];
	res.send(customer);
};

app.get('/customer',c);

var server=app.listen(8080,function()
{
   var host=server.address().address
   var port=server.address().port
   console.log("Myserver is listening at http://localhost:8080", host, port)
});