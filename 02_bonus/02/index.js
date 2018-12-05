const express = require('express')
const app = express()

	app.get('/', function (req, res) {
		res.send('Hello World !, This IS MY NODEJS DOCKER :p')
	})

app.listen(8081, function () {
	console.log('Example app listening on port 8081 !')
})


