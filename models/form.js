var mongoose = require("mongoose");

var formSchema = new mongoose.Schema({
    username: String,
    email_id: String,
    mobile: Number,
    comments: String
});

module.exports = mongoose.model("Form", formSchema);