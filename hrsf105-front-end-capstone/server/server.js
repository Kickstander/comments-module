var express = require('express');
var app = express();

app.use(express.static('client/dist'));

app.listen(3000, () => {
  console.log('listening..............o.o');
});
