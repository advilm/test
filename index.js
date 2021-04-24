const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/test.html'));

app.listen(8080)