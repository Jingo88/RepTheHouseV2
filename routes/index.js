var express = require('express');

var router = express.Router();

router.get('/', (req, res)=>{
  res.send("Hi There!");
});

module.exports = router;