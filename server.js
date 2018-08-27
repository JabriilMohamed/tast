var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'jabriil',
		password : 'jabriil1',
		database : 'databaseapi',
	});
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

	
app.get('/',function(req,res){
	var data = {
		
	};
	data["Data"] = "Welcome to GET & POST request Demo..";
	res.json(data);
});

app.get('/products',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from products",function(err, rows, next){
		if(rows.length != 0){
			data["products"] = rows;
			res.json(data);
		}else{
			data["products"] = 'No data Found..';
			res.json(data);
		}
	});
});


app.get('/travel',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from travel",function(err, rows, next){
		if(rows.length != 0){
			data["travel"] = rows;
			res.json(data);
		}else{
			data["travel"] = 'No data Found..';
			res.json(data);
		}
	});
});



app.get('/department',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from department",function(err, rows, next){
		if(rows.length != 0){
			data["department"] = rows;
			res.json(data);
		}else{
			data["department"] = 'No data Found..';
			res.json(data);
		}
	});
});

app.get('/hotel/detail/:id',function(req,res){
	var data = {
			
	};
	
	connection.query("SELECT * from linkaddress",function(err, departments, fields){
		if(departments.length != 0){
			// console.log(departments);
			   const data = [];

			   connection.query("SELECT * from link where imgs_id ='" + req.params.id + "'",function(err, results, fields){
				if(departments.length != 0){
					// console.log(results);
					//  data["url"] = departments;
					
					for (let i = 0; i < departments.length; i++) {
						const department = departments[i];
						department.url = results[i];
						data.push(department);
					}

					// departments.forEach(department => {
					// 	console.log("department", department);
					// 	results.forEach(result => {
					// 		console.log("result", result);
					// 		department.department = result;
							
					// 	});
					// });
					// console.log("departments",departments.length);
					// console.log("results",results.length);
					res.json(data);
				}else{
					data["url"] = 'No data Found..';
					res.json(data);
				}
			});
			
		}else{
			data["url"] = 'No data Found..';
			res.json(data);
		}
	});
});



app.get('/department/find/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from department where id ='" + req.params.id + "'",function(err, rows, fields){
		if(rows.length != 0){
			data["department"] = rows;
			res.json(data);
		}else{
			data["department"] = 'No data Found..';
			res.json(data);
		}
	});
});

app.get('/department/travel/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from department where travel_id ='" + req.params.id + "'",function(err, rows, fields){
		if(rows.length != 0){
			data["department"] = rows;
			res.json(data);
		}else{
			data["department"] = 'No data Found..';
			res.json(data);
		}
	});
});


app.get('/hotels/rooms/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from rooms where pro_id ='" + req.params.id + "'",function(err, rows, fields){
		if(rows.length != 0){
			data["rooms"] = rows;
			res.json(data);
		}else{
			data["rooms"] = 'No data Found..';
			res.json(data);
		}
	});
});


app.get('/department/travel/rating/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from department where travel_id ='" + req.params.id + "' ORDER BY DRating desc",function(err, rows, fields){
		if(rows.length != 0){
			data["department"] = rows;
			res.json(data);
		}else{
			data["department"] = 'No data Found..';
			res.json(data);
		}
	});
});


app.get('/department/travel/rate/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from department where travel_id ='" + req.params.id + "' ORDER BY DRating desc",function(err, rows, fields){
		if(rows.length != 0){
			data["department"] = rows;
			res.json(data);
		}else{
			data["department"] = 'No data Found..';
			res.json(data);
		}
	});
});



app.get('/department/travel/males/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from department where travel_id ='" + req.params.id + "' ORDER BY DMales asc",function(err, rows, fields){
		if(rows.length != 0){
			data["department"] = rows;
			res.json(data);
		}else{
			data["department"] = 'No data Found..';
			res.json(data);
		}
	});
});


app.get('/products/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from products where id ='" + req.params.id + "'",function(err, rows, fields){
		if(rows.length != 0){
			data["products"] = rows;
			res.json(data);
		}else{
			data["products"] = 'No data Found..';
			res.json(data);
		}
	});
});




app.get('/travel/:id',function(req,res){
	var data = {
		
	};
	
	connection.query("SELECT * from travel where id ='" + req.params.id + "'",function(err, rows, fields){
		if(rows.length != 0){
			data["travel"] = rows;
			res.json(data);
		}else{
			data["travel"] = 'No data Found..';
			res.json(data);
		}
	});
});



app.post('/employees', function (req, res) {

	// var name=req.body.name;
	// var email = req.body.email;
	// var description = req.body.description;
	var data  = {

	}
	connection.query("INSERT INTO userinfo (name, email,description) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.description+"')",  function (error, rows, fields) {
		if(rows.length != 0){
			console.log("Register is success");
			data = 'Register is success';
			res.json(data);
			console.log(data);
		}else{
			
			data = 'No data Found..';
			res.json(data);
			console.log(data);
		}
	 });
 });


 app.post('/employees/emp', function (req, res) {

	// var name=req.body.name;
	// var email = req.body.email;
	// var description = req.body.description;
	var data  = {

	}
	connection.query("INSERT INTO tbinfo (room, adult, child, datein, dateout) VALUES ('"+req.body.room+"','"+req.body.adult+"','"+req.body.child+"','"+req.body.datein+"','"+req.body.dateout+"')",  function (error, rows, fields) {
		if(rows.length != 0){
			console.log("Register is success");
			// data = 'Register is success';
			// res.json(data);
			// console.log(data);
			// const data = [];

			// connection.query("SELECT * from tbinfo where id = '" + req.body.id + "'",function(err, results, fields){
			// 	if(rows.length != 0){
			// 		// console.log(results);
			// 		//  data["url"] = departments;
					
			// 		for (let i = 0; i < rows.length; i++) {
			// 			const rows = rows[i];
			// 			rows.url = results[i];
			// 			data.send(rows);
			// 		}

				
			// 		res.json(data);
			// 	}else{
			// 		data["url"] = 'No data Found..';
			// 		res.json(data);
			// 	}
			// });

		}else{
			
			data = 'No data Found..';
			res.json(data);
			console.log(data);
		}
	 });
 });



	
http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});