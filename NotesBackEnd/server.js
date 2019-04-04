const express = require('express')

const app = express()

app.listen(8080, () => {
	console.log('Server started!')
	// app.route('/notes/PastNotes').get((req, res) => {
	// 	res.send([{message: "hello"}, {message: "cj"}]);
	// })
})

app.route('/notes/PastNotes').get((req, res) => {
		res.send([{message: "hello"}, {message: "cj"}]);
})