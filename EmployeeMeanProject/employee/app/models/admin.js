'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
   
/**
 * Employee Schema
 */
var AdminSchema = new Schema({
	name:String,
	role:String,
	userName:String,
	password:String
});

mongoose.model('AdminSchema', AdminSchema);