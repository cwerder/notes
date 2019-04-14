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
})

app.get('/notes/PastNotes', async function(req, res) {
	let data = Note.find({})
	data.then(result => {
		res.send(result);
	})
})

app.post("/notes/NewNote", (req, res) => {
	console.log('in server')
	console.log(req.body);
	var myData = new Note(req.body);
	console.log(myData)
	myData.save()
		.then(item => {
			console.log('item ' + item)
			res.send(item);
		})
		.catch(() => {
			res.status(400).send("unable to save to database")
		});
});

app.put("/notes/PastNotes/:id", (req, res) => {
	Note.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
		console.log(result + " was successfully updated");
		res.send(result);
	})
})

app.delete("/notes/PastNotes/:id", (req, res) => {// /:id is parsed as a variable placeholder name
	Note.findByIdAndDelete(req.params.id, {new: true}, (err, result) => {
		console.log(result + " was successfully deleted");
		res.send(result);
	});
})