var express = require('express');
var router = express.Router();
const majorModel = require('../model/majorModel');

router.get('/get-all-major', function(req, res, next) {
  majorModel.getAll().then(result => {
    if(result.length !== 0){
      res.send(result);
    }
  }).catch(error => console.error)
});

module.exports = router;