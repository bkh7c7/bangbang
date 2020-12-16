var express = require('express');

module.exports.community = function(req,res){
    res.render('community');
}
module.exports.notice = function(req,res){
    res.render('notice');
}
module.exports.release = function(req,res){
    res.render('release');
}
module.exports.roomate = function(req,res){
    res.render('roomate');
}
module.exports.roomdetail = function(req,res){
    res.render('roomdetail');
}
module.exports.roomdetail1 = function(req,res){
    res.render('roomdetail1');
}
module.exports.roomdetail2 = function(req,res){
    res.render('roomdetail2');
}
module.exports.roomdetail3 = function(req,res){
    res.render('roomdetail3');
}

module.exports.signup = function(req,res){
    res.render('signup');
}
module.exports.signin = function(req,res){
    res.render('signin');
}

module.exports.main = function(req,res){
    res.render('main');
}