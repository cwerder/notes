const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const conn = "mongodb+srv://note:note@cluster0-lwsh5.mongodb.net/test?retryWrites=true";

const notesSchema = new mongoose.Schema({
	subject: String,
	date: {type: Date, default: Date.now},
	message: String
});

var corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200 
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

var Note = mongoose.model("Notes", notesSchema);

mongoose.connect(conn, { useNewUrlParser: true }, (err, database) => {
	if (err) {
		console.log('close connection')
	}
	
	app.listen(8080, () => {
		console.log('Server started. Connection to database established!')
	})
	// var myNote = new Note({"subject": "hello", "message": "world"})
	// database.collection("notes").deleteOne(myNote);
	// console.log("deletion successful")
})

app.get('/notes/PastNotes', async function(req, res) {
	let data = Note.find({})
	data.then(result => {
		res.send(result);
	})
})

app.post("/notes/PastNotes", (req, res) => {
	console.log(req.body)
	var myData = new Note(req.body);
	console.log(myData)
	myData.save()
		.then(item => {
			console.log('item ' + item)
			res.send(item);
		})
		.catch(err => {
			res.status(400).send("unable to save to database")
		});
});

app.delete("/notes/PastNotes/:id", (req, res) => {// /:id is parsed as a variable placeholder name
	Note.findByIdAndDelete(req.params.id, (err, result) => {
		console.log(result + " was successfully deleted");
		res.send(result);
	});
})