const express = require("express");		//accessing express
const bodyParser = require("body-parser");	// accessing body-parser, External node module

const app = express();		//we made an object called "app" by using express() class

app.use(bodyParser.urlencoded({extended:true}));	//this will fetch the data for POST method *(but in text format)

app.get("/", function(req, res){	//app which means our website will get the function we want, 
									//using "/" means, it will by default access the index.html file. 
	res.send("Hey there ;)");	// we are sending responce
});

app.get("/about", function(req, res){	//app which means our website will get the function we want, 
									//using "/about" means, it will access the about.html file. 
	res.send("welcome to about page ;)");	// we are sending responce
});

app.get("/calculator", function(req, res){	//accessing calculator page
// 	// console.log(__dirname);		//give the directory name
	res.sendFile(__dirname + "/index.html");	// we are sending the index.html file, concatinating the diractory name
												// to ensure to access the right file by using right path
});

app.post("/calculator", function(req, res){		//post method will work for calculator page
	// res.send("Thank u for your lovely post");

	console.log(req.body);	//to see the requested data

	let n1 = Number(req.body.v1);	//taking a variable n1 to hold the value of v1(name of first input in form) from requested data
	let n2 = Number(req.body.v2);	// same goes for n2. also we are changing it into number type from text type.

	let sum = n1 + n2;

	res.send("The sum of the two number is : "+sum);	//response

});

app.listen(5000, function(req, res){	// we are running the server by using app object, which will perform in port 3000.
	console.log("server is running at port no. 5000");
});