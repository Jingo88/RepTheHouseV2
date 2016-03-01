var express = require('express');

var router = express.Router();

router.get('/', (req, res)=>{
  res.render('index');
});

router.get('/blah', function(req,res){
	res.render('blah')
})


module.exports = router;
