var express = require('express'),
	app = express();
var fs = require('fs');
var nodemailer = require('nodemailer');
var babel = require("babel-core");
var browserify = require("browserify");
var babelify = require("babelify");

/*browserify({ debug: true })
  .transform(babelify)
  .require("public/a/build/portfolio.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("public/a/js/portfolio.js"));

browserify({ debug: true })
  .transform(babelify)
  .require("public/a/build/contact_form.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("public/a/js/contact_form.js"));*/

app.configure(function(){
	app.set('port', process.env.PORT || 8080);
});

app.get('/',function(req,res){
    res.sendfile('public/index.html');
});

app.get('/send',function(req,res){

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: process.env.seruser,
        pass: process.env.serpass
    }
});
 
	var mailOptions = {
	    from: req.query.from,
	    to: 'graeme.brunton22+pw@gmail.com',
	    subject: 'Portfolio Contact',
	    html: '<p>You have received a message from ' + req.query.name + '</p><p>Their email address is ' + req.query.from + '</p><br><p>' + req.query.text + '</p>'
	};

	smtpTransport.sendMail(mailOptions, function(error, info){
    	if(error){
        console.log(process.env.seruser);
        console.log(process.env.serpass);
        	res.end('error');
        	console.log(error);
    	}

    	else {
    	res.end('sent');
    	console.log('Message sent: ' + info.response);
    	}
	});
});

app.use(express.favicon(__dirname + '/public/a/imgs/logo.ico'));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'));