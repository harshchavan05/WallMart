//jshint esversion:6

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Calling form.js from models
const From = require("./models/form");
//connecting to database
mongoose.connect("mongodb://localhost:27017/FormDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
//middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// to run static files 
app.use(express.static("public"));


app.get("/", function (req, res) {
	res.render("home");
});

app.get("/about", function (req, res) {
	res.render("about");
});

app.get("/profiles", function (req, res) {
	res.render("profiles");
});

app.get("/submitted", function (req, res) {
	res.render("submitted");
});

app.get("/contact", function (req, res) {
	res.render("contact");
});

//creating from
app.post("/contact", function (req, res) {
	const username = req.body.username;
	const email_id = req.body.email_id;
	const mobile = req.body.mobile;
	const comments = req.body.comments;

	const f = { username: username, email_id: email_id, mobile: mobile, comments: comments };
	
	From.create(f, function (err, CreatedForm) {
		if (err) {
			console.log(err);
		} else {
			res.redirect("/submitted");
		}
	});
});

app.listen(3000, function () {
	console.log("Server started on port 3000.");
});

