var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.set('port',process.env.PORT || 3000);

//设置模板引擎
app.set('views',path.join(__dirname,'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

//设置静态资源目录
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
	res.render('index');
});

app.use(function(req,res){
	res.status(400);
	res.render('404');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express is started on localhost://' + app.get('port'));
});
