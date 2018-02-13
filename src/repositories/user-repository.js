'use strict';
const mogoose = require('mongoose');
const User = mogoose.model('User');

exports.create = async (data) => {
    var user = new User(data);
    await user.save();
};