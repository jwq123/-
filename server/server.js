/**
 * Created by Administrator on 2017/8/11.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.listen(3000);
