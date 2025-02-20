const joi = require('joi');

const shemaUserID = joi.number().integer().min(0).label("id");

const shemaUserInput = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    age: joi.number().integer().min(0).max(150).required(),
    city: joi.string().min(1)
});

module.exports = { shemaUserID, shemaUserInput };