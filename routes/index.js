var express = require('express');
var router = express.Router();


function editDate(date){

}

const title = 'Message Board';
const messages = [
  {
    text: "Hello There",
    user: "Obi-Wan",
    added: new Date().toLocaleString()
  },
  {
    text: "Quit complaining",
    user: "My Wife",
    added: new Date().toLocaleString()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title, messages });
});

router.get('/new', function(req, res, next){
  res.render('form')
});

router.post('/new', function(req, res, next){
  messages.push(
    {
      text: req.body.messageText,
      user: req.body.messageUser,
      added: new Date().toLocaleString()
    }
  );
  res.redirect('/');
});

module.exports = router;
