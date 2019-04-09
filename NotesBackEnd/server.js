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