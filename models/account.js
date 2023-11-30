//pasport config
//use the existing connection
//the account model
var Account = require('../models/account');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
const mongoose = require('mongoose');
    Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
    username: String,
    password: String
});
accountSchema.methods.authenticate = function(local){
    return this.local ===local;
}

accountSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("Account", accountSchema);