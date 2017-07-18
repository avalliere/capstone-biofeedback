
// #!/usr/bin/env node

// var serialserver = require('./p5.serialserver');
// serialserver.start();
// console.log("p5.serialserver is running");



const express = require('express')
const app = express()
const port = process.env.PORT || 8081

app.use(express.static('public'));

// app.get('/', function (req, res) {
  // res.send('Hello World!')
  // res.sendFile(__dirname + '/index.html')
// })

app.get('/:query', function (req, res) {
  var query = req.params.query
  res.send('Hello ' + query)
})

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})
