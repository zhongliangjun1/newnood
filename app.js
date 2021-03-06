
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var review = require('./routes/review');
var tweekService = require('./routes/tweekService');

var mvc = require('./routes/mvc');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/success', routes.success);
app.get('/users', user.list);



app.get('/tweek', routes.tweek);
app.post('/tweek/add', tweekService.addTweek);
app.get('/feed', tweekService.getFeedByPage);




app.get('/mvc/index', mvc.mvcIndex);
app.post('/person', mvc.updatePerson);
app.get('/person', mvc.getPerson);

app.get('/reviewLookRequestContent/:id', review.findReviewByID);
app.get('/review/:id', review.findReviewByIDFromDB);
app.post('/review/add', review.addReview);
//app.get('/review/add?', review.addReview); //for test
app.post('/review/addWithFile', review.addReviewWithFiles);
app.get('/review/addPriceByReviewID/:id', review.addPriceByReviewID);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
