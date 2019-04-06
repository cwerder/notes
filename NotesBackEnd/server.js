const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const conn = "mongodb+srv://note:note@cluster0-lwsh5.mongodb.net/test?retryWrites=true";

const notesSchema = new mongoose.Schema({
	subject: String,
	message: String
});

app.use(bodyParser.json())

// var corsOptions = {
// 	origin: 'http://example.com',
// 	optionsSuccessStatus: 200 
// }
var db;

var Note = mongoose.model("Notes", notesSchema);

/*MongoClient*/mongoose.connect(conn, { useNewUrlParser: true }, (err, database) => {
	if (err) {
		console.log('close connection')
	}
	// const collection = database.db("test").collection("Notes");
	// console.log('collection ' + collection);
	db = database;
	app.listen(8080, () => {
		console.log('Server started!')
	})
	app.post("/notes/PastNotes", (req, res) => {
		console.log('cray')
		console.log(req.body)
		var myData = new Note(req.body);
		console.log(myData)
		myData.save()
			.then(item => {
				console.log('item ' + item)
				// res.send(`${item} saved to database`)
				console.log('hola');
				res.send(item);
				db.close();
			})
			.catch(err => {
				res.status(400).send("unable to save to database")
			});
	});
})

app.route('/notes/PastNotes').get((req, res) => {
		res.send([{message: "hello"}, {message: "cj"}]);
})

app.route('/notes/PastNotes/:message').get((req, res) => {
	const requestedPastNote = req.params['message']
	res.send({message: requestedPastNote})
})

// app.route(bodyParser.json())
// app.post("/notes/PastNotes", (req, res) => {
// 	var myData = new Note(req.body);
// 	console.log('do you hit this?')
// 	console.log(myData)
// 	var p = myData.save();
// 	console.log(p);
// 	p
// 		.then(item => {
// 			// res.send(`${item} saved to database`)
// 			res.sendStatus(200);
// 		})
// 		.catch(err => {
// 			res.status(400).send("unable to save to database")
// 		});
// });