const express = require('express');
const router = express.Router();
const Content = require('../Controller/Content')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/content', (req, res, next)=>{
  const { content, body } = req.body
  console.log(content,body);
  Content.Add(content, body, (result)=>{
    res.json(result.status);
  })

});

module.exports = router;
