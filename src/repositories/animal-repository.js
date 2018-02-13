'use strict';
const mogoose = require('mongoose');
const Aminal = mogoose.model('Animal');

exports.get = async () => {
  const res = await Aminal.find({
    active: true
  }, 'name photo description data user');
  return res;
};

exports.create = async (data) => {
  var animal = new Animal(data);
  await animal.save();
};

exports.update = async (id, data) => {
  await Aminal 
    .findByIdAndUpdate(id, {
      $set: {
        name: data.name,
        photo: data.photo,
        description: data.description
      }
    });
};

exports.delete = async (id) => {
  await Animal 
  .findOneAndRemove(id);
}