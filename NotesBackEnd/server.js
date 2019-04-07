const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const conn = "mongodb+srv://note:note@cluster0-lwsh5.mongodb.net/test?retryWrites=true";

const notesSchema = new mongoose.Schema({
	subject: String,
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	message: String
});

app.use(bodyParser.json())

// var corsOptions = {
// 	origin: 'http://example.com',
// 	optionsSuccessStatus: 200 
// }

var db;

var Note = mongoose.model("Notes", notesSchema);

mongoose.connect(conn, { useNewUrlParser: true }, async (err, database) => {
	if (err) {
		console.log('close connection')
	}
	db = database;
	var doc;
	// doc = await Note.find({});
	// console.log('doc ' + doc);
	doc = await Note.findOne({subject: "CJ"})
	console.log('doc ' + doc)
	
	app.listen(8080, () => {
		console.log('Server started. Connection to database established!')
	})
})

// app.route('/notes/PastNotes').get((req, res) => {
// 		res.send([{message: "hello"}, {message: "cj"}]);
// })

// app.route('/notes/PastNotes/:message').get((req, res) => {
// 	const requestedPastNote = req.params['message']
// 	res.send({message: requestedPastNote})
// })

app.get('/notes/PastNotes', function(req, res) {
	res.send([{message: "hello"}, {message: "cj"}]);
})

app.post("/notes/PastNotes", (req, res) => {
	console.log('cray')
	console.log(req.body)
	var myData = new Note(req.body);
	console.log(myData)
	myData.save()
		.then(item => {
			console.log('item ' + item)
			console.log('hola');
			res.send(item);
			db.close();
		})
		.catch(err => {
			res.status(400).send("unable to save to database")
		});
});