var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});