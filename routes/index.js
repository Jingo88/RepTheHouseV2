var express = require('express');

var router = express.Router();

router.get('/', (req, res)=>{
  res.render('index');
});

router.get('/search', function(req,res){
	res.render('search')
})


module.exports = router;
