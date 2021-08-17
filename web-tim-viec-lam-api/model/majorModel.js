const mongoose = require('mongoose');

const major = new mongoose.Schema({ id:{type:String}, name:{type:String} },{collection:'major'});

const majorModel = mongoose.model("major",major);

getAll = async () => { 
    return await majorModel.find({}).exec(); 
}

module.exports = {
    getAll: getAll
}



