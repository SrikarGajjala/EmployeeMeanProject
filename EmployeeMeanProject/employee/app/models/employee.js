'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
   
/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
    name: String,
    address: {
        street1: String,
        street2: String,
        suburb : String,
        state  : String,
        zipcode: String
    },
    designation: String,
    salary: String
});

mongoose.model('EmployeeSchema', EmployeeSchema);