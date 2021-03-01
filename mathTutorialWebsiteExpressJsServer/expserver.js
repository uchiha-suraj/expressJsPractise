const express = require("express");		//accessing express
const path = require("path");	//accessing path core module

const app = express();		//we made an object called "app" by using express() class

const staticPath = path.join(__dirname, "/public");		//we are joning two path and storing it into staticPath variable,
														//__dirname (absolute path of this file) connecting with public folder

app.use(express.static(staticPath));   //express.static => builtin middleware, used to run static website

app.listen(5000, function(req, res){	// we are running the server by using app object, which will perform in port 3000.
	console.log("server is running at port no. 5000");
}); 